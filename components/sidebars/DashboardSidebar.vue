<template>
  <nav class="flex flex-col bg-white h-full w-full rounded-tr-2xl rounded-br-2xl py-8">
    <div class="flex justify-end px-8">
      <span class="py-2 mb-3 cursor-pointer inline-block lg:hidden" @click="$emit('close')">
        <times-icon width="12" height="12" />
      </span>
    </div>
    <nuxt-link to="/" class="flex items-center justify-center mb-14 px-8">
      <logo-with-text class="h-8 w-auto" />
    </nuxt-link>
    <ul class="overflow-y-auto overflow-x-hidden flex-1 px-4 custom-scrollbar">
      <li>
        <div v-for="(link, i) in links" :key="i" class="nav-item cursor-pointer"
          @click="shuffleRoute(i, link.link, link.label, link.openNew)" :class="[link.className, {
            active: link.exact,
            // ? $nuxt.$route.path == link.link
            // : $nuxt.$route.fullPath.startsWith(link.link),
          }]">
          <div class="w-5 h-5">
            <svg-icon class="h-full w-full" height="100%" width="100%" :value="link.icon" />
          </div>
          <span>{{ link.label }}</span>
        </div>
      </li>
    </ul>
    <div class="px-8">
      <p class="text-center text-[#909090] mb-6 font-medium">Find us on</p>
      <div class="flex flex-wrap items-center gap-2 justify-center">
        <span @click="socialShareFunction('facebook')"
          class="circle circle-10 cursor-pointer bg-paperdazgreen-300 text-white">
          <facebook-icon height="12" />
        </span>
        <span @click="socialShareFunction('linkedin')"
          class="circle circle-10 cursor-pointer bg-paperdazgreen-300 text-white">
          <linked-in-icon height="12" />
        </span>
        <span @click="socialShareFunction('linkedin')"
          class="circle circle-10 cursor-pointer bg-paperdazgreen-300 text-white">
          <instagram-icon height="11" />
        </span>
        <span @click="socialShareFunction('twitter')"
          class="circle circle-10 cursor-pointer bg-paperdazgreen-300 text-white">
          <twitter-icon height="11" />
        </span>
      </div>
      <p class="text-paperdazgreen-300 text-[11px] mt-3 text-center">
        powered by
        <span class="font-semibold uppercase text-[15px]">Paperdaz</span>
      </p>
    </div>
  </nav>
</template>
<script>
import Vue from 'vue'
import UserTypeEnum from '~/models/UserTypeEnum'
import AuthUser from "~/models/AuthUser"
import LogoWithText from '../LogoWithText.vue'
import EnvelopeIcon from '../svg-icons/EnvelopeIcon.vue'
import FacebookIcon from '../svg-icons/FacebookIcon.vue'
import LinkedInIcon from '../svg-icons/LinkedInIcon.vue'
import ReditIcon from '../svg-icons/ReditIcon.vue'
import SvgIcon from '../svg-icons/SvgIcon.vue'
import TimesIcon from '../svg-icons/TimesIcon.vue'
import TwitterIcon from '../svg-icons/TwitterIcon.vue'
import WhatsappIcon from '../svg-icons/WhatsappIcon.vue'
import InstagramIcon from '../svg-icons/InstagramIcon.vue'
import GearLightIcon from '../svg-icons/GearLightIcon.vue'
import TeamAccess from "~/models/TeamAccess"
export default Vue.extend({
  name: 'DashboardSidebar',
  components: {
    LogoWithText,
    SvgIcon,
    FacebookIcon,
    LinkedInIcon,
    EnvelopeIcon,
    TwitterIcon,
    WhatsappIcon,
    ReditIcon,
    TimesIcon,
    InstagramIcon,
    GearLightIcon
  },
  data() {
    return {
      routeIndex: 1,
      links: [
        {
          label: 'File Ledger',
          icon: 'DashboardIcon',
          link: '/file-ledger',
          exact: true,
        },
        {
          label: 'Paperlink Files',
          icon: 'DocumentIcon',
          openNew: false,
          link: '/paperlink-files',
          exact: false,
        },
        {
          label: 'Business Page',
          icon: 'UserProfileIcon',
          openNew: true,
          link: `/${this.userPage}`,
        },
        {
          label: 'Team Members',
          icon: 'HoldingHandsIcon',
          link: '/team',
          openNew: false,
          exact: false,
        },
        {
          label: 'Billings',
          icon: 'QuoteFileIcon',
          link: '/billing',
          openNew: false,
          exact: false,
        },
        { label: 'FAQ', icon: 'ConversationIcon', link: '/faq', exact: false, openNew: false, },
        {
          label: 'Contact us',
          icon: 'CustomerCareIcon',
          link: '/contact-us',
          exact: false,
          openNew: false,
        },
 
      ],
    }
  },
  methods: {
    socialShareFunction(val) {
      switch (val) {
        case 'linkedin':
          window.open(`https://www.linkedin.com/company/80987259/`)
          break;
        case 'whatsapp':
          window.open(`whatsapp://send?text=${window.location.origin}`)
          break;
        case 'twitter':
          window.open(`https://twitter.com/intent/tweet?text=${window.location.origin}`)
          break;
        case 'facebook':
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}`)
          break;
        case 'instagram':
          window.open(`https://www.instagram.com/paperdaz_/`)
          break;
      }
    },
    getCurrentRoute() {
      let pathHistory = (this.$nuxt.$router).history.current.fullPath;
      (this.links) = this.links.map((item, i) => {
        if (pathHistory == item.link || pathHistory == `${item.link}/`) {
          return { ...item, exact: true }
        } else {
          return { ...item, exact: false }
        }
      })
    },
    shuffleRoute(index, link, name, openNew) {
       if(openNew){
        window.open(`${location.origin}/${this.userPage}`)
        return
       }
      (this.links) = this.links.map((item, i) => {
        if (index == i) {
          return { ...item, exact: true }
        } else {
          return { ...item, exact: false }
        }
      })
      switch (name) {
        case 'Packages':
          this.isPaidUser ? this.$nuxt.$router.push('/settings?tab=billing') : this.$nuxt.$router.push('/packages?type=default')
          break;
        default:
          this.$nuxt.$router.push(link)
          break;
      }
    },
    checkToRouteLinks() {
     
    },
  },
  computed: {
    isPaidUser() {
      return this.$auth.user.role == UserTypeEnum.PAID
    },
    userPage(){
      return this.$auth.user?.businessPage
    }
  },
  mounted() {
    console.log(this.$auth.user)
    this.checkToRouteLinks()
  },
  watch: {
    '$auth.user.role': function () {
      this.checkToRouteLinks()
      this.getCurrentRoute()
    },
    "$nuxt.$route": function () {
      this.getCurrentRoute()
    }
  },
})
</script>
<style lang="postcss" scoped>
.nav-item {
  @apply flex items-center whitespace-nowrap gap-4 text-paperdazgray-300 text-sm py-4 px-4 rounded-xl transition ease-in-out overflow-hidden;
  background: transparent;

  &>* {
    position: relative;
    z-index: 1;
  }

  &.active {
    @apply text-white bg-paperdazgreen-300;
    transition: 0.25s;
    box-shadow: 0px 5px 7px 2px rgba(95, 201, 63, 0.25);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 13px;
      width: 13px;
      border-radius: 50%;
      top: 8px;
      right: 15%;
      background: rgba(255, 255, 255, 0.2);
    }

    &::after {
      content: '';
      position: absolute;
      height: 45px;
      width: 45px;
      border-radius: 50%;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.2);
      transform: translate(10%, 20%);
    }
  }
}
</style>