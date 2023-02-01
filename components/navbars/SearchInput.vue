<template>
  <div>
    <div v-show="isFocused" class="overlay bg-dark opacity-[0.5]" />
    <el-dropdown trigger="click" class="w-full z-[22]" placement="bottom">
      <div class="el-dropdown-link flex align-center">
        <el-input
          placeholder=""
          v-model="searchString"
          size="small"
          class="search-box"
          @blur="onBlurHandle"
          @focus="onClickHandle"
          ref="input"
        >
          <span
            slot="suffix"
            class="grid place-items-center h-full w-full"
            :class="{'focused-icon': isFocused}"
            @click="onClickSearchIcon"
            >
            <search-white-icon
              v-if="isFocused"
              width="16"
              height="16"
            />
            <search-icon
              v-else
              width="14"
              height="14"
            />
          </span>
        </el-input>
      </div>
      <el-dropdown-menu
        slot="dropdown"
        :class="topSearchContent.length > 0 ? '' : 'hidden'"
      >
        <!-- Start:: dropdown -->
        <div class="bg-white rounded-lg whitespace-nowrap w-[90vw] lg:w-[40vw]">
          <div class="max-h-[60vh] custom-scrollbar overflow-y-auto p-2">
            <article
              class="
                py-4
                text-[#9F9F9F]
                grid grid-cols-[max-content,1fr,max-content]
                gap-4
              "
              v-for="item in topSearchContent"
              :key="item.id"
            >
              <img
                :src="
                  (item.user || {}).profile_picture ||
                  '/img/placeholder_picture.png'
                "
                alt=""
                class="h-16 w-16 rounded-2 object-cover"
              />
              <div class="overflow-hidden">
                <nuxt-link :to="`/pdf/${item.paperLink}`">
                  <p class="text-sm text-black truncate font-semibold">
                    {{ item.fileName }}
                  </p>
                  <p class="text-sm text-black mb-1 truncate font-semibold">
                    {{ (item.user || {}).company_name }}
                  </p>
                  <p class="text-[11px] mt-0.5 truncate">
                    {{ item.paperLink }}
                  </p>
                </nuxt-link>
              </div>
              <SearchShare :showShareIcon="true" :file="item" />
            </article>
          </div>
        </div>
        <!-- End:: dropdown -->
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import mixins from 'vue-typed-mixins'
import GlobalMixin from '~/mixins/GlobalMixin'
import login from '@/mixins/login'
import SearchIcon from '../svg-icons/SearchIcon.vue'
import SearchWhiteIcon from '../svg-icons/SearchWhiteIcon.vue'
import SearchShare from '../search-strips/component/SearchShare.vue'

export default mixins(GlobalMixin, login).extend({
  name: 'SearchInput',
  components: {
    SearchIcon,
    SearchWhiteIcon,
    SearchShare,
  },
  emits: ['onBlurInput', 'onToggle'],
  data() {
    return {
      searchString: '',
      topSearchContent: [],
      isFocused: false,
    }
  },
  computed: {
    searchResult() {
      if (!this.searchString) return []
      return [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
      ]
    },
  },
  methods: {
    querySearch(_queryString, cb) {
      cb(this.searchResult)
    },
    async getGeneralSearch(topsearch) {
      if (!topsearch.trim()) return

      // await this.$axios.get(`/files?$sort[createdAt]=-1&filePrivacy[$ne]=doNotPost&fileName[$like]=${topsearch}%`)
      await this.$axios
        .get(
          `/files?$sort[createdAt]=-1&filePrivacy[$ne]=doNotPost&$or[0][fileName][$like]=${topsearch}%&$or[1][companyName][$like]=${topsearch}%`
        )
        .then((response) => {
          const { data } = response.data
          this.topSearchContent = data
        })
      // &$or[1][uploadedBy]={ team member id }&$or[2][uploadedBy]={ team member id 2 }
    },
    onBlurHandle() {
      this.isFocused = false
      this.$emit('onBlurInput')
    },
    onClickHandle() {
      this.isFocused = true
    },
    onClickSearchIcon() {
      this.$refs['input'].focus()
      this.$emit('onToggle')
    },
  },
  watch: {
    searchString: function (val) {
      this.getGeneralSearch(this.searchString)
    },
    ['topSearchContent.length']: function (val) {
      if (val > 0) {
        window.scrollTo(0, window.scrollY + 1)
        setTimeout(function () {
          window.scrollTo(0, window.scrollY - 1)
        }, 200)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 21;
  pointer-events: none;
  transition: all ease-in-out 200ms;
}
.focused-icon {
  @apply bg-paperdazgreen-300;
  border-radius: 8px;
  width: 40px;
}
</style>