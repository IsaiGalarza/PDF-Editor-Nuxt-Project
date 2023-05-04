import Vue from 'vue'
import UserTypeEnum from '~/models/UserTypeEnum'
import { server } from '~/services/new-service'
import { ErrorHandler } from '~/types/ErrorFunction'

export default {
  computed: {
    $_ErrorHandler(){
      return ErrorHandler
    },
    $_server() {
      return server
    },
  },
  watch: {
    "$store.getters.getToast.active"(val: boolean){
        val && setTimeout(() => {
          //@ts-ignore
          this.toggleToast({
            active: false,
            msg: ``,
          })
        }, 5000);
    }
  },
  methods: {
    clearBusinessData(){
      // localStorage.setItem("from_businesspage", "false")
      //@ts-ignore
      // this.$store.commit("SET_BUSINESS_PAGE", false)
    },
    toggleToast(val: any) {
      //@ts-ignore
      this.$store.commit('SET_TOAST', val)
    },
    async logout(shouldRedirect: boolean = true) {
      // @ts-ignore
      if (shouldRedirect) await this.$nuxt.$router.push('/login')
      //@ts-ignore
      this.$notify({
        title: 'Authentication',
        message: 'Sucessfully logged out',
        type: 'success',
      })

      // @ts-ignore

      await this.$auth.logout()
      localStorage.removeItem('userID') // remove the local storage userID
    },
  },
}
