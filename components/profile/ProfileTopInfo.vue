<template>
  <section class="font-family grid mt-0   grid-cols-[max-content,1fr] lg:gap-6">
    <div class="h-[50px] lg:hidden flex justify-between items-center px-2 w-[100%] left-0 bg-white shadow-sm fixed z-20 top-0">
      <img src="/icon.png" width="35" height="35" />
      <p class="font-[500] text-[1rem]">Business Profile</p>
      <span @click="openShareModal" class="cursor-pointer"><share-outline-icon :width="18"
          class="w-auto" /></span>
    </div>
    <!-- logo container -->
    <div class="bg-white lg:w-[250px] w-full profile-image-container !py-0">
      <div class="icon-img md:mx-7 my-7 relative">
        <img v-if="profilePhoto != null" :src="profilePhoto" id="referenceImg" class="top-profile-image cursor-pointer" />
        <span class="hidden lg:block " v-else :style="`fontSize: ${(108 / (firstCompanyName.length)) * 1.75}px`">
          {{ firstCompanyName }}
        </span>
        <span  v-if="profilePhoto === null" class=" lg:hidden" :style="`fontSize: ${(108 / (firstCompanyName.length)) * 1.2}px`">
          {{ firstCompanyName }}
        </span>
      </div>

      <cropper-image-upload :show="visibleUploadImageDialog"
        @visibleDialog="(show) => (visibleUploadImageDialog = show)" />
    </div>
    <!-- end of logo container -->
    <!-- dentals container -->
    <div class="bg-white sm:w-12/12 profile-dental-container">
      <!-- <h1>{{user.companyName || ''}}</h1> -->
      <header class="text-600 text-[#414142] font-semibold lg:pl-7 lg:pb-2 lg:border-b border-[#DCDCDC] relative">
        <div class="input-wrapper-title flex relative lg:justify-center items-center">
          <span class="text-2xl text-grey lg:pl-3"> {{ name }}</span>
          <span @click="openShareModal" class="cursor-pointer"><share-outline-icon :width="18"
              class="w-auto absolute right-4 hidden lg:block pr-3" /></span>
        </div>
      </header>
      <!--<div class="text-sm px-2 border-b w-full py-2 text-gray-400"><i>@hookname</i></div>-->
      <div class="flex min-h-0 lg:justify-center lg:px-2 lg:items-end h-28">
        <p class="lg:text-center text-[0.8rem] leading-6 lg:leading-8">
          We are doing our part to reduce carbon footprint. <br class="hidden lg:block" />
          Join us, complete our files on Paperlink!
        </p>
      </div>
    </div>
    <!-- end of dentals container -->
  </section>
</template>
<style src="~/assets/cropper.css"></style>
<script>
import Pencil from '~/assets/recent-icons/pencil.vue'
import Vue from 'vue'
//   import VueQrcode from 'vue-qrcode'
import QRCode from 'qrcode'
import login from '~/mixins/login'
import mixins from 'vue-typed-mixins'
import SpinnerDottedIcon from '../svg-icons/SpinnerDottedIcon.vue'
import ballloader from '../loader/ballloader.vue'
import { ErrorHandler } from '~/types/ErrorFunction'
import CropperImageUpload from '../cropper/CropperImageUpload.vue'
import { Cropper } from 'vue-advanced-cropper'
import VerticalButtons from './cropper/VerticalButtons'
import SquareButton from './cropper/SquareButton'
import ShareOutlineIcon from '~/components/svg-icons/ShareOutlineIcon.vue'
import UploadFileIcon from '~/components/svg-icons/UploadFileIcon.vue'
//import 'vue-advanced-cropper/dist/style.css';

