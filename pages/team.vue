<template>
  <main class="">
    <top-details-card-container v-model="activeTab" class="mb-5"  />
    <!-- <leaves-details-container class="mb-12" /> -->

    <div class="flex items-center flex-wrap gap-4 justify-between mb-6 max-sm:px-4">
     <div class="flex items-center">
      <h5 class="text-lg font-semibold  text-[#272727]">Team Members  </h5>
      <div class="min-h-[30px] border-[#77C360] text-[#77C360] ml-3 rounded-[50%] flex items-center justify-center border-[1px] min-w-[30px] bg-white">
      <p class=""> {{ teamMembers?.length }}</p>
      </div>
     </div>
      <div class="text-white flex items-center">
        <form action="" class="w-full xs:max-w-[280px] text-xs font-medium flex items-center relative justify-end mr-2"
          @submit.prevent="$event.preventDefault()">

          <span class="el-dropdown-link" :class="[show ? 'left-roll' : 'no-roll']">
            <input type="text"
              class="search-input text-black h-10 pl-4 mr-2 bg-transparent flex-1 border border-paperdazgreen-300 rounded-tl-lg rounded-bl-lg focus:border-paperdazgreen-700 outline-none"
              placeholder="Search Files" v-model="teamSearch" />
          </span>

          <button @click="show = !show"
            class="   transition duration-0 hover:duration-150 transition duration-0 hover:duration-150">
            <img src="../assets/icons/Link_t.svg" alt="">
            <!-- <search-icon width="16" height="16" currentcolor='white' /> -->
          </button>
        </form>
        <button
          class="circle circle-18 bg-paperdazgreen-400 text-[1.5rem] hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 transition duration-0 hover:duration-150"
          @click="showInviteTeamMemberModal = true">
          +
          <!-- <user-plus-icon width="16" height="16" /> -->
        </button>
      </div>
    </div>



    <div class="rounded-2xl bg-white overflow-x-auto custom-scrollbar relative">
      <!-- START:Team container spinner -->
      <div v-if="teamSpinner || updateTeamSpiunner"
        class="w-full grid place-items-center h-full h-min-[300px] absolute top-0 left-0 z-30"
        :class="[updateTeamSpiunner ? 'bg-transparent' : 'bg-white']">
        <SpinnerDottedIcon class="animate-spin" />
      </div>
      <!-- END:Team container spinner -->
      <img  v-show="teamMembers.length === 0 && !teamSpinner &&  !updateTeamSpiunner" src="../assets/img/dashboard-bg.png" class="position-absolute mt-24 md:left-[30%] z-50 md:w-auto sm:w-[200px]" /> 
     <table v-if="teamMembers.length === 0 && !teamSpinner &&  !updateTeamSpiunner"  key="3" ref="fileLedgerTable" class="file-ledger-table"> 
      <thead>
        <tr class="text-left">
          <th class="text-left fixed-col left font-[500]">No</th>
          <th class="text-center font-[500]">Member</th>
          <th class="text-center font-[500]"></th>
          <th class="text-center font-[500]" ></th>
          <th class="text-center font-[500]">Email</th>
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
          <td class="text-center" >

          </td>
          <td class="text-center">
          </td>
          <td class="fixed-col right">

          </td>
        </tr>
      </tbody>
    </table>
     
      <table v-else class="custom-table">
        <thead class="text-[#414142]">
          <tr>
            <th class="text-left font-[500] ">Member</th>
            
            <th class="text-center font-[500]  right">Email</th>
          </tr>
        </thead>
        <tbody class="text-[#505050]">
          <tr v-for="(member, i) in teamMembers" :key="i">
            <!-- <td class="w-12 text-center fixed-col left">{{ i + 1 }}</td> -->
            <td>
              <div class="flex items-center gap-3">
                <span class="p-0.5 border border-paperdazgreen-400"
                  :class="[member.role == userType.PAID ? 'rounded-md w-9 h-9' : 'circle circle-17']">
                  <img :src="
                    (member || {}).profilePicture ||
                    '/img/placeholder_picture.png'
                  " alt=""
                    :class="[member.role == userType.PAID ? 'w-full h-full rounded-md' : 'w-full h-full rounded-full']" />
                </span>
                <span class="text-sm">{{ `${member.firstName} ${member.lastName}` }}</span>
              </div>
            </td>
            <td>
              {{ member.email }}
            </td>
           
          </tr>
        </tbody>
      </table>
    </div>

    <FilePagination :totalFile="totalMembers" @setPage="setPage" />
    <invite-team-member-modal @maxpopup="MaxInviteFunc" :reachLimit="canUserInvite"
      v-model="showInviteTeamMemberModal" />
    <max-invite-modal v-model="showMaxInvite" :teamMembers="totalTeamMembers" />
  </main>
</template>

