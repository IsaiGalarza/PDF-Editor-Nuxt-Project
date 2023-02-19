<template>
  <div
    class="profile-tab flex items-center overflow-x-auto overflow-y-hidden sm:border-b border-gray-200 custom-scrollbar"
  >
    <!-- <div
      v-for="(tab, i) in tabs"
      :key="i"
      class="h-8 sm:h-9 lg:h-10 border-b-2 cursor-pointer font-semibold text-sm sm:text-base lg:text-lg whitespace-nowrap"
      :class="[
      currentTab == tab.value
          ? 'border-paperdazgreen-300 text-paperdazgreen-300'
          : 'border-transparent',
        i !== tabs.length - 1 ? 'mr-6 sm:mr-8' : '', tab.hidden ? 'hidden' : ''
      ]"
      @click="setSettingTab(tab.value)"
    > -->
    <div
      v-for="(tab, i) in tabs"
      :key="i"
      class="h-9 lg:h-10 sm:border-b-2 sm:font-semibold cursor-pointer text-sm sm:text-base lg:text-lg whitespace-nowrap flex items-center justify-center px-3 px-sm-0 rounded-full sm:rounded-none"
      :class="[
      currentTab == tab.value
          ? 'bg-paperdazgray-800 text-white/100 sm:bg-transparent sm:border-paperdazgreen-300 sm:text-paperdazgreen-300'
          : 'bg-white/100 text-paperdazgray-900 sm:bg-transparent sm:border-transparent',
        i !== tabs.length - 1 ? 'mr-2 sm:mr-8' : '',
        i === 0 ? 'ms-2 sm:ms-0' : 'ms-0',
        tab.hidden ? 'hidden' : '',
      ]"
      @click="setSettingTab(tab.value)"
    >
      {{ tab.label }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'ProfileTab',
  model: {
    prop: 'currentTab',
    event: 'update-tab',
  },
  props: {
    currentTab: {
      type: String,
      default: '',
    },
    tabs: {
      type: Array,
      default: () => [
        { label: 'Account', value: 'account' },
        { label: 'Change Password', value: 'change-password' },
        { label: 'Signature/Initials', value: 'signature-initials' },
      ],
    },
  },
  data() {
    return {}
  },
   methods:{
    setSettingTab(val){
       this.$nuxt.$router.push(`/settings?tab=${val}`)
      this.$emit(`update-tab`, val)
    }
  },
  watch:{
    '$route.query.tab': function(){
      this.setSettingTab(this.$route.query.tab)
    }
  }
})
</script>

<style scoped>
.profile-tab::-webkit-scrollbar {
  display: none;
}
</style>
