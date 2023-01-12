<template>
  <section class="flex flex-wrap w-full md:justify-between font-family">
    <!-- logo container -->
    <div class="bg-white md:w-[24%] w-full profile-image-container">
      <div class="icon-img md:mx-7 my-6 relative" @click="changeProfileimage">
        <input type="file" class="hidden" v-show="false" @change="uploadProfilePicture" ref="referenceInput" />


        <img v-if="profilePhoto != null" :src="profilePhoto" id="referenceImg"
          class="top-profile-image cursor-pointer" />
        <span v-else>
          {{ firstCompanyName }}
        </span>
        <div
          v-if="isUser"
          class="w-auto absolute bottom-3 right-3"
        >
          <upload-file-icon />
        </div>
      </div>
    </div>
    <!-- end of logo container -->

    <!-- dentals container -->
    <div class="bg-white sm:w-12/12 md:w-[74%] w-full profile-dental-container">
      <!-- <h1>{{user.companyName || ''}}</h1> -->
      <header class="text-600 text-[#414142] font-semibold pl-7 pb-9 border-b border-[#DCDCDC] relative">
          <div class="input-wrapper-title flex justify-between items-start">
        <!-- <input type="text" v-model="name" placeholder="Apple Dental" :disabled="true"
          class="text-black text-2xl" /> -->
          <span class="text-2xl text-grey pl-3"> {{userInfo.companyName}}</span>
          <button v-if="isUser" @click="toggleInput" class="float-right">
            <img
              src="../../assets/img/pencil.png"
              class="cursor-pointer w-[20px] h-[20px] mr-20"/>
          </button>
        </div>
        <share-outline-icon :width="18" class="w-auto absolute bottom-5 right-4 mr-px" />
      </header>

      <!--<div class="text-sm px-2 border-b w-full py-2 text-gray-400"><i>@hookname</i></div>-->
      <div
        v-if="!address && !phone && !isUser"
        class="flex justify-center items-end h-28"
      >
        <p class="text-center font-medium">
          We are doing our part to reduce carbon footprint. <br />
          Join us, complete our files on Paperdaz!
        </p>
      </div>
      <div v-else>
      <div class="px-8 py-3 border-b border-[#F0F0F0] input-wrapper">
        <input type="text" v-model="address" placeholder="Company`s address" :disabled="editEnalble"
          :class="[editEnalble ? 'text-gray-400' : 'text-black']" />
        <!-- <button v-if="isUser" @click="toggleInput">
          <Pencil v-if="initialInput" :width="18" />
          <span class="text-[15px] font-[900] text-paperdazgreen-500" v-else>&#x2715;</span>
        </button> -->
      </div>

      <div class="px-8 py-3 input-wrapper">
        <input type="number" v-model="phone" placeholder="Company`s phone number" :disabled="editEnalble"
          :class="[editEnalble ? 'text-gray-400' : 'text-black']" />
        <!-- <button v-if="isUser" @click="toggleInput2">
          <Pencil v-if="initialInput2" :width="18" />
          <span class="text-[15px] font-[900] text-paperdazgreen-500" v-else>&#x2715;</span>
        </button> -->
      </div>

      <div class="w-full grid place-items-center">
        <button
          class="w-[160px] flex justify-center items-center text-white py-2 mt-3 text-center border-none bg-paperdazgreen-400 rounded-md"
          v-if="showUpdateButton"
          :class="[isLoading ? 'opacity-50' : 'opacity-100']"
          :disabled="isloading"
          @click="patchUser"
        >
          Update
          <SpinnerDottedIcon
            v-if="isLoading"
            height="20"
            width="20"
            class="animate-spin ml-2"
          />
        </button>
      </div>
      </div>
    </div>
    <!-- end of dentals container -->
  </section>
</template>

<script>
import Pencil from '~/assets/recent-icons/pencil.vue'
import Vue from 'vue'
//   import VueQrcode from 'vue-qrcode'
import QRCode from 'qrcode'
import login from '~/mixins/login'
import mixins from 'vue-typed-mixins'
import SpinnerDottedIcon from '../svg-icons/SpinnerDottedIcon.vue'
import { ErrorHandler } from '~/types/ErrorFunction'
import ShareOutlineIcon from '~/components/svg-icons/ShareOutlineIcon.vue'
import UploadFileIcon from '~/components/svg-icons/UploadFileIcon.vue'