export default mixins(login).extend({
  name: 'profile-top-info',
  props: ['userInfo'],
  data() {
    return {
      editEnalble: true,
      showScanner: false,
      profilePicsSrc: '',
      qrCls: 'qrcode',
      qrText: 'https://photophobic.web.app',
      size: 170,
      background: 'transparent',
      phone: '',
      address: '',
      name: '',
      isLoading: false,
      visibleUploadImageDialog: false,
    }
  },
  // async asyncData({ params, query, $axios}) {
  //    let companyUser = $axios.get(`/users/${}`)
  // },
  components: {
    CropperImageUpload,
    Pencil,
    SpinnerDottedIcon,
    Cropper,
    VerticalButtons,
    SquareButton,
    ballloader,
    UploadFileIcon,
    ShareOutlineIcon,
  },
  methods: {
    openShareModal() {
      this.$emit(
        'openShare',
        `${window.location.origin}/${this.userInfo.businessPage}`,
      )
    },
    showImageCropperModal() {
      this.isCreator ? (this.visibleUploadImageDialog = true) : null
    },
    getTeamPublicFolder() {
      this.$axios.get()
    },
    patchUser() {
      if (
        (this.address.trim() == '' && this.phone.trim() == '') ||
        this.isLoading
      )
        return
      this.isLoading = true
      this.$axios
        .$patch(`/users/${this.$auth.user.id}`, {
          address: this.address,
          phone: this.phone,
        })
        .then(() => {
          this.$notify.success({
            message: 'Updated successfully',
          })
          this.initialInput = true
          this.initialInput2 = true
          this.showUpdateButton = false
          this.isLoading = false
        })
        .catch(({ response }) => {
          let message = ErrorHandler(response)
          this.$notify
            .error({
              message: message,
            })
            .finally(() => {
              this.isLoading = false
            })
        })
    },
    toggleInput() {
      this.editEnalble = !this.editEnalble
    },
  },
  destroyed() {
    // Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
  },
  mounted() {
    this.phone = this.userInfo?.phone
    this.address = this.userInfo?.address
    this.name = this.userInfo?.companyName
    // this.phone = this.userInfo?.phone
    // this.address = this.userInfo?.address
    // this.name = this.userInfo?.companyName
    //this.profilePhoto = this.userInfo?.profilePhoto
    // QRCode.toCanvas(this.$refs.qrcancas, this.qrCodeurl, function () {});
    //  await this.$nextTick()
    // ;(this.$refs.qrcancas as HTMLElement).removeAttribute('style')
    // ;(this.$refs.qrcancas as HTMLElement).removeAttribute('height')
    // ;(this.$refs.qrcancas as HTMLElement).removeAttribute('width')
    //     },
  },
  computed: {
    isCreator() {
      return this.user?.id == this.userInfo?.id
    },
    firstCompanyName() {
      let myString = this.userInfo?.companyName
      let splitString = myString.split(' ') // Split the string by space

      let firstLetters = splitString.map((word) => word.charAt(0)) // Extract the first letter of each word using charAt()

      return firstLetters.join().replace(/,/g, '').toUpperCase()
    },
    showUpdateButton() {
      return !this.editEnalble || !this.editEnalble
    },
    qrCodeurl() {
      return `${window.origin}/${this.userInfo?.businessPage}`
    },
    login() {
      return this.$auth.loggedIn
    },
    user() {
      return this.$auth?.user
    },
    isUser() {
      return this.user?.id == this.userInfo?.id
    },
    profilePhoto() {
      return this.userInfo?.profilePicture
    },
  },
  watch: {
    '$auth.user': function () {
      this.address = this.$auth.user?.address || ''
      this.phone = this.$auth.user?.phone || ''
      // QRCode.toCanvas(this.$refs.qrcancas, this.qrCodeurl, function () {});
    },
  },
})
</script>
<style lang="scss" scoped>
.font-family {
  font-family: inherit !important;
}

.profile-image-container {
  @apply bg-white flex justify-center flex-wrap px-4 items-center py-4 rounded-l-[20px] lg:rounded-[20px];

  .icon-img {
    @apply px-4 py-4  text-[10px]  font-[900] text-white cursor-pointer bg-[#77B550] grid place-items-center rounded-[20px] ;
    // text-shadow: 1px 5px 7px rgb(148 148 148);
  }

  .text-wrapper {
    @apply block w-full text-center text-[0.8rem] text-paperdazgray-400 mt-1;
  }
}

.profile-dental-container {
  @apply py-4 lg:rounded-[20px] rounded-r-[20px];

  h1 {
    @apply border-b-2 border-paperdazgray-200 py-4 text-[1.2rem] pl-4 font-medium;
  }

  .input-wrapper {
    @apply border-paperdazgray-200 py-2;

    input {
      @apply border-none bg-transparent px-3 text-[16px];
      width: calc(100% - 40px);
      outline: none !important;
    }

    button {}
  }

  .input-wrapper-title {
    @apply py-2;

    input {
      @apply border-none bg-transparent px-3 text-[24px];
      width: calc(100% - 40px);
      outline: none !important;
    }
  }
}

.scanner-container {
  @apply bg-white rounded-[10px] py-4;

  b {
    @apply block text-center text-[0.8rem];
  }
}

.top-profile-image {
  @apply absolute w-[90%] h-[90%] object-cover flex items-center justify-center rounded-[24px];
}

.spinner-container {
  z-index: 9999;
}
</style>
