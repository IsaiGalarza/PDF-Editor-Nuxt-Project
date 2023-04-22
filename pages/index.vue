<template>
  <div class="" @click="">
    <div class="min-h-[60vh]  place-items-center bg-paperdazgreen-300">
      <hero-page />
      <ConfirmPassword :userInfo="userDecodedInfo" v-model="showConfirmPassword" />
      <div class=" bg-white h-full flex-col md:flex-row flex w-full items-end flex-1 py-4 px-4">
        <div class="md:w-[80%]   text-[0.8rem] items-center flex justify-end md:pr-3 text-[#B9B8C1]">
          <p class="text-center">© Paperdaz LLC, 1968 S Coas Hwy Suite 4302, Laguna Beach CA 92651 </p>
        </div>

        <div class=" w-full flex mt-3 md:items-end md:mt-0 items-center flex-col md:flex-row  pl-6">

         
          <nuxt-link to="/package?tablevel=1" class="text-[0.8rem]  md:py-0  px-3">
            Terms of Use  
          </nuxt-link>
          <nuxt-link to="/package?tablevel=1" class="text-[0.8rem] md:py-0  px-3">
            Privacy Policy
          </nuxt-link>
          <nuxt-link to="/package?tablevel=1" class="text-[0.8rem] md:py-0  px-3">
            Contact Us
          </nuxt-link>
        </div>


      </div>

    </div>
  </div>
</template>

<script>
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import HeroPage from '~/components/landing/widgets/HeroPageV2.vue'
import LandingJoinSection from '~/components/landing/widgets/LandingJoinSection.vue'
import LandingPageInfo from '~/components/landing/widgets/LandingPageInfo.vue'
import LandingPageKeyFeatures from '~/components/landing/widgets/LandingPageKeyFeatures.vue'
import LandingPageQrScan from '~/components/landing/widgets/LandingPageQrScan.vue'
import LandingDivider from '~/components/landing/widgets/LandingDivider.vue'
import ConfirmPassword from '~/components/modals/ConfirmPassword.vue'
import jwt, { decode, JsonWebTokenError } from 'jsonwebtoken'

import 'intro.js/minified/introjs.min.css'

@Component({
  layout: 'landing',
  auth: false,
  components: {
    HeroPage,
    LandingPageInfo,
    LandingPageQrScan,
    LandingPageKeyFeatures,
    LandingJoinSection,
    LandingDivider,
    ConfirmPassword,
  },
  // beforeRouteLeave(to, from, next) {
  //   location.href = to.fullPath
  //   return
  // },
})
export default class LandingPage extends Vue {
  beforeframe = true
  gsapLoaded = false
  motionPluginLoaded = false

  get gsapReadyToSetup() {
    return this.gsapLoaded && this.motionPluginLoaded
  }
  data() {
    return {
      showConfirmPassword: false,
      userDecodedInfo: {}
    }
  }
  mounted() {
    if (sessionStorage.getItem('requestSentFlag') == 'true') {
      this.$notify({
        message: 'Request has been sent.',
      })
    }
    setTimeout(function () {
      sessionStorage.setItem('requestSentFlag', false)
    }, 300)

    if (!this.$route.query?.verificationToken) return
    this.$route.query?.verificationToken && (this.showConfirmPassword = true)
    let encodedUser = jwt.verify(
      this.$route.query?.verificationToken,
      '+Erqnl5F0JnIsW++d9U0BfwpJ6w='
    )
    this.userDecodedInfo = encodedUser
  }
  head() {
    return {
      title: 'Paperdaz',
      script: [
        {
          hid: 'gsap',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js',
          defer: true,
          // Changed after script load
          callback: () => {
            this.gsapLoaded = true
          },
        },
        {
          hid: 'gsap-motion-plugin',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/MotionPathPlugin.min.js',
          defer: true,
          // Changed after script load
          callback: () => {
            this.motionPluginLoaded = true
          },
        },
        // {
        //   hid: 'tawk.to',
        //   src: 'https://embed.tawk.to/61ee08389bd1f31184d8e4d8/1fq4t07bg',
        //   defer: true,
        // },
      ],
    }
  } // end head method

  @Watch('gsapReadyToSetup')
  watchGsap(val) {
    if (val) {
      // @ts-ignore
      gsap.registerPlugin(MotionPathPlugin)
      // Check LandingJoinSection for elements
      // @ts-ignore
      gsap.to('#email', {
        duration: 5,
        repeat: 12,
        repeatDelay: 2,
        ease: 'power1.inOut',
        motionPath: {
          path: '#path',
          align: '#path',
          autoRotate: 30,
          alignOrigin: [0.5, 0.5],
          offsetY: -3,
        },
      })
    }
  } // end watcher method watchGsap
} // end class LandingPage
</script>
