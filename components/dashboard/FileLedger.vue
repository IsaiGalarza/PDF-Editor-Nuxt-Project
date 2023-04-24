<template>
  <div class="flex flex-col">
    <div
      class="ledger-container bg-white rounded-2xl flex-1 min-h-[50vh] lg:min-h-[40vh] position-relative pt-4"
    >
      <!-- <transition name="fade" mode="out-in"> -->
      {{ $store.getters.getLedgerParams }}
      <div class="search-container">
        <h3
          class="text-paperdazgray-700 font-semibold text-xl flex xs:items-center justify-between whitespace-nowrap px-3 mb-1"
          :class="[isPaidUser ? 'flex-col sm:flex-row' : 'flex-row gap-2']"
          v-if="!spinner"
        >
          <h5
            class="text-lg font-semibold text-[#272727] hidden sm:inline-flex items-center gap-2 sm:w-full"
            :class="[isPaidUser ? 'mb-2' : 'mb-0']"
          >
            {{ isPaidUser ? 'File Ledger' : 'Ledger' }}
          </h5>
          <div
            class="text-xs font-medium flex justify-end items-center gap-2 relative w-full"
          >
            <span class="el-dropdown-link left-roll1 flex-1">
              <input
                v-show="ledgerInput"
                type="text"
                class="search-input h-8 sm:h-10 transition bg-transparent ps-2 flex-1 border-[1px] border-paperdazgreen-400 rounded-lg focus:border-paperdazgreen-700 outline-none float-right sm:w-3/4 w-full"
                placeholder="Search Files"
                v-model="searchParam"
              />
            </span>
            <button
            @click="ledgerInput = !ledgerInput"
              class="circle circle-16 sm:circle-18 bg-paperdazgreen-400 text-white hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150"
            >
              <search-icon width="16" height="16" currentcolor="white" />
            </button>
          </div>
        </h3>
      </div>

      <div
        ref="ledgerContainer"
        :class="[
          // (files || []).length <= 0 || $fetchState.pending
          (pdfUser || []).length <= 0 || $fetchState.pending
            ? 'p-5 flex justify-center'
            : 'pb-4 overflow-x-auto custom-scrollbar',
        ]"
      >
        <div
          v-if="spinner"
          key="1"
          class="p-6 flex justify-center items-center"
        >
          <spinner-dotted-icon class="text-paperdazgreen-400 animate-spin" />
        </div>
        <!-- Start:: empty file ledger -->
        <!-- End:: empty file ledger -->
        <table v-show="ledger.length != 0" key="3" ref="fileLedgerTable" class="file-ledger-table" v-else>
          <thead class="text-sm sm:text-base">
            <tr class="text-left">
              <th class="w-12 text-left fixed-col left">No</th>
              <th class="text-left !pl-5 sm:!pl-16">File Name</th>
              <th class="text-center">
                {{ isPaidUser ? 'Action' : 'Actions' }}
              </th>
              <th class="text-center">Action By</th>
              <th class="text-center">Date & Time</th>
              <th class="fixed-col right text-right"></th>
            </tr>
          </thead>
          <tbody v-if="pdfUser.length && !spinner">
            <tr
              v-for="(file, i) in ledger"
              :key="file.id"
              :class="{ highlight: file.id == highlightedFileId }"
            >
              <td class="text-left fixed-col left">
                {{ i + 1 + returnedDataPage }}
              </td>
              <td class="text-center !pl-5 sm:!pl-16">
                <div class="flex items-center gap-1.5">
                  <div class="">
                    <!-- <letter-avatar
                      v-if="!(file.user || {}).profile_picture && !file.isGuest"
                      style="width: 43px; height: 43px"
                      class="h-[28px] w-[28px] rounded-full object-cover cursor-pointer mr-1"
                      :username="file.user?.firstName"
                    /> -->
                    <!-- <span
                      v-else
                      class="border !border-paperdazgreen-300 p-0.5 inline-block rounded-full h-[36px] w-[36px]"
                    >
                      <img
                        v-if="(file.user || {}).profile_picture"
                        :src="(file.user || {}).profile_picture || ''"
                        class="w-full h-full"
                        alt=""
                        :class="[
                          file.role == userType.PAID ||
                          $auth.user.role == userType.FREE
                            ? 'w-full h-full rounded-md'
                            : 'w-full h-full rounded-full',
                        ]"
                      />
                    </span> -->
                    <img src="../../assets/img/user-file-icon.svg" alt="">
                  </div>
                  <div class="max-sm:w-24">
                    <p
                      class="max-sm:truncate max-sm:text-xs sm:text-base font-medium text-left sm:ml-1"
                    >
                      <nuxt-link
                        :to="`/pdf/${file?.file?.paperLink}`"
                        class="w-full block"
                      >
                        <!-- {{ file.fileName.length > 32 ? `${file.fileName.substr(0, 28)} ... .pdf` : file.fileName  }} -->
                        {{ file.fileName | removeExtension }}
                      </nuxt-link>
                    </p>
                  </div>
                </div>
              </td>
              <td
                class="text-sm text-center capitalize"
                :class="
                  file?.action === FileAction.COMPLETE
                    ? 'text-paperdazgreen-400'
                    : file?.action === FileAction.SIGNED
                    ? 'text-blue-400'
                    : file?.action === FileAction.CONFIRM
                    ? 'text-purple-400'
                    : ''
                "
              >
                {{
                   `${file?.action}ed`.replace('ee', 'e')
                }}
              </td>
              <td class="text-center">
                {{
                  file.isGuest
                    ? 'Guest'
                    : file.user?.firstName + ' ' + file.user?.lastName
                }}
              </td>
              <td class="text-center whitespace-normal px-1">
                {{ formatDateTime(file.updatedAt) }}
              </td>
              <td class="fixed-col right">
                <button
                  class="cursor-pointer"
                  @click="showShareCompanyFilesFunc(file)"
                >
                  <share-outline-icon class="w-4 h-4" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

      <img  v-show="!spinner && ledger.length === 0" src="../../assets/img/dashboard-bg.png" class="position-absolute mt-24 md:left-[30%] md:w-auto sm:w-[200px]" /> 
     <table v-show="!spinner && ledger.length === 0" key="3" ref="fileLedgerTable" class="file-ledger-table"> 
      <thead>
        <tr class="text-left">
          <th class="text-left fixed-col left font-[500]">No</th>
          <th class="text-center font-[500]">File Name</th>
          <th class="text-center font-[500]">Action</th>
          <th class="text-center font-[500]" v-if="isPaidUser">Action By</th>
          <th class="text-center font-[500]">Date & Time</th>
          <th class="fixed-col right"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td class="text-left fixed-col left">{{ i }}</td>
          <td class="text-center">

          </td>
          <td class="text-center">
          </td>
          <td class="text-center" v-if="isPaidUser">

          </td>
          <td class="text-center">
          </td>
          <td class="fixed-col right">

          </td>
        </tr>
      </tbody>
    </table>

        
      </div>

      <!-- </transition> -->
    </div>
    <FilePagination
      :totalFile="totalFile"
      @setPage="setPage"
      v-if="pdfUser.length > 10"
    />
    <ShareFilesModal
      :userFile="userFile"
      @qrLoad="showQrcodeFileFunc"
      v-model="showShareCompanyFiles"
    />
    <CreateCompanyFolder
      @refresh="setRefresh"
      :userFile="userFile"
      @resetUserFile="resetUserFile"
      v-model="showCreateCompanyFolder"
    />
    <upload-document-modal
      @resetUserFolder="resetUserFolder"
      :folder="fileProps"
      v-model="showUploadDocumentModal"
    />
    <QrcodeShare :userFile="userFile" v-model="showQrcodeFiles" />
    <CreateTeam @refresh="setRefresh" v-model="showCreateTeam" />
  </div>
