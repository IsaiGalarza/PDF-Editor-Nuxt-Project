<template>
  <div class="mt-[70px] lg:mt-0 px-2">
  
    <ProfileTopInfo :userInfo="userInfo" @openShare="handleCompanyNameShare(userInfo?.companyName,)" />

    <div v-if="fileSpinner" class=" relative h-[300px]">
      <!-- START: spinner container -->
      <div class="absolute z-10 w-full h-full top-0 left-0 rounded-lg flex justify-center items-center">
        <spinner-dotted-icon class="text-paperdazgreen-400 animate-spin" />
      </div>
      <!-- END: spinner container -->
    </div>


    <div class="mt-4">
      <!-- Start:: Folders -->
      <div class="bg-white rounded-xl mb-4" :class="{ 'hidden sm:block': !showFolders }">
        <div class="w-full p-4 pb-0 sm:hidden">
          <div class="flex items-center bg-gray-100 rounded text-sm w-full">
            <div class="flex items-center justify-center h-10 w-1/2 cursor-pointer"
              :class="{ 'text-white bg-gray-500 rounded': !showFolders }" @click="showFolders = false">Files</div>
            <div class="flex items-center justify-center h-10 w-1/2 cursor-pointer"
              :class="{ 'text-white bg-gray-500 rounded': showFolders }" @click="showFolders = true">Folders</div>
          </div>
        </div>




        <!-- Start:: Single row -->
        <div v-for="(item, i) in folders" :key="i + 'folder'"
          class="grid grid-cols-[max-content,1fr,max-content] gap-2 items-center mx-4 folder-border py-2">
          <img class="w-7" src="@/assets/recent-icons/OpenedFolder.svg" />
          <div class="overflow-hidden">
            <p class="text-[#414142] whitespace-nowrap truncate text-[15px]">
              <nuxt-link :to="`/public-profile/${item.id}`" class="cursor-pointer">{{ (item || {}).name }}</nuxt-link>
            </p>
          </div>
          <ShareFolder :folder="item" :showShareIcon="false" :isCompanyNameShare="isCompanyShare" />
        </div>
        <!-- End:: Single row -->
      </div>
      <FilePagination :totalFile="totalFolder" @setPage="setFolderPage" />
    </div>
    <!-- End:: Folders -->





    <!-- Start:: Files -->
    <div v-if="isFetched" class="bg-white rounded-xl pb-8 px-2" :class="{ 'hidden sm:block': showFolders }">
      <div class="rounded-2xl min-w-[300px] overflow-x-auto custom-scrollbar relative">
        <table class="custom-table">
          <thead class="text-[#414142]">
            <tr>
              <!-- <th class="w-12 text-center fixed-col left">No</th> -->
              <th class="text-left font-[700] ">File name </th>

              <th class="lg:table-cell">Action</th>
              <th class="lg:table-cell">Privacy</th>
              <th class=" font-[700]  right">
                <form v-show="files.length > 10" @submit.prevent
                  class="flex flex-1 justify-end items-center gap-2 text-xs text-gray-800 relative">
                  <span v-if="showFile" class="el-dropdown-link max-sm:flex-1 absolute top-[-30px] ">
                    <input type="text" placeholder="Search any file..."
                      class="rounded-lg border !border-paperdazgreen-400 px-2 h-7 w-full sm:w-[165px] md:w-48  placeholder:italic"
                      v-model="searchFileParam" />
                  </span>
                  <button @click="showFile = !showFile" type="button"
                    class="circle circle-15 bg-paperdazgreen-400 text-white">
                    <search-icon width="14" height="14" currentcolor="white" />
                  </button>
                </form>
              </th>
            </tr>
          </thead>
          <tbody class="text-[#505050]">
            <tr v-for="(item, i) in files" :key="i">
              <!-- <td class="w-12 text-center fixed-col left">{{ i + 1 }}</td> -->
              <td class="row">
                <div class="flex items-center">
                  <img src="/icon.png" class="mr-2" width="23" height="23" />
                  <p class="text-[#414142] whitespace-nowrap truncate text-[15px]">
                    <span @click="routeToFileManager(`/pdf/${item.paperLink}`, item.filePrivacy, item.id)" class="cursor-pointer">
                      {{ ((item || {}).fileName || ' ') | removeExtension }}
                    </span>
                  </p>
                </div>
              </td>
              <td class="lg:table-cell">
                <p v-show="((item || {}).fileAction) != 'doNotPost'" class="capitalize"> {{ ((item || {}).fileAction ||
                  '') }}</p>
              </td>
              <td>
                <p  class="capitalize lg:table-cell">
                  {{ ((item || {}).filePrivacy || '') }}
                </p>
              </td>
              <td class=" ">
                <div @click="shareLinkFunc(item.paperLink, item.fileName)" class="flex  w-full justify-end ">
                  <ShareOutlineIcon />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="files.length === 0 && isFetched" class="flex items-center justify-center py-4">
          <p>No Item Found</p>
        </div>
      </div>
      <FilePagination :totalFile="totalFile" @setPage="setFilePage" />
    </div>


    <PopUpWrapper @count="increaseCount" :showModal="showGuideModal">
      <component :is="popUps[keepCount]" />
    </PopUpWrapper>


    <PrivateFileModal v-model="showPrivateModal" :fileId="fileId" :userInfo="userInfo"/>
    <ShareCompanyLinkModal :link="link" :type="type" v-model="showShareCompanyName" />
  </div>
