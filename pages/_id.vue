<template>
  <div class="">
    <ProfileTopInfo :userInfo="userInfo" />
    <!-- <header class="text-paperdazgreen-400 font-semibold p-4 border-b border-[#DCDCDC]">
        <h4 class="text-[19px]">Folders \ Files</h4>
      </header> -->
    <!-- <div class=" grid place-items-center p-4"> -->
    <!-- <div>
          <p class="text-center text-[#434242] text-md font-medium">
            Your Public Profile is empty!
          </p>
          <div class="grid place-items-center">
            <button class="text-sm font-medium text-white h-10 rounded-xl bg-paperdazgreen-400 shadow mt-2 px-5">
              Turn files into Paperlink
            </button>
          </div>
        </div> -->
    <!-- <div v-if="!files.length">
          <img src="@/assets/img/dashboard-bg.png" class=" mt-4 md:w-auto sm:w-[200px]" />
          <p class="text-center text-[22px] text-[#434242] text-md font-medium mt-4 mb-16">
            <span v-if="isAuthor">Upload files and create folders!</span>
            <span v-else>Come back to see our files!</span>
          </p>
        </div> -->

        <div v-if="fileSpinner" class=" relative h-[300px]">
        <!-- START: spinner container -->
        <div 
          class="absolute z-10 w-full h-full top-0 left-0 rounded-lg flex justify-center items-center">
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
          <ShareFolder :folder="item"  :showShareIcon="false" />
        </div>
        <!-- End:: Single row -->
      </div>
      <FilePagination :totalFile="totalFolder" @setPage="setFolderPage" />
    </div>
    <!-- End:: Folders -->





    <!-- Start:: Files -->
    <div v-if="isFetched" class="bg-white rounded-xl pb-8" :class="{ 'hidden sm:block': showFolders }">
      <div class="w-full p-4 pb-0 sm:hidden">
        <div class="flex items-center bg-gray-100 rounded text-sm w-full">
          <div class="flex items-center justify-center h-10 w-1/2 cursor-pointer"
            :class="{ 'text-white bg-gray-500 rounded': !showFolders }" @click="showFolders = false">Files</div>
          <div class="flex items-center justify-center h-10 w-1/2 cursor-pointer"
            :class="{ 'text-white bg-gray-500 rounded': showFolders }" @click="showFolders = true">Folders</div>
        </div>
      </div>
      <!-- <header v-if="files.length"
        class="py-2 px-2 mx-4 text-paperdazgreen-400 flex flex-wrap items-center gap-2 justify-between">
        <h4 class="text-xl font-medium hidden sm:block">Files</h4>

      </header> -->

      <div  class="rounded-2xl min-w-[300px] overflow-x-auto custom-scrollbar relative">
        <table class="custom-table">
          <thead class="text-[#414142]">
            <tr>
              <!-- <th class="w-12 text-center fixed-col left">No</th> -->
              <th class="text-left font-[700] ">File name </th>

              <th class=" font-[700]  right">Action</th>
              <th class=" font-[700]  right">Privacy</th>
              <th class=" font-[700]  right">
                <form @submit.prevent class="flex flex-1 justify-end items-center gap-2 text-xs text-gray-800 relative">
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
                    <span @click="routeToFileManager(`/pdf/${item.paperLink}`, item.filePrivacy)" class="cursor-pointer">
                      {{ ((item || {}).fileName || ' ') | removeExtension }}
                    </span>
                  </p>
                </div>
              </td>
              <td>
                {{ ((item || {}).fileAction || ' ') }}
              </td>
              <td>
                <p class="capitalize">
                  {{ ((item || {}).filePrivacy || ' ') }}
                </p>
              </td>
              <td class="flex ">
                <div class="flex  w-full justify-end ">
                  <ShareIconFunc  :file="item"  />
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
    <!-- Start:: Files -->

    <PrivateFileModal v-model="showPrivateModal"/>
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
import FreeUser from '~/middleware/free-user'
import SpinnerDottedIcon from '../components/svg-icons/SpinnerDottedIcon.vue'
import Paid_User from '~/mixins/Paid_User'
import ArrowDownIcon from '~/components/svg-icons/ArrowDownIcon.vue'
import FilePagination from '~/components/pagination/FilePagination.vue'
import ShareFileOptions from '~/components/profile/components/ShareFileOptions.vue'
import ShareIconFunc from '~/components/search-strips/component/ShareIconFunc.vue'
import ShareFolder from '~/components/search-strips/component/ShareFolder.vue'
import PrivateFileModal from '~/components/profile/modal/PrivateFileModal.vue'
import FilePrivacy from '~/models/FilePrivacy'

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
    PrivateFileModal
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
        if(!userInfo)  error({ statusCode: 404 })
        return userInfo
      })
      .catch((err) => {
        error({
          statusCode: 404,
          message: err.message,
        })
      })

    // const user = await $axios
    //   .$get(`/users/${localStorage.getItem('paperdaz_userID')}`)
    //   .then((response) => {
    //     return response
    //   })
    //   .catch((err) => {})

    // store.commit('SET_FILE', file)
    return { userInfo }
  },
 
  mounted() {
    this.getUserFiles(this.returnedDataPage, this.searchFileParam)
    this.generateQR()
    console.log("player-file", this.userInfo)
    // this.totalFileFolder()
  },
  computed: {
    isAuthor() {
      return this.$auth?.user?.id == this.userInfo?.id
    }
  },
  // middleware:['paid_user'],
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
      showPrivateModal: false
    }
  },
  methods: {
    routeToFileManager(val, privacy) {
      if(privacy == FilePrivacy.PRIVATE) this.showPrivateModal = true
      else {
      localStorage.setItem('store_public_profile_path', this.$route.fullPath)
      this.$router.push(val)
      }
    },
    getMainPaidUser(val) {
      this.$axios.get(`/users/?mainAccountId=${val}&role=${UserTypeEnum.PAID}`)
        .then((response) => {
          this.userInfo = response.data.data[0]
        })
    },
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
        .$get(`/files/?userId=${this.userInfo?.id}&fileName[$like]=${search}%&$skip=${page}&$sort[updatedAt]=-1&filePrivacy[$ne]=doNotPost`, {
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
    '$auth.user': function () {
      this.getUserFolders(this.returnedFolderPage, this.searchFolderParam)
      this.getUserFiles(this.returnedDataPage, this.searchFileParam)
    },
    returnedDataPage: function () {
      this.fileSpinner = true;
      this.getUserFiles(this.returnedDataPage, this.searchFolderParam)
    },
    searchFolderParam() {
      this.getUserFolders(this.returnedFolderPage, this.searchFolderParam)
    },
    searchFileParam() {
      this.getUserFiles(this.returnedDataPage, this.searchFileParam)
    },
    returnedFolderPage() {
      this.getUserFolders(this.returnedFolderPage, this.searchFolderParam)
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
</style>