</template>
<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import ScribbleIcon from '../svg-icons/ScribbleIcon.vue'
import SearchIcon from '../svg-icons/SearchIcon.vue'
import TreeIcon from '../svg-icons/TreeIcon.vue'
import DateFormatter from '~/utils/DateFormatter'
import ShareIcon from '../svg-icons/ShareIcon.vue'
import SpinnerDottedIcon from '../svg-icons/SpinnerDottedIcon.vue'
import HeartOutlineIcon from '../svg-icons/HeartOutlineIcon.vue'
import ShareOutlineIcon from '../svg-icons/ShareOutlineIcon.vue'
import ShareFilesModal from '../company-files/Tabs/ShareFilesModal.vue'
import QrcodeShare from '../company-files/Tabs/QrcodeShare.vue'
import FilePagination from '../pagination/FilePagination.vue'
import UserTypeEnum from '~/models/UserTypeEnum'
import FolderPlusIcon from '../svg-icons/FolderPlusIcon.vue'
import PlusIcon from '../svg-icons/PlusIcon.vue'
import AuthUser from '~/models/AuthUser'
import CreateCompanyFolder from '../company-files/Tabs/CreateCompanyFolder.vue'
import UploadDocumentModal from './UploadDocumentModal.vue'
import CreateTeam from '../company-files/Tabs/CreateTeam.vue'
import EmptyFileLedger from '../widgets/EmptyFileLedger.vue'
import FileAction from '~/models/FileAction'
import _ from 'lodash'
import LetterAvatar from '../widgets/LetterAvatar.vue'

