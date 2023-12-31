<template>
  <div class="bg-white py-3 min-h-[100px] rounded-2xl">
    <div class="rounded-2xl bg-white py-6 px-6 flex items-center justify-center">
      <div class="flex flex-col items-center">
        <!-- <h3 class="uppercase text-paperdazgray-500 font-semibold text-center mb-4 text-xl">
          {{ userAccount }}
        </h3> -->
        <letter-avatar
          v-if="!$auth.user.profilePicture"
          style="width: 120px; height: 120px; font-size: 70px"
          class="w-40 h-40 rounded-4 object-cover cursor-pointer mr-1 mb-2"
          :username="user.companyName || userFullName"
        />
        <div v-else class="w-40 h-40 mx-auto p-0.5 mb-2">
          <div
            @click="visibleUploadImageDialog = true"
            class="w-full h-full border-2 border-[#679b46] p-2 cursor-pointer rounded-lg"
          >
            <img
              :src="profilePhoto"
              class="w-full h-full profilePhoto rounded-lg"
              alt=""
            />
          </div>
        </div>
        <!-- <p class="text-lg font-semibold mb-2 capitalize">
          {{ `${user.firstName} ${user.lastName}` }}
        </p> -->
      </div>
    </div>

    <div class="flex mb-3 flex-col items-center justify-center">
      <button
        @click="visibleUploadImageDialog = true"
        style="box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25)"
        class="flex items-center py-2 px-4 justify-center rounded-lg mb-5"
      >
        <img src="~/assets/icons/edit-icon.svg" class="mr-3" />
        {{ $auth.user.profilePicture ? "Edit" : "Upload" }}
      </button>

      <el-dropdown @command="onDateFormatSelected" trigger="click" class="w-full">
        <div class="flex w-full mb-4 items-center justify-center">
          <button
            class="border-[1px] w-[85%] py-2.5 rounded-[10px] border-[#22252948] flex items-center justify-center text-[#22252948]"
          >
            {{ dateType }}
            <img class="ml-4 scale-75" src="../../assets/icons/arrow_down.svg" alt="" />
          </button>
        </div>
        <el-dropdown-menu slot="dropdown" class="table-menu-dropdown-menu">
          <el-dropdown-item
            v-for="(value, key, index) in dateFormat"
            :key="key"
            :command="value"
            class="dropdown-item"
          >
            <div class="flex justify-between w-full border-t border-gray-200">
              <span class="ml-1">{{ value.name }}</span>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown @command="onTimeFormatSelected" trigger="click" class="w-full">
        <div class="flex w-full mb-4 items-center justify-center">
          <button
            class="border-[1px] w-[85%] py-2.5 rounded-[10px] border-[#22252948] flex items-center justify-center text-[#22252948]"
          >
            {{ timeType }}
            <img class="ml-4 scale-75" src="../../assets/icons/arrow_down.svg" alt="" />
          </button>
        </div>
        <el-dropdown-menu slot="dropdown" class="table-menu-dropdown-menu">
          <el-dropdown-item
            v-for="(value, key, index) in timeFormat"
            :key="key"
            :command="value"
            class="dropdown-item"
          >
            <div class="flex justify-between w-full border-t border-gray-200">
              <span class="ml-1">{{ value }}</span>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
import Vue from "vue";
import BarcodeIcon from "../svg-icons/BarcodeIcon.vue";
import BuildingIcon from "../svg-icons/BuildingIcon.vue";
import ShareIcon from "../svg-icons/ShareIcon.vue";
import CropperImageUpload from "../cropper/CropperImageUpload.vue";
import login from "~/mixins/login";
import mixins from "vue-typed-mixins";
import UserTypeEnum from "~/models/UserTypeEnum";
import QrcodeShare from "../company-files/Tabs/QrcodeShare.vue";
import ShareFilesModal from "../company-files/Tabs/ShareFilesModal.vue";
import LetterAvatar from "../widgets/LetterAvatar.vue";

export default mixins(login).extend({
  name: "PaidProfileCard",
  components: {
    BarcodeIcon,
    ShareIcon,
    BuildingIcon,
    QrcodeShare,
    ShareFilesModal,
    CropperImageUpload,
    LetterAvatar,
  },
  data() {
    return {
      showQrcode: false,
      showShareCompany: false,
      visibleUploadImageDialog: false,
      dateType:  "MM/DD/YY",
      timeType:  this.$store?.getters?.getTimeFormat,
      dateFormat: [
        { name: "MM/DD/YY", value: "mm/dd/yyyy" },
        { name: "DD/MM/YY", value: "dd/mm/yyyy" },
        { name: "YY/MM/DD", value: "yyyy/mm/dd" },
        { name: "Month D, Yr", value: "mmm dd, yyyy" },
      ],
      timeFormat: ["h:MM TT", "h:MM:ss TT", "h:MM:ss TT Z", "HH:MM:ss"],
    };
  },

  mounted(){
          // dateType: this.$store?.getters?.getDateFormat,
          let newDate = this.dateFormat.filter((item) => item.value === this.$store?.getters?.getDateFormat )
          
          this.dateType = newDate[0].name
  },
  computed: {
    userFullName() {
      return `${this.user?.firstName} ${this.user?.lastName}`;
    },
    profilePhoto() {
      return this.$store.getters.profilePhoto;
    },
    user() {
      return this.$auth.user;
    },
    link() {
      return `${window.origin}/public-profile/${this.$auth.user.id}`;
    },

    userAccount() {
      switch (this.$auth.user.role) {
        case UserTypeEnum.PAID:
          return "PAID ACCOUNT";
        case UserTypeEnum.TEAM:
          return "TEAM ACCOUNT";
      }
    },
    mainUserLink() {
      switch (this.$auth?.user?.role) {
        case UserTypeEnum.PAID:
          return (this.$auth.user || {}).id;

        case UserTypeEnum.TEAM:
          return (this.$auth.user || {}).mainAccountId;
      }
      (this.$auth.user || {}).id;
    },
  },
  methods: {
    onDateFormatSelected(value) {
      this.$store.commit("SET_DATEFORMAT", value.value);
      this.dateType = value.name;
    },
    onTimeFormatSelected(value) {
      this.$store.commit("SET_TIMEFORMAT", value);
      this.timeType = value;
    },
    showQrcodeFunc() {
      this.showQrcode = true;
    },
    showShareCompanyFunc() {
      this.showShareCompany = true;
    },
    PopUpFileInput() {
      try {
        (this.$refs?.profileInput).click();
      } catch (err) {
        // console.log(err);
      }
    },

    async uploadProfilePicture(eventy) {
      let fileInput = event.target;

      if (fileInput.files.length < 1 || fileInput.files[0].size / 1024 / 1024 > 2) {
        this.$notify.error({
          message: "File size must be less than 2MB",
        });
        return;
      }

      let formdata = new FormData();
      formdata.append("upload", fileInput.files[0], "user-profile-picture.jpg");
      formdata.append("type", "profilePicture");
      formdata.append("userId", this.user.id);

      this.$axios
        .$patch(`/files`, formdata)
        .then(() => {
          //@ts-ignore
          this.filterUsers();
        })
        .catch(() => {
          this.$notify.error({
            message: "Unable to upload profile picture",
          });
        });
    },
  },
});
</script>
