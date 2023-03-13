<template>
  <div id="bottom-nav" class="bg-white flex items-center text-[#606060]">
    <span class="h-full flex items-center justify-center flex-1 px-3" v-show="isSearch">
      <search-input @onBlurInput="isSearch = false" @onToggle="isSearch = false" :isSearch="isSearch" />
    </span>
    <span class="h-full flex items-center justify-center flex-1 px-1" v-show="!isSearch">
      <folder-icon class="w-4 h-4" />
    </span>
    <a v-if="!appIsFreeUser" :href="`/public/profile/${mainUserLink}`" target="_blank"  class="h-full flex items-center justify-center flex-1 px-1" v-show="!isSearch">
      <building-icon class="w-4 h-4" />
    </a>
    <button @click="openUserFiles" class="h-full flex items-center justify-center flex-1 px-1" v-show="!isSearch">
      <file-icon class="h-4" />
    </button>
    <nuxt-link to="/" class="h-full flex items-center justify-center flex-1 px-1" v-show="!isSearch">
      <home-icon class="h-4" />
    </nuxt-link>
    <button class="h-full flex items-center justify-center flex-1 px-1" v-show="!isSearch" @click="isSearch = true">
      <search-icon class="h-4" />
    </button>
  </div>
</template>
<script>
import Vue from 'vue'
import FileIcon from '../svg-icons/FileIcon.vue'
import FolderIcon from '../svg-icons/FolderIcon.vue'
import HomeIcon from '../svg-icons/HomeIcon.vue'
import SearchIcon from '../svg-icons/SearchIcon.vue'
import UserTypeEnum from '~/models/UserTypeEnum'
import SearchInput from './SearchInput.vue'
import BuildingIcon from '../svg-icons/BuildingIcon.vue'
import AppMixins from '~/mixins/AppMixins'
import mixins from 'vue-typed-mixins'

export default mixins(AppMixins).extend({
  name: 'BottomNav',
  components: { FolderIcon, FileIcon, HomeIcon, SearchIcon, SearchInput, BuildingIcon },
  computed:{
    user(){
      return (this.$auth.user)
    },
    mainUserLink() {
      switch (this.$auth?.user?.role) {
        case UserTypeEnum.PAID:
          return (this.$auth.user || {}).id
        case UserTypeEnum.TEAM:
          return (this.$auth.user || {}).mainAccountId
      }
      (this.$auth.user || {}).id
    }
  },
  mounted(){
  },
  data() {
    return {
      isSearch: false,
    }
  },
  methods:{
    openUserFiles(){
      switch ((this.$auth.user).role) {
          case UserTypeEnum.PAID:
            this.$nuxt.$router.push("/company-files")
            return;
          case UserTypeEnum.FREE:
            this.$nuxt.$router.push("/my-files")
            return;

      }
    }
  },
})
</script>

<style scoped>
#bottom-nav {
  box-shadow: 0px -3px 14px rgb(0 0 0 / 11%);
}
</style>