export default Vue.extend({
  components: {
    TreeIcon,
    FolderPlusIcon,
    PlusIcon,
    ScribbleIcon,
    SearchIcon,
    ShareIcon,
    SpinnerDottedIcon,
    HeartOutlineIcon,
    ShareOutlineIcon,
    ShareFilesModal,
    QrcodeShare,
    FilePagination,
    UploadDocumentModal,
    CreateCompanyFolder,
    CreateTeam,
    EmptyFileLedger,
    LetterAvatar,
  },
  props: ['searchContect'],
  filters: {
    removeExtension(filename) {
      return filename.replace(/\.[^\/.]+$/, '')
    },
    initialFirstName(name) {
      return name?.charAt(0).toUpperCase()
    },
  },
  async fetch() {},
  data() {
    return {
      searchParam: '',
      totalFile: null,
      returnedDataPage: 0,
      spinner: true,
      show: false,
      showQrcodeFiles: false,
      showShareCompanyFiles: false,
      userFile: {},
      userId: this.$auth.user.id,
      filterTitle: '',
      searchValue: '',
      showScribble: false,
      files: [],
      fileProps: {},
      copyFiles: [],
      refresh: false,
      highlightedFileId: undefined,
      scrollObserver: undefined,
      showUploadDocumentModal: false,
      showCreateCompanyFolder: false,
      showCreateTeam: false,
      FileAction,
      debounceTimeout: null,
      ledger: [],
      ledgerInput: false
    }
  },
  mounted() {
    this.handleFileHighlight()
    this.handleShowingLedger()
    this.tableScrollObserver()
    this.fetchFiles(this.returnedDataPage, this.searchValue)
  },
  methods: {
    formatFileAction(fileAction, action) {
      let isEd = false
      switch ((fileAction || '').toLowerCase()) {
        case FileAction.COMPLETE:
          isEd = true
          break
        case FileAction.SIGNED:
          isEd = true
          if (action === FileAction.COMPLETE) {
            fileAction = FileAction.SIGNED
            isEd = false
          } else if (action === FileAction.CONFIRM) {
            fileAction = FileAction.CONFIRM
          }
          break
        case FileAction.CONFIRM:
          if (action === FileAction.COMPLETE) {
            isEd = false
          } else {
            isEd = true
          }
          break
        default:
          return ''
      }

      fileAction = fileAction.charAt(0).toUpperCase() + fileAction.slice(1)
      if (isEd) {
        fileAction =
          fileAction.charAt(fileAction.length - 1) === 'e'
            ? fileAction + 'd'
            : fileAction + 'ed'
      }
      return fileAction
    },
    showCreateCompanyFolderFunc() {
      this.showCreateCompanyFolder = true
    },
    showUploadModalFunction() {
      // if (!this.showUploadIcon) return
      // if (this.totalFile >= this.totalRegisteredPaperlink)
      //   this.showMaxPaperlinkModal = true
      // else
      this.showUploadDocumentModal = true
    },
    setRefresh() {
      this.refresh = !this.refresh
    },
    resetUserFolder() {
      this.fileProps = {}
    },
    resetUserFile() {
      this.userFile = {}
    },
    showCreateTeamFunc() {
      this.showCreateTeam = true
    },
    searchFiles(event) {
      this.searchValue = event.target.value
    },
    async ledgerFiles(page, search) {
      let ledgerParams = this.$store.getters.getLedgerParams
      let acct = `/ledger?userId=${
        this.$auth.user.id
      }&$sort[updatedAt]=-1&fileName[$like]=${search}%&$skip=${page}${
        ledgerParams
          ? '&action=' + this.$store.getters.getLedgerParams
          : ledgerParams
      }`
      await this.$axios
        .get(acct)
        .then((response) => {
          this.ledger = response.data.data
          this.$store.commit('ADD_USER', files)
          this.totalFile = response.data.total
        })
        .finally(() => {
          this.spinner = false
        })
    },
    async fetchUserFiles(page, search) {
      let paramsId =
        this.$auth.user?.role == UserTypeEnum.TEAM
          ? this.$auth.user.teamId
          : this.$auth.user?.id
      //<<---------------- START: fetching the user files --- ------>>
      await this.$axios
        .$get(
          `/files?userId=${paramsId}&fileName[$like]=${search}%&$skip=${page}&$sort[updatedAt]=-1`,
          {
            params: {
              isEditing: 0,
            },
          }
        )
        .then((response) => {
          this.$emit('setUploadpaperlink', response.total)
          const files = response.data.map((el) => {
            return el
          })
          this.files = files
          this.$store.commit('ADD_USER', files)
          this.totalFile = response.total
        })
        .finally(() => {
          this.spinner = false
        })
      //<<----------------END: fetching the user files --- ------>>
    },
    setPage(page) {
      this.returnedDataPage = page
    },
    showShareCompanyFilesFunc(data) {
      this.userFile = data
      this.showShareCompanyFiles = true
    },
    showQrcodeFileFunc() {
      this.showQrcodeFiles = true
    },
    async fetchFiles(page, search) {
      this.isPaidUser
        ? this.ledgerFiles(page, search)
        : this.ledgerFiles(page, search)
    },
    handleFileHighlight() {
      this.highlightedFileId = this.$nuxt.$route.query.highlight_file
      setTimeout(() => {
        this.highlightedFileId = undefined
      }, 20000)
    },
    shareFile(file) {
      const url = location.origin.replace(/\/+$/, '') + `/pdf/${file.id}`
      navigator.share({
        url,
        title: file.file_name,
      })
    },
    async tableScrollObserver() {
      await this.$nextTick()
      if (this.scrollObserver) {
        try {
          this.scrollObserver.disconnect()
          this.scrollObserver = undefined
        } catch (e) {}
      }
      const options = {
        root: this.$refs.ledgerContainer,
        // root: document,
        rootMargin: '0px',
        threshold: 1.0,
      }
      const callback = (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            entry.target.classList.add('scrolled')
          } else {
            entry.target.classList.remove('scrolled')
          }
        })
      }
      const observer = new IntersectionObserver(callback, options)
      const fixedCols = document.querySelectorAll('.fixed-col')
      fixedCols.forEach((el) => {
        observer.observe(el)
      })
      this.scrollObserver = observer
    },
    formatDateTime(dateVal) {
      return `${DateFormatter.getDateString(
        dateVal
      )}  ${DateFormatter.getFormattedTime(dateVal)}`
    },
    handleShowingLedger() {
      const ledgerContainer = this.$refs.ledgerContainer
      if (!ledgerContainer) return
      const options = {
        root: null,
        threshold: 0.75,
        rootMargin: '0px',
      }
      const callback = (entries, _observer) => {
        entries.forEach((entry) => {
          if (entry.target === ledgerContainer) {
            if (entry.isIntersecting) {
              this.showScribble = true
            } else {
              this.showScribble = false
            }
          }
        })
      }
      const observer = new IntersectionObserver(callback, options)
      observer.observe(ledgerContainer)
    },
  },
  updated() {
    this.tableScrollObserver()
  },
  computed: {
    // getting state from the store
    ...mapState(['filterUser', 'pdfUser']),
    userType() {
      return UserTypeEnum
    },
    isPaidUser() {
      switch (this.$auth?.user?.role) {
        case UserTypeEnum.PAID:
          return true
        case UserTypeEnum.TEAM:
          return true
        case UserTypeEnum.FREE:
          return false
      }
    },
    mainUserLink() {
      switch (this.$auth?.user?.role) {
        case UserTypeEnum.PAID:
          return (this.$auth.user || {}).id
        case UserTypeEnum.TEAM:
          return (this.$auth.user || {}).mainAccountId
      }
      ;(this.$auth.user || {}).id
    },
  },
  watch: {
    '$store.getters.getLedgerParams'() {
      this.fetchFiles(this.returnedDataPage, this.searchParam)
    },
    '$auth.user': function () {
      if (this.debounceTimeout) clearTimeout(this.debounceTimeout)
      this.debounceTimeout = setTimeout(() => {
        this.spinner = true
        this.fetchFiles(this.returnedDataPage, this.searchParam)
      }, 500)
    },
    returnedDataPage: function () {
      if (this.debounceTimeout) clearTimeout(this.debounceTimeout)
      this.debounceTimeout = setTimeout(() => {
        this.spinner = true
        this.fetchFiles(this.returnedDataPage, this.searchParam)
      }, 500)
    },
    searchParam: function () {
      if (this.debounceTimeout) clearTimeout(this.debounceTimeout)
      this.debounceTimeout = setTimeout(() => {
        this.spinner = true
        this.fetchFiles(ledgerFilesledgerFiles)
      }, 500) // delay for half second
    },
    refresh: function () {
      this.$nuxt.refresh()
      this.fetchFiles(this.returnedDataPage, this.folderSearch)
      this.fetchFolder(this.returnedFolderPage, this.folderSearch)
    },
  },
})
</script>
<style lang="postcss" scoped>
.file-ledger-table {
  --background: white;
  @apply max-sm:text-xs sm:text-base w-full whitespace-nowrap;
  border-collapse: separate;
  border-spacing: 0px 0px;
  height: fit-content;
  & tr {
    @apply border-b border-gray-100;
    transition: all 0.2s ease-in-out;
    &.highlight {
      --background: rgba(233, 254, 219, 0.46);
    }
  }
  & th {
    @apply max-sm:pt-4 max-sm:pb-1 sm:pt-8 sm:pb-3 max-sm:text-xs sm:text-base;
    background: var(--background);
  }
  & td {
    @apply py-3 max-sm:text-xs sm:text-base;
  }
  & td,
  & th {
    @apply px-1 border-b border-gray-100;
    transition: all 0.2s ease-in-out;
    background: var(--background);
    &:first-child {
      @apply pl-5;
    }
    &:last-child {
      @apply pr-5;
    }
    &.fixed-col {
      position: sticky;
      background: white;
      background: var(--background);
      &.left {
        left: -0.1px;
      }
      &.right {
        right: -0.1px;
      }
    }
  }
}
/* .search-input {
  & ~ .search-dropdown {
    @apply opacity-0 translate-y-[5%] pointer-events-none;
  }
  &:active,
  &:focus {
    & ~ .search-dropdown {
      @apply opacity-100 translate-y-0 pointer-events-auto;
    }
  }
} */
</style>
