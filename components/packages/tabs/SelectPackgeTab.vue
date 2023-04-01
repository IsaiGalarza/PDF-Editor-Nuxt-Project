<!-- NOTE THE JQUERY IS USED IN THE CUSTOM SLIDER -->
<!-- jUST A LITTLE APPLICATION OF JQUERY WHICH IS FOUND IN W3SCHOOL FOR REFRENCE -->

<template>
  <div>
    <form
      @submit.prevent="sendPackageCode"
      v-if="pagesDefault"
      class="flex items-center gap-2 w-full max-w-[500px] mx-auto lg:mb-12 mb-8"
    >
      <el-input
        ref="packagecode"
        placeholder="Enter Promotion Name"
        v-model="promotionCode"
      />
      <button
        class="text-sm h-10 bg-paperdazgreen-400 text-white rounded-lg px-lg-5 px-3 hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 transition duration-0 hover:duration-150 shadow"
      >
        Search
      </button>
    </form>
    <!-- Start:: already existing package -->

    <transition name="fade" mode="out-in" :duration="200">
      <!-- Start:: already existing package -->
      <div v-if="pagesDefault" key="selecting">
        <div class="relative lg:py-4 flex flex-wrap justify-between">

              <!-- <div class="swiper-slide">Slide 1</div> -->
              <div
                class="lg:w-[calc(33.33333333%-2rem)] md:w-[calc(50%-2em)] w-[calc(100%-2em)] my-3"
                v-for="(p, i) in orderedPackages"
                :key="i"
              >
                <package-card
                  :edited="false"
                  :create="false"
                  :promoted="i == 1"
                  show-bottom-button
                  class="package-card-check-width "
                  :style="{ '--count': orderedPackages.length }"
                  @bottom-button-clicked="$emit('next-tab', $event)"
                  :stagingPackage="p"
                />
          </div>
        </div>
        <p class="font-medium text-lg text-center">
          Need a custom package for your business?
          <nuxt-link :to="`${$auth.loggedIn ? '../package?tablevel=1' : '/register'}`"
            ><button class="text-paperdazgreen-400 cursor-pointer">
              Create one
            </button>
          </nuxt-link>
        </p>
      </div>
      <!-- End:: already existing package -->

       <!-- Start:: Create custom package -->
       <div v-else key="creating">
        <select-custom-package @next-tab="$emit('next-tab', $event)" />
        <p class="font-medium text-lg text-center">
          Want to select pre-created packaged?
          <Nuxt-link to="/packages/?type=default"><button
            class="text-paperdazgreen-400 cursor-pointer"
          >
            Select Package
          </button>
        </Nuxt-link>
        </p>
      </div>
      <!-- End:: Create custom package -->
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import PackageCard from '~/components/settings/PackageCard.vue'
import _ from 'lodash'
import ArrowDownIcon from '~/components/svg-icons/ArrowDownIcon.vue'
import CheckIcon from '~/components/svg-icons/CheckIcon.vue'
import SelectCustomPackage from '../SelectCustomPackage.vue'
import SelectMainPackage from '../select-package/SelectMainPackage.vue'
import { Dummypackages } from '~/assets/json/dummy'
import Slider from '~/mixins/Slider'
import $ from 'jquery'
export default Vue.extend({
  components: {
    PackageCard,
    ArrowDownIcon,
    CheckIcon,
    SelectCustomPackage,
    SelectMainPackage,
  },
  name: 'SelectPackageTab',
  // mixins:[Slider],
  data() {
    return {
      creatingCustomPackage: false,
      promotionCode: undefined,
      pages: this.packages,
      packagecontent: Dummypackages.package,
      overflow: undefined,
      initialWidth: 0,
      showNav: false,
      showNext: true,
      showPrev: false,
    }
  },
  computed: {
    showPagination() {
      return this.orderedPackages.length > 1
    },
    orderedPackages() {
      // let temp = _.cloneDeep(this.packages)
      let temp = (this.packages || []).filter((el) => !el.visibility)
      temp.sort((a, b) => a.monthly_price - b.monthly_price)
      if (this.pagesDefault) {
        return temp
      } else if (this.pagesCustom) {
        return temp.filter((item) => item.type !== 'default')
      }
    },
  },
  props: {
    packages: {
      type: Array,
      default: () => [],
    },
    pagesDefault: {
      type: String,
      default: '',
    },
    pagesCustom: {
      type: String,
      default: '',
    },
  },
  methods: {
     scaleCenterPackage(child, parent){
        let children = document.querySelectorAll(child);
       let parentElem = document.querySelector(parent)
       children.forEach(element => {
        });
     },
     syncAllElemHeight(child, parent){
      setTimeout(() => {
        let children = document.querySelectorAll(child);
       let parentElem = document.querySelector(parent)
       let parentHeight = parentElem.clientHeight
       children.forEach(element => {
           element.style.height = parentHeight - 48 + 'px'
        });
      }, 20);
     },
    // scrollPackages(toLeft) {
    //   const packagesContainer = this.$refs.packagesContainer
    //   if (!packagesContainer) return
    //   packagesContainer.scrollBy({
    //     top: 0,
    //     left: toLeft ? -50 : 50,
    //     behavior: 'smooth',
    //   })
    // },
    sendPackageCode(event) {
      let { value } = this.$refs.packagecode
      this.$emit('setparams', value)
      //  this.promotionCode = null;
    },
  },
  mounted() {
    let { name } = this.$route.query
    this.creatingCustomPackage = !(name == 'default-package')
    window.onresize = function(){
      if($('.mySwiper'))
      this.initialWidth = 0
      $('.mySwiper').animate({ scrollLeft: this.initialWidth }, 500);
    }
  },
  watch: {

  },
})
</script>

<style lang="scss" scoped>
.scroll-container {
  @apply block whitespace-nowrap w-full overflow-x-scroll overflow-y-hidden py-6;
  div {
    @apply inline-block  xs:w-[300px] mx-3 whitespace-normal;
  }
}
.packages-container {
  @apply flex
        py-12
        gap-12
        sm:gap-8
        md:gap-12
        flex-col
        sm:flex-row
        mb-12;
  @apply px-3;
  //   @media only screen and (min-width: 640px) {
  //     @apply overflow-x-auto;
  //     scroll-snap-type: x mandatory;
  //   }
  // }
  .package-card-check-width {
    /* min-width: calc(100% / var(--count, 1)); */
    @media only screen and (min-width: 640px) {
      min-width: calc(100% / 2 - 16px);
      scroll-snap-align: start;
    }
    @media only screen and (min-width: 768px) {
      min-width: calc(100% / 2 - 24px);
      scroll-snap-align: start;
    }
    @media only screen and (min-width: 1024px) {
      min-width: calc(100% / 3 - calc(12px * 4) / 1.5);
    }
  }
}
::-webkit-scrollbar {
  width: 5px;
  height: 3px;
  cursor: pointer;
}
::-webkit-scrollbar-thumb {
  background-color: transparent;
  width: 5px;
  border-radius: 50px;
  cursor: pointer;
}
.mySwiper {
  @apply overflow-x-hidden whitespace-nowrap;
}
.swiper-slide {
  display: inline-block;
  @apply whitespace-normal mx-4;
}
.swiper-button-prev {
  @apply absolute top-[calc(50%-20px)] left-[-5px] z-[19];
}
.swiper-button-next {
  @apply absolute top-[calc(50%-20px)] right-[30px] z-[19];
}
</style>