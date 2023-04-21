<template>
  <section class="font-family grid grid-cols-1 md:grid-cols-[max-content,1fr] gap-6">
    <!-- logo container -->
    <div class="bg-white md:w-[250px] w-full profile-image-container !py-0">
      <div class="icon-img md:mx-7 my-7 relative" @click="showImageCropperModal">
        <img v-if="profilePhoto != null" :src="profilePhoto" id="referenceImg" class="top-profile-image cursor-pointer" />
        <span v-else>
          {{ firstCompanyName }}
        </span>
        <div v-if="isUser" @click="visibleUploadImageDialog = true" class="w-auto absolute bottom-3 right-3">
          <upload-file-icon />
        </div>
      </div>

      <cropper-image-upload :show="visibleUploadImageDialog"
        @visibleDialog="(show) => (visibleUploadImageDialog = show)" />

    </div>
    <!-- end of logo container -->
    <!-- dentals container -->
    <div class="bg-white sm:w-12/12 profile-dental-container">
      <!-- <h1>{{user.companyName || ''}}</h1> -->
      <header class="text-600 text-[#414142] font-semibold pl-7 pb-2 border-b border-[#DCDCDC] relative">

        <div class="input-wrapper-title flex justify-between items-center">
          <!-- <input type="text" v-model="name" placeholder="Apple Dental" :disabled="true"
          class="text-black text-2xl" /> -->
          <span class="text-2xl text-grey pl-3"> {{ name }}</span>
          <share-outline-icon :width="18" class="w-auto  pr-3" />
          <!-- <button v-if="isUser" @click="toggleInput" class="float-right pr-10 md:pr-20">
            <img src="../../assets/img/pencil.png" class="cursor-pointer w-[20px] h-[20px]" />
          </button> -->
          
        </div>

        
       
      </header>
      <!--<div class="text-sm px-2 border-b w-full py-2 text-gray-400"><i>@hookname</i></div>-->
      <div class="flex justify-center items-end h-28">
        <p class="text-center leading-8">
          We are doing our part to reduce carbon footprint. <br />
          Join us, complete our files on Paperlink!
        </p>
      </div>
      <!-- <div v-else>
       
     
        <div class="w-full grid place-items-center">
          <button
            class="w-[160px] flex justify-center items-center text-white py-2 mt-3 text-center border-none bg-paperdazgreen-400 rounded-md"
            v-if="showUpdateButton" :class="[isLoading ? 'opacity-50' : 'opacity-100']" :disabled="isloading"
            @click="patchUser">
            Update
            <SpinnerDottedIcon v-if="isLoading" height="20" width="20" class="animate-spin ml-2" />
          </button>
        </div>


      </div> -->
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
import { Cropper } from 'vue-advanced-cropper';
import VerticalButtons from './cropper/VerticalButtons';
import SquareButton from './cropper/SquareButton';
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
    ShareOutlineIcon
  },
  methods: {
    showImageCropperModal() {
      this.isCreator ? this.visibleUploadImageDialog = true : null
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
          phone: this.phone
        })
        .then(() => {
          this.$notify.success({
            message: 'Updated successfully'
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
              message: message
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
      return (this.userInfo?.companyName || '').charAt(0).toUpperCase()
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
    userInfo: function () {
      this.phone = this.userInfo?.phone
      this.address = this.userInfo?.address
      this.name = this.userInfo?.companyName
    }
  }
})
</script>
<style lang="scss" scoped>
.font-family {
  font-family: inherit !important;
}

.profile-image-container {
  @apply bg-white flex justify-center flex-wrap items-center py-4 rounded-[20px];

  .icon-img {
    @apply w-[195px] h-[195px] font-[900] text-[6em] text-white cursor-pointer bg-[#77B550] grid place-items-center rounded-[30px];
    // text-shadow: 1px 5px 7px rgb(148 148 148);
  }

  .text-wrapper {
    @apply block w-full text-center text-[0.8rem] text-paperdazgray-400 mt-1;
  }
}

.profile-dental-container {
  @apply py-4 rounded-[20px];

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