</template>

<script>
import Vue from 'vue'
import PenIcon from '~/components/svg-icons/PenIcon.vue'
import QRCode from 'qrcode'
import SearchIcon from '~/components/svg-icons/SearchIcon.vue'
import FolderIcon from '~/components/svg-icons/FolderIcon.vue'
import FolderSolidIcon from '~/components/svg-icons/FolderSolidIcon.vue'
import ShareIcon from '~/components/svg-icons/ShareIcon.vue'
import ShareOutlineIcon from '~/components/svg-icons/ShareOutlineIcon.vue'
import HeartOutlineIcon from '~/components/svg-icons/HeartOutlineIcon.vue'
import ForwardOutlineIcon from '~/components/svg-icons/ForwardOutlineIcon.vue'
import SpinnerDottedIcon from '../components/svg-icons/SpinnerDottedIcon.vue'
import ArrowDownIcon from '~/components/svg-icons/ArrowDownIcon.vue'
import FilePagination from '~/components/pagination/FilePagination.vue'
import ShareFileOptions from '~/components/profile/components/ShareFileOptions.vue'
import ShareIconFunc from '~/components/search-strips/component/ShareIconFunc.vue'
import ShareFolder from '~/components/search-strips/component/ShareFolder.vue'
import PrivateFileModal from '~/components/profile/modal/PrivateFileModal.vue'
import FilePrivacy from '~/models/FilePrivacy'
import ShareCompanyLinkModal from '~/components/company-files/ShareCompanyLinkModal.vue'
import PopUpWrapper from '~/components/dashboard/PopUps/PopUpWrapper.vue'
import PG_Tutorial_1 from "~/components/profile/modal/PopUps/PG_Tutorial_1.vue"
import PG_Tutorial_2 from "~/components/profile/modal/PopUps/PG_Tutorial_2.vue"
import PG_Tutorial_3 from "~/components/profile/modal/PopUps/PG_Tutorial_3.vue"
import PG_Tutorial_4 from "~/components/profile/modal/PopUps/PG_Tutorial_4.vue"
import PG_Tutorial_5 from "~/components/profile/modal/PopUps/PG_Tutorial_5.vue"
import PG_Tutorial_6 from "~/components/profile/modal/PopUps/PG_Tutorial_6.vue"
import PG_Tutorial_7 from "~/components/profile/modal/PopUps/PG_Tutorial_7.vue"
import PG_Tutorial_8 from "~/components/profile/modal/PopUps/PG_Tutorial_8.vue"


