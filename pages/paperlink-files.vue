<template>
  <main class="">
    <top-details-card-container v-model="activeTab" :tabs="tabs" />
    <!-- <leaves-details-container class="mb-9" /> -->
    <company-file-ledger />
    <PopUpWrapper @count="increaseCount" :showModal="showGuideModal">
      <component :is="popUps[keepCount]" />
    </PopUpWrapper>
  </main>
</template>

<script>
import Vue from 'vue'
import CompanyFileLedger from '~/components/company-files/CompanyFileLedger.vue'
import LeavesDetailsContainer from '~/components/dashboard/LeavesDetailsContainer.vue'
import TopDetailsCardContainer from '~/components/dashboard/TopDetailsCardContainer.vue'
import NoteAndPenIconVue from '~/components/svg-icons/NoteAndPenIcon.vue'
import PageIconVue from '~/components/svg-icons/PageIcon.vue'
import TickCircleIconVue from '~/components/svg-icons/TickCircleIcon.vue'
import StatusUser from '~/models/StatusUser'
import mixins from 'vue-typed-mixins'
import login from '~/mixins/login'
import PopUpWrapper from '~/components/dashboard/PopUps/PopUpWrapper.vue'
import DummyFilesPopUp from '~/components/dashboard/PopUps/DummyFilesPopUp.vue'
import UploadesFilePopUp from '~/components/dashboard/PopUps/UploadesFilesPopUp.vue'
import WelcomePopUp from '~/components/dashboard/PopUps/WelcomePopUp.vue'
import RemoveFilePopUp from '~/components/dashboard/PopUps/RemoveFilePopUp.vue'
import ShareFilePopUp from '~/components/dashboard/PopUps/ShareFilePopUp.vue'
import EditFilePopUp from '~/components/dashboard/PopUps/EditFilePopUp.vue'
import MoveFilePopUp from '~/components/dashboard/PopUps/MoveFilePopUp.vue'
import FileManagerPopUp from '~/components/dashboard/PopUps/FilemanagerPopUp.vue'

export default mixins(login).extend({
  components: {
    TopDetailsCardContainer,
    LeavesDetailsContainer,
    CompanyFileLedger,
    WelcomePopUp,
    DummyFilesPopUp,
    UploadesFilePopUp,
    PopUpWrapper,
    RemoveFilePopUp,
    ShareFilePopUp,
    EditFilePopUp,
    MoveFilePopUp,
    FileManagerPopUp,
  },
  name: 'CompanyFilesPage',
  layout: 'dashboard',
  asyncData({ store }) {
    store.commit('SET_PAGE_NAME', { name: 'Company Files' })
  },
  mounted() {
    // disable scrolling
    document.body.style.overflow = 'hidden'
  },
  methods: {
    increaseCount() {
      this.keepCount = this.keepCount + 1
      if(this.keepCount == this.popUps.length){
        this.showGuideModal = false;
        document.body.style.overflow = 'auto'
      }
    },
  },
  data() {
    return {
      // ledger, confirmed, signed, saved, shared
      activeTab: 'ledger',
      showGuideModal: true,
      keepCount: 0,
      popUps: [
        'WelcomePopUp',
        'DummyFilesPopUp',
        'UploadesFilePopUp',
        'RemoveFilePopUp',
        'ShareFilePopUp',
        'EditFilePopUp',
        'MoveFilePopUp',
        'FileManagerPopUp',
      ],
      tabs: [
        {
          label: 'Ledger',
          key: 'ledger',
          count: 896,
          action: 'ledger',
          icon: NoteAndPenIconVue,
        },
        {
          label: 'Completed',
          key: 'completed',
          count: 25,
          action: 'complete',
          icon: PageIconVue,
        },
        {
          label: 'Confirmed',
          key: 'confirmed',
          count: 25,
          action: 'confirm',
          icon: TickCircleIconVue,
        },
        {
          label: 'Signed',
          key: 'signed',
          count: 25,
          action: 'sign',
          icon: NoteAndPenIconVue,
        },
        // {
        //   label: 'Saved',
        //   key: 'saved',
        //   count: 25,
        //   action:'save',
        //   icon: DisketIconVue,
        // },
        // {
        //   label: 'Shared',
        //   key: 'shared',
        //   count: 25,
        //   action:'share',
        //   icon: ShareIconVue,
        // },
      ],
      showUploadDocumentModal: false,
      files: [],
    }
  },
  beforeMount() {
    if (this.$auth.user.status == StatusUser.EXPIRED) {
      this.$notify.error({
        message: 'Your subscription is expired, go to billing to renew',
      })
      this.$nuxt.$router.push('/dashboard')
    }
  },
})
</script>