export default mixins(login).extend({
  name: 'profile-top-info',
  props: ['userInfo'],
  data () {
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
      isLoading: false
    }
  },
  // async asyncData({ params, query, $axios}) {
  //    let companyUser = $axios.get(`/users/${}`)
  // },
  components: {
    Pencil,
    SpinnerDottedIcon,
    UploadFileIcon,
    ShareOutlineIcon
  },
  methods: {
    getTeamPublicFolder () {
      this.$axios.get()
    },
    patchUser () {
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
    toggleInput () {
      this.editEnalble = !this.editEnalble
    },
    changeProfileimage () {
      // console.log('change image');
      // if (!this.isUser) return;
      this.$refs.referenceInput.click()
    },
    async uploadProfilePicture (event) {
      // if (!this.isUser) return;

      let fileInput = event.target

      if (
        fileInput.files.length < 1 ||
        fileInput.files[0].size / 1024 / 1024 > 2
      ) {
        this.$notify.error({
          message: 'File size must be less than 2MB'
        })
        return
      }

      let formdata = new FormData()
      formdata.append('upload', fileInput.files[0], 'user-profile-picture.jpg')
      formdata.append('type', 'profilePicture')
      formdata.append('userId', this.user.id)

      await this.$axios
        .$patch(`/files`, formdata)
        .then(() => {
          //@ts-ignore
          this.filterUsers()
        })
        .catch(() => {
          this.$notify.error({
            message: 'Unable to upload profile picture'
          })
        })
    }
  },
  mounted () {
    console.log('>>>>>>>>>>>>???', this.userInfo)
    this.phone = this.userInfo?.phone
    this.address = this.userInfo?.address
    this.name = this.userInfo?.companyName
    // QRCode.toCanvas(this.$refs.qrcancas, this.qrCodeurl, function () {});
    //  await this.$nextTick()
    // ;(this.$refs.qrcancas as HTMLElement).removeAttribute('style')
    // ;(this.$refs.qrcancas as HTMLElement).removeAttribute('height')
    // ;(this.$refs.qrcancas as HTMLElement).removeAttribute('width')
    //     },
  },
  computed: {
    firstCompanyName () {
      return (this.userInfo?.companyName || '').charAt(0).toUpperCase()
    },
    showUpdateButton () {
      return !this.editEnalble || !this.editEnalble
    },
    qrCodeurl () {
      return `${window.origin}/public/profile/${this.userInfo?.id}`
    },
    login () {
      return this.$auth.loggedIn
    },
    user () {
      return this.$auth?.user
    },
    isUser () {
      return this.user?.id == this.userInfo?.id
    },
    profilePhoto () {
      return this.userInfo?.profilePicture
    }
  },
  watch: {
    '$auth.user': function () {
      this.address = this.$auth.user?.address || ''
      this.phone = this.$auth.user?.phone || ''
      // QRCode.toCanvas(this.$refs.qrcancas, this.qrCodeurl, function () {});
    }
  }
})
</script>

<style lang="scss" scoped>
.font-family {
  font-family: inherit !important;
}

.profile-image-container {
  @apply bg-white flex justify-center flex-wrap items-center py-4 rounded-[10px];

  .icon-img {
    @apply w-48 h-48 font-[900] text-[6em] text-paperdazgreen-500 cursor-pointer border-2 border-paperdazgreen-400/60 grid place-items-center rounded-[8px];
    text-shadow: 1px 5px 7px rgb(148 148 148);
  }

  .text-wrapper {
    @apply block w-full text-center text-[0.8rem] text-paperdazgray-400 mt-1;
  }
}

.profile-dental-container {
  @apply py-4 rounded-[10px];

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

    button {
    }
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
  @apply absolute w-[90%] h-[90%] mt-[5%] ml-[5%] object-cover rounded-lg m-2;
}
</style>
