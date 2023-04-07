<template>
  <div
    class="sticky z-20 h-14 py-lg-5 pt-4 pb-4 transition ease-in-out bg-white"
    :class="[
      {
        'shadow-md': scrolled,
        'bg-white': scrolled,
      },
      landingPage ? 'bg-white' : '',
    ]"
    style="top: -0.1px; padding-top: 48px"
    id="appbar"
  >
    <div class="" :class="collapsed ? 'overlay' : ''"></div>
    <nav class="container h-full flex items-center justify-between">
      <div class="flex items-center gap-1">
        <!-- <span
          class="lg:hidden cursor-pointer p-2 transform -translate-x-2"
          @click="collapsed = true"
        >
          <hamburger-icon />
        </span> -->
        <nuxt-link to="/">
          <logo-with-text class="mr-2 h-5 xs:h-6 sm:h-7 w-auto" />
        </nuxt-link>
      </div>
      <!-- mobile -->
      <!------>
      <div class="text-center w-full font-semibold">
        Secure, Private & HIPAA Compliant!
       </div>

    </nav>

    <landing-page-search-modal v-model="showLandingPageSearchModal" />
  </div>
</template>
<script>
import mixins from 'vue-typed-mixins'
import GlobalMixin from '~/mixins/GlobalMixin'
import LandingPageSearchModal from '../landing/LandingPageSearchModal.vue'
import LogoWithText from '../LogoWithText.vue'
import ArrowDownIcon from '../svg-icons/ArrowDownIcon.vue'
import DashboardIcon from '../svg-icons/DashboardIcon.vue'
import GearIcon from '../svg-icons/GearIcon.vue'
import HamburgerIcon from '../svg-icons/HamburgerIcon.vue'
import SearchIcon from '../svg-icons/SearchIcon.vue'
import SignOutIcon from '../svg-icons/SignOutIcon.vue'
import UserProfileSolidIcon from '../svg-icons/UserProfileSolidIcon.vue'
import UserTypeEnum from '~/models/UserTypeEnum'
import TimesIcon from '../svg-icons/TimesIcon.vue'

export default mixins(GlobalMixin).extend({
  name: 'AppBar',
  components: {
    LogoWithText,
    SearchIcon,
    HamburgerIcon,
    ArrowDownIcon,
    UserProfileSolidIcon,
    GearIcon,
    SignOutIcon,
    TimesIcon,
    DashboardIcon,
    LandingPageSearchModal,
  },
  data() {
    return {
      scrolled: false,
      collapsed: false,
      showLandingPageSearchModal: false,
      landingPage: true,
    }
  },
  watch: {
    "$store.getters.getToast.active"(val){
         if(val){
          setTimeout(() => {
            this.removePopUp()
          }, 3000);
         }
    },
    $route(formerVal, currentVal) {
      if (formerVal.fullPath !== currentVal.fullPath) {
        this.collapsed = false
      }
      if (formerVal.name == 'index') {
        this.landingPage = true
      } else {
        this.landingPage = false
      }
    },
  },
  computed: {
    routeName() {
      return (this.$nuxt.$route.name || '').replace(/-/g, ' ')
    },
    user() {
      return this.$auth.user
    },
    profilePhoto() {
      return this.$store.getters.profilePhoto
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
  },

  mounted() {
    const self = this
    this.scrollObserver()
    document.addEventListener('scroll', () => {
      if (self.collapsed) self.collapsed = false
    })
  },
  methods: {
    removePopUp(){
      this.toggleToast({ active: false, msg: ` You are done! File has been sent to `})
      this.$store.commit('SET_FILL_AS_GUEST', false)
    },
    handleCommand(command) {
      switch (command) {
        case 'logout':
          this.logout(false)
          break
        case 'profile':
          this.$nuxt.$router.push('/public/profile')
          break
        case 'dashboard':
          this.$nuxt.$router.push('/dashboard')
          break
        case 'settings':
          this.$nuxt.$router.push('/settings')
          break
      }
    },
    scrollObserver() {
      const options = {
        rootMargin: '0px',
        threshold: 1.0,
      }

      const self = this
      const callback = (
        entries,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        observer
      ) => {
        entries.forEach((entry) => {
          self.scrolled = !entry.isIntersecting
        })
      }

      const observer = new IntersectionObserver(callback, options)
      observer.observe(this.$el)
    },
  },
})
</script>
<style lang="scss" scoped>
#appbar {
  & .overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    opacity: 1;
    pointer-events: none;
    transition: all ease-in-out 200ms;
  }
}

// .active{
//   opacity: 1 !important;
//   background: rgba(0, 0, 0, 0.2);
// }
</style>