export default Vue.extend({
  components: {
    PenIcon,
    SearchIcon,
    FolderIcon,
    FolderSolidIcon,
    ShareIcon,
    ShareOutlineIcon,
    HeartOutlineIcon,
    ForwardOutlineIcon,
    SpinnerDottedIcon,
    ArrowDownIcon,
    FilePagination,
    ShareFolder,
    ShareFileOptions,
    ShareIconFunc,
    PrivateFileModal,
    ShareCompanyLinkModal,
    ShareOutlineIcon,
    PopUpWrapper,
    PG_Tutorial_1,
    PG_Tutorial_2,
    PG_Tutorial_3,
    PG_Tutorial_4,
    PG_Tutorial_5,
    PG_Tutorial_6,
    PG_Tutorial_7,
    PG_Tutorial_8
  },
  name: 'PublicProfilePage',
  layout: 'profile',
  auth: false,
  // middleware: ['paid-user'],
  async asyncData({ store, params, $axios, error }) {
    store.commit('SET_PAGE_NAME', { name: 'Profile' })
    const userInfo = await $axios
      .$get(`users/?businessPage=${params?.id}`)
      .then((response) => {
        const [userInfo] = response.data
        if (!userInfo) error({ statusCode: 404 })
        return userInfo
      })
      .catch((err) => {
        error({
          statusCode: 404,
          message: err.message,
        })
      })

    return { userInfo }
  },

  mounted() {
    this.getUserFiles(this.returnedDataPage, this.searchFileParam)
    this.generateQR()
    // document.body.style.overflow = 'auto'
  },
  computed: {
    isAuthor() {
      return this.$auth?.user?.id == this.userInfo?.id
    },
  },
  filters: {
    removeExtension(filename) {
      return filename?.replace(/\.[^\/.]+$/, '');
    }
  },

  data() {
    return {
      returnedDataPage: 0,
      returnedFolderPage: 0,
      totalFile: null,
      totalFolder: null,
      searchFolderParam: '',
      searchFileParam: '',
      folders: [],
      files: [],
      show: false,
      showFile: false,
      fileSpinner: true,
      folderSpinner: true,
      checkWEmptyFileFolder: false,
      showFolders: false,
      showSearch: false,
      isFetched: false,
      showPrivateModal: false,
      showShareCompanyName: false,
      isCompanyShare:false,
      link: "",
      keepCount: 0,
      showGuideModal: false,
      type: "",
      permissionDecode: undefined,
      popUps: [
        'PG_Tutorial_1',
        'PG_Tutorial_2',
        'PG_Tutorial_3',
        'PG_Tutorial_4',
        'PG_Tutorial_5',
        'PG_Tutorial_6',
        "PG_Tutorial_7",
        'PG_Tutorial_8'
      ],
      fileId: ''
    }
  },
  methods: {
    async increaseCount() {
      this.keepCount = this.keepCount + 1
      if (this.keepCount == this.popUps.length) {
        this.showGuideModal = false
        // await this.updateTutorialStatus()
        // await this.filterUsers()
        document.body.style.overflow = 'auto'
      }
    },

    handleCompanyNameShare(name){
      this.isCompanyShare = true
      let val = name.replace(' ', '') 
      let link = `https://paperlink.app/${val}`
      this.shareLink(link, name )
    },
    shareLinkFunc(val, type) {
      this.shareLink(`https://paperlink.app/pdf/${val}`, type)
    },
    shareLink(val, type) {
      
      this.link = val
      this.type = type
      this.showShareCompanyName = true
      
    },
    routeToFileManager(val, privacy, id) {
      this.fileId = id
      if (privacy == FilePrivacy.PRIVATE) this.showPrivateModal = true
      else {
        localStorage.setItem('store_public_profile_path', this.$route.fullPath)
        this.$router.push(val)
        localStorage.setItem("from_publicpage", JSON.stringify({fromBusiness: true}))
      }
    },
    // getMainPaidUser(val) {
    //   this.$axios.get(`/users/?mainAccountId=${val}&role=${UserTypeEnum.PAID}`)
    //     .then((response) => {
    //       this.userInfo = response.data.data[0]
    //     })
    // },
    setFilePage(page) {
      this.fileSpinner = true
      this.returnedDataPage = page
    },
    setFolderPage(page) {
      this.folderSpinner = true
      this.returnedFolderPage = page
    },
    async getUserFiles(page, search) {
      await this.$axios
        .$get(`/files/?userId=${this.userInfo?.id}&fileName[$like]=${search}%&$skip=${page}&$sort[position]=1&filePrivacy[$ne]=doNotPost`, {
          params: {
            isEditing: 0
          }
        })
        .then((response) => {
          const filesData = response.data.map((el) => {
            return el
          })
          this.files = filesData
          this.isFetched = true

          this.checkWEmptyFileFolder = filesData <= 0
          this.fileSpinner = false
          this.totalFile = response.total
        })
    },
    async generateQR() {
      QRCode.toCanvas(this.$refs.qrcancas, location.href, function () { })
      await this.$nextTick()
    },
  },
  watch: {
    "$auth.user.id": function () {
      this.getUserFiles(this.returnedDataPage, this.searchFileParam)
      this.$auth.setUser({})
    },
    returnedDataPage: function () {
      this.fileSpinner = true;
      this.getUserFiles(this.returnedDataPage, this.searchFolderParam)
    },
    searchFileParam() {
      this.getUserFiles(this.returnedDataPage, this.searchFileParam)
    },
    returnedDataPage() {
      this.getUserFiles(this.returnedDataPage, this.searchFileParam)
    }
  },
})
</script>
<style lang="scss">
.el-notification {
  z-index: 999999 !important;
}

.folder-border {
  @apply border-b border-[#DCDCDC];

  &:nth-last-child(1) {
    border: none
  }
}

#bottom-nav{
  display: none !important;
}
</style>