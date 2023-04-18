<template>
  <div class="bg-white rounded-2xl">
    <div class="rounded-2xl bg-white py-6 px-6 flex items-center justify-center">
      <div class="flex flex-col items-center">
        <h3 class="uppercase text-paperdazgray-500 font-semibold text-center mb-4 text-xl">
          {{ userAccount }}
        </h3>
        <letter-avatar
        v-if="!$auth.user.profilePicture"
        style="width: 160px; height: 160px; font-size: 70px"
        class="w-40 h-40 rounded-1 object-cover cursor-pointer mr-1 mb-2"
        :username="(user.companyName || userFullName)"
      />
        <div v-else class="w-40 h-40 mx-auto p-0.5 mb-2">
          <div @click="visibleUploadImageDialog = true" class="w-full h-full border-2 border-[#B7EF94] p-2 cursor-pointer rounded-lg">
            <img :src="profilePhoto" class="w-full h-full profilePhoto rounded-lg" alt="" />
          </div>
        </div>
        <p class="text-lg font-semibold mb-2 capitalize">
          {{ `${user.firstName} ${user.lastName}` }}
        </p>
      </div>
    </div>
    <div class="flex justify-center">
      <button
      @click="visibleUploadImageDialog = true"
      class="flex items-center py-2 px-3 shadow rounded-md w-9/12 mb-3">
        <img src="~/assets/icons/edit-icon.svg" class="mr-3"/>
        {{ $auth.user.profilePicture ? 'Edit' : 'Upload' }}
      </button>
      <!-- <div class="bg-white rounded-lg px-2 py-4" @click="showQrcodeFunc">
        <barcode-icon class="w-full h-8 text-paperdazgreen-300 mb-2 cursor-pointer" />
        <p class="text-center text-[10px] font-medium">Download</p>
      </div>
      <div class="bg-white rounded-lg px-2 py-4" @click="showShareCompanyFunc">
        <share-icon class="w-full h-8 text-paperdazgreen-300 mb-2 cursor-pointer" />
        <p class="text-center text-[10px] font-medium">Share</p>
      </div>
      <a :href="`/public/profile/${mainUserLink}`" target="_blanck" class="block bg-white rounded-lg px-2 py-4">
        <building-icon class="w-full h-8 text-paperdazgreen-300 mb-2" />
        <p class="text-center text-[10px] font-medium">View Profile</p>
      </a> -->
    </div>


    <QrcodeShare :link="link" v-model="showQrcode" />

    <ShareFilesModal :link="link" v-model="showShareCompany" />
    <cropper-image-upload
      :show="visibleUploadImageDialog"
      @visibleDialog="(show) => (visibleUploadImageDialog = show)"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import BarcodeIcon from '../svg-icons/BarcodeIcon.vue'
import BuildingIcon from '../svg-icons/BuildingIcon.vue'
import ShareIcon from '../svg-icons/ShareIcon.vue'
import CropperImageUpload from '../cropper/CropperImageUpload.vue'
import login from "~/mixins/login"
import mixins from 'vue-typed-mixins'
import UserTypeEnum from '~/models/UserTypeEnum'
import QrcodeShare from '../company-files/Tabs/QrcodeShare.vue'
import ShareFilesModal from '../company-files/Tabs/ShareFilesModal.vue'
import LetterAvatar from '../widgets/LetterAvatar.vue'

export default mixins(login).extend({
  name: 'PaidProfileCard',
  components: { BarcodeIcon, ShareIcon, BuildingIcon, QrcodeShare, ShareFilesModal, CropperImageUpload, LetterAvatar },
  data() {
    return {
      showQrcode: false,
      showShareCompany: false,
      visibleUploadImageDialog: false,
    }
  },
  computed: {
    userFullName(){
        return `${this.user?.firstName} ${this.user?.lastName}`
    },
    profilePhoto() {
      return this.$store.getters.profilePhoto
    },
    user() {
      return this.$auth.user
    },
    link() {
      return (`${window.origin}/public-profile/${this.$auth.user.id}`)
    },
    userAccount() {
      switch ((this.$auth.user).role) {
        case UserTypeEnum.PAID:
          return 'PAID ACCOUNT'
        case UserTypeEnum.TEAM:
          return 'TEAM ACCOUNT'
      }
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
  methods: {
    showQrcodeFunc() {
      this.showQrcode = true
    },
    showShareCompanyFunc() {
      this.showShareCompany = true
    },
    PopUpFileInput() {
      try {
        (this.$refs?.profileInput).click()
      } catch (err) {
        console.log(err)
      }
    },

    async uploadProfilePicture(eventy) {
      let fileInput = event.target

      if (fileInput.files.length < 1 || (fileInput.files[0].size / 1024 / 1024) > 2) {
        this.$notify.error({
          message: 'File size must be less than 2MB',
        })
        return
      }

      let formdata = new FormData()
      formdata.append('upload', fileInput.files[0], 'user-profile-picture.jpg')
      formdata.append('type', 'profilePicture')
      formdata.append('userId', (this.user).id)

      this.$axios
        .$patch(`/files`, formdata)
        .then(() => {
          //@ts-ignore
          this.filterUsers()
        })
        .catch(() => {
          this.$notify.error({
            message: 'Unable to upload profile picture',
          })
        })
    },
  },
})
</script>

