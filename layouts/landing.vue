<template>
  <div
    id="landing-layout"
    class="relative bg-[#e4f3e0] flex flex-col min-h-screen"
  >
    <app-bar />
    
    <main
      class="flex-1 flex flex-col bg-paperdazgreen-300"
      
    >
    <LandingToast/>
      <Nuxt class="flex-1" />
    </main>
    <!-- <app-footer /> -->
    <!-- <CookiesPop/> -->
  </div>
</template>
<script >
import Vue from 'vue'
import AppBar from '~/components/widgets/AppBar.vue'
import AppFooter from '~/components/widgets/AppFooter.vue'
import CookiesPop from '~/components/landing/cookiesPop.vue';
import mixins from 'vue-typed-mixins';
import login from '~/mixins/login';
import LandingToast from '~/components/widgets/LandingToast.vue';
import GlobalMixin from '~/mixins/GlobalMixin';


export default mixins(login, GlobalMixin).extend({
  components: { AppBar, AppFooter, CookiesPop, LandingToast },
  loading: false,
  async created(){
    await this.filterUsers()
  }
})
</script>