<script>
import Vue from 'vue'
import LeavesDetailsContainer from '~/components/dashboard/LeavesDetailsContainer.vue'
import TopDetailsCardContainer from '~/components/dashboard/TopDetailsCardContainer.vue'
import InviteTeamMemberModal from '~/components/pdf/modals/InviteTeamMemberModal.vue'
import ArrowDownIcon from '~/components/svg-icons/ArrowDownIcon.vue'
import DisketIconVue from '~/components/svg-icons/DisketIcon.vue'
import EllipsisIconVerticalIcon from '~/components/svg-icons/EllipsisIconVerticalIcon.vue'
import NoteAndPenIconVue from '~/components/svg-icons/NoteAndPenIcon.vue'
import PageIconVue from '~/components/svg-icons/PageIcon.vue'
import SearchIcon from '~/components/svg-icons/SearchIcon.vue'
import ShareIconVue from '~/components/svg-icons/ShareIcon.vue'
import TickCircleIconVue from '~/components/svg-icons/TickCircleIcon.vue'
import UserPlusIcon from '~/components/svg-icons/UserPlusIcon.vue'
import Paid_User from '~/mixins/Paid_User'
import MaxInviteModal from '~/components/teams/MaxInviteModal.vue'
import AuthUser from '~/models/AuthUser'
import FilePagination from '~/components/pagination/FilePagination.vue'
import SpinnerDottedIcon from '~/components/svg-icons/SpinnerDottedIcon.vue'
import UserTypeEnum from '~/models/UserTypeEnum'
import StatusUser from '~/models/StatusUser'
import LedgerIcon from '~/components/svg-icons/LedgerIcon.vue'

export default Vue.extend({
  components: {
    TopDetailsCardContainer,
    LeavesDetailsContainer,
    EllipsisIconVerticalIcon,
    SearchIcon,
    UserPlusIcon,
    InviteTeamMemberModal,
    ArrowDownIcon,
    MaxInviteModal,
    FilePagination,
    SpinnerDottedIcon,
    LedgerIcon
  },
  name: 'TeamsPage',
  layout: 'dashboard',
  data() {
    return {
      activeTab: 'ledger',
      showInviteTeamMemberModal: false,
      searchParam: '',
      showMaxInvite: false,
      show: false,
      returnedTeamMember: 0,
      teamMembers: [],
      totalMembers: null,
      teamSpinner: true,
      updateTeamSpiunner: false,
      reachTeamLimit: false,
      totalTeamMembers: null,
      teamSearch: '',
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
      ],
    }
  },
  asyncData({ store, $axios, $auth }) {
    store.commit('SET_PAGE_NAME', { name: 'Team' })
  },
  computed: {
    canUserInvite() {
      return (this.totalMembers >= (this.totalTeamMembers))
    },
    userType() {
      return (UserTypeEnum)
    }
  },
  mounted() {
    this.getTeamMember(this.returnedTeamMember, this.teamSearch)
    this.getUserSubscription()
  },
  methods: {
    setPage(val) {
      this.teamSpinner = true
      this.returnedTeamMember = val
    },
    setStatus(val, type) {
      this.updateTeamSpiunner = true
      this.$axios.$patch(`/users/${val}`, { status: type })
        .then(() => {
          this.getTeamMember(this.returnedTeamMember)
        })
    },
    async getUserSubscription() {
      this.$axios.$get(`/subscriptions/?userId=${(this.$auth.user).id}`)
        .then((response) => {
          this.totalTeamMembers = response.data[0].teamMembers
        })
        .catch(() => {
          this.reachTeamLimit = true;
        })
    },
    setTeamAccess(val, type) {
      this.updateTeamSpiunner = true
      this.$axios.$patch(`/users/${val}`, { teamAccess: type })
        .then(() => {
          this.getTeamMember(this.returnedTeamMember)
        })
    },
    getTeamMember(val, search) {
      this.$axios.$get(`/users?teamId=${(this.$auth.user).id}&$sort[createdAt]=-1&$skip=${val}&firstName[$like]=${search || ''}%`)
        .then((response) => {
          this.teamMembers = response.data
          this.totalMembers = response.total
        })
        .catch(() => {
          this.$notify.error({
            title: "teams",
            message: "Error, could not get teams"
          })
        })
        .finally(() => {
          this.teamSpinner = false,
            this.updateTeamSpiunner = false
        })
    },
    MaxInviteFunc() {
      this.showMaxInvite = true
    },
    getStatusClass(val) {
      switch (val.toLowerCase()) {
        case 'active':
          return 'text-white bg-paperdazgreen-400'
        case 'pending':
          return 'text-white bg-[#5078B5]'
        case 'disabled':
          return 'text-white bg-[#909090]'
        default:
          return 'text-white bg-[#909090]'
      }
    },
  },
  beforeMount() {
    if (this.$auth.user.status == StatusUser.EXPIRED) {
      this.$notify.error({
        message: "Your subscription is expired, go to billing to renew"
      })
      this.$nuxt.$router.push("/dashboard")
    }
  },
  watch: {
    "$auth.user": function () {
      this.getTeamMember(this.returnedTeamMember, this.teamSearch)
      this.getUserSubscription()
    },
    returnedTeamMember: function () {
      this.getTeamMember(this.returnedTeamMember, this.teamSearch)
    },
    teamSearch: function () {
      this.getTeamMember(this.returnedTeamMember, this.teamSearch)
    }
  }
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
