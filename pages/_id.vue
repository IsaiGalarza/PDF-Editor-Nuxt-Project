<template>
  <div class="mt-[70px] lg:mt-0 px-2">

    <ProfileTopInfo :userInfo="userInfo" @openShare="handleCompanyNameShare(userInfo?.companyName, userInfo?.businessPage)" />

    <div class="h-full ml-3 mt-8  flex">
        <div
          @click="changeTab(1)"
          :class="[tabNumber === 1 ? 'active-tab' : 'tab']"
          class="mr-4"
        >
          <p>Files</p>
        </div>
        <div
          :class="[tabNumber === 2 ? 'active-tab' : 'tab']"
          @click="changeTab(2)"
          class="tab"
        >
          <p>Folders</p>
        </div>
      </div>

    <div v-if="fileSpinner" class=" relative h-[300px]">
      <!-- START: spinner container -->
      <div class="absolute z-10 w-full h-full top-0 left-0 rounded-lg flex justify-center items-center">
        <spinner-dotted-icon class="text-paperdazgreen-400 animate-spin" />
      </div>
      <!-- END: spinner container -->
    </div>


   





    <!-- Start:: Files -->
    <div v-if="isFetched && !showFolderFiles" class="border-t-[10px] lg:border-t-[5px] bg-white border-t-[#77C360] min-h-[67vh] rounded-xl pb-8 px-2" :class="{ 'hidden sm:block': showFolders }">

      <div  v-show="tabNumber === 2" class="mt-4  bg-white mb-6 rounded-xl">
      <!-- Start:: Folders -->
      <div class="bg-white rounded-xl mb-4" >
        <!-- <div class="w-full p-4 pb-0 sm:hidden">
          <div class="flex items-center bg-gray-100 rounded text-sm w-full">
            <div class="flex items-center justify-center h-10 w-1/2 cursor-pointer"
              :class="{ 'text-white bg-gray-500 rounded': !showFolders }" @click="showFolders = false">Files</div>
            <div class="flex items-center justify-center h-10 w-1/2 cursor-pointer"
              :class="{ 'text-white bg-gray-500 rounded': showFolders }" @click="showFolders = true">Folders</div>
          </div>
        </div> -->




        <!-- Start:: Single row -->
        <div
       
        class="flex items-center flex-wrap px-[1.5rem] ">
        <div class="items-center mb-3 border-2 py-[15px] pl-[15px] rounded-[16px] md:mr-[15px] border-[#909090] w-full  md:w-[calc(25%-15px)] "
          v-for="(content, i) in folders" :key="content.id">
          <div class="overflow-hidden px-[10px] flex justify-between">
            <div class="float-left flex">
              <span class="border-none inline-block float-left pt-[4px]">
                <img class="w-[28px]" src="~/assets/img/Vector.png" />
              </span>
              <p
                @click="showFolderFilesFunc(content)"
                class="text-base font-medium text-center text-[#414142] truncate cursor-pointer inline-block ml-[27px]"
              >
                {{ content.name }}
              </p>
            </div>
            <div class="float-right flex">
              <span>{{ content.files.length }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      <FilePagination :totalFile="totalFolder" @setPage="setFolderPage" />
    </div>
    <!-- End:: Folders -->
      <div  v-show="tabNumber === 1" class="rounded-2xl w-full md:min-w-[300px] overflow-x-auto custom-scrollbar relative">
        <table class="custom-table py-2">
          <thead class="text-[#414142]">
            <tr >
              <!-- <th class="w-12 text-center fixed-col left">No</th> -->
              <th class="text-left font-[700] hidden md:table-cell ">File name </th>

              <th class="hidden md:table-cell">Action</th>
              <th class="hidden md:table-cell">Privacy</th>
              <th v-show="files.length > 10" class=" font-[700]  right">
                <form  @submit.prevent
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
                <div class="flex  items-center">
                  <img src="/icon.png" class="mr-3" width="23" height="23" />
                  <div class="">
                    <p class="text-[#414142] whitespace-nowrap truncate text-[15px]">
                    <p @click="routeToFileManager(`/pdf/${item.paperLink}`, item.filePrivacy, item.id)" class="cursor-pointer capitalize">
                      {{ ((item || {}).fileName || ' ') | removeExtension }}
                    </p>


                    <div class="flex  md:hidden items-center mt-1 text-[0.65rem] text-[#707070]">
                      <p v-show="((item || {}).fileAction) != 'doNotPost'" class="capitalize"> {{ ((item || {}).fileAction
                        ||
                        '') }}</p>

                       <div class="w-1 h-1 mx-2 rounded-[50%] bg-black"></div>

                      <p class="capitalize  ">
                        {{ ((item || {}).filePrivacy || '') }}
                      </p>
                    </div>
                    </p>
                  </div>
                </div>
              </td>
              <td class="hidden md:table-cell">
                <p v-show="((item || {}).fileAction) != 'doNotPost'" class="capitalize"> {{ ((item || {}).fileAction ||
                  '') }}</p>
              </td>
              <td>
                <p class="capitalize hidden md:table-cell">
                  {{ ((item || {}).filePrivacy || '') }}
                </p>
              </td>
              <td class=" flex justify-end">
                <div @click="shareLinkFunc(item.paperLink, item.fileName)" class="flex w-[100px]   sm:w-full   justify-end ">
              <td class=" ">
                <div @click="shareLinkFunc(item.paperLink, item.fileName)" class="flex  w-10 justify-end ">
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

    <div v-if="showFolderFiles" class="border-t-[8px] lg:border-t-[5px] bg-white border-t-[#77C360] min-h-[67vh] rounded-xl pb-8 px-2" >
      <div class="flex items-center w-full pt-2 px-4 mb-[-20px] ">
        <button class="px-2 py-1 bg-paperdazgreen-300 text-white rounded-md sm:inline-block hidden" @click="showFolderFiles = false">
          Back
        </button>
        <button class="h-2 w-3 outline-none border-none inline-block sm:hidden" @click="showFolderFiles = false">
          <arrow-down-icon class="h-3 w-4 rotate-90" />
        </button>
        <div class="flex-1 flex justify-center text-paperdazgreen-300 font-semibold text-base">
           {{ currentFolder.name }}
        </div>
      </div>
    <BusinessPageFilesInFolder :currentFolder="currentFolder"
    @handleShareInFolderFile="shareLink"
    @emitPrivateModal="emitPrivateModal"
    />
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
import UserTypeEnum from '~/models/UserTypeEnum'
import BusinessPageFilesInFolder from '~/components/profile/components/BusinessPageFilesInFolder.vue'


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
    PG_Tutorial_8,
    BusinessPageFilesInFolder,
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
    this.fetchFolder(this.returnedFolderPage)
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
      return (filename || "").replace(/\.[^\/.]+$/, '');
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
      folderSpinner: false,
      totalFolder: 0,
      currentFolder: {},
      showFolderFiles: false,
      tabNumber: 1,
      isFolderTabSelected: false,

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
    changeTab(num) {
      this.tabNumber = num;
      // this.setRefresh();
      if (num === 1) return (this.showFolderFiles = false);
    },
    emitPrivateModal(val){
      this.fileId = val.id
      this.showPrivateModal = true
    },
    showFolderFilesFunc(val){
     this.currentFolder = val
     this.showFolderFiles = true
    },
    async increaseCount() {
      this.keepCount = this.keepCount + 1
      if (this.keepCount == this.popUps.length) {
        this.showGuideModal = false
        // await this.updateTutorialStatus()
        // await this.filterUsers()
        document.body.style.overflow = 'auto'
      }
    },
    handleCompanyNameShare(name, link) {
      this.isCompanyShare = true
      let linkRX = `${window.location.origin}/${link}`
      this.shareLink(linkRX, name)
    },
    shareLinkFunc(val, type) {
      this.shareLink(`${window.location.origin}/pdf/${val}`, type)
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
        .$post(`/files`, {
          action:"filesWithoutFolder",
          userId: this.userInfo?.id
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
    async fetchFolder(page) {
      await this.$axios
        .$get(`/folders/?userId=${this.userInfo?.id}&$sort[updatedAt]=-1&$skip=${page}`)
        .then((response) => {
          console.table(response.data, 'table data')
          this.totalFolder = response.total;
          this.folders = response.data;
          this.folderSpinner = false
        })
        .finally(() => {
          this.folderSpinner = false;
        });
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
    returnedFolderPage: function () {
      this.fetchFolder(this.returnedFolderPage)
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

.tab {
  @apply w-[90px] md:w-[120px] text-[0.9rem] cursor-pointer flex font-[500] items-center pl-[8px] text-[#000] border-[#77B550] rounded-t-[10px] shadow-lg border-[2px] h-[30px] bg-[#fff];
}

.active-tab {
 @apply text-sm tab text-white ;
 background-color: #77B550;
 color: #fff;
 
}
#bottom-nav {
  display: none !important;
}



</style>