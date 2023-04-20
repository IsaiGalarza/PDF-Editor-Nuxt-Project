<template>
  <div
    class="text-field tool annot-button"
    @click="confirmStarAction"
    attr="star"
    :elemFill="confirmStar"
  >
  <!-- <span v-if="isFirstAction && $store.state.agreeSign == 1" class="toolTip"
  >Sign</span
> -->
    <svg
      v-if="confirmStar"
      :style="style"
      viewBox="0 0 37 36"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        options="fill"
        d="M36.9676 13.9046C36.8894 13.6713 36.6821 13.5012 36.4324 13.4658L24.4516 11.7717L19.0937 1.20887C18.9825 0.988492 18.752 0.849304 18.5003 0.849304C18.2487 0.849304 18.0175 0.988492 17.9069 1.20887L12.5484 11.7723L0.567584 13.4664C0.317902 13.5019 0.111268 13.6713 0.0324561 13.9052C-0.0450315 14.1379 0.0192104 14.3943 0.200015 14.5651L8.87002 22.7875L6.82289 34.3981C6.7805 34.6397 6.88249 34.8839 7.08582 35.0283C7.29046 35.1739 7.56134 35.1926 7.7832 35.0772L18.5003 29.5961L29.2161 35.0772C29.3128 35.1269 29.4195 35.1513 29.5248 35.1513C29.6619 35.1513 29.7983 35.1101 29.9142 35.0283C30.1182 34.8839 30.2202 34.6397 30.1771 34.3981L28.1307 22.7881L36.8007 14.5651C36.9808 14.393 37.0457 14.1372 36.9676 13.9046Z"
        fill="#84C870"
      />
    </svg>
    <!-- <svg v-if="!confirmStar" :style="style" viewBox="0 0 37 36" fill="black" xmlns="http://www.w3.org/2000/svg" @mouseover="overHandler" @mouseleave="leaveHandler">
      <path options="fill"
        d="M36.9676 13.9046C36.8894 13.6713 36.6821 13.5012 36.4324 13.4658L24.4516 11.7717L19.0937 1.20887C18.9825 0.988492 18.752 0.849304 18.5003 0.849304C18.2487 0.849304 18.0175 0.988492 17.9069 1.20887L12.5484 11.7723L0.567584 13.4664C0.317902 13.5019 0.111268 13.6713 0.0324561 13.9052C-0.0450315 14.1379 0.0192104 14.3943 0.200015 14.5651L8.87002 22.7875L6.82289 34.3981C6.7805 34.6397 6.88249 34.8839 7.08582 35.0283C7.29046 35.1739 7.56134 35.1926 7.7832 35.0772L18.5003 29.5961L29.2161 35.0772C29.3128 35.1269 29.4195 35.1513 29.5248 35.1513C29.6619 35.1513 29.7983 35.1101 29.9142 35.0283C30.1182 34.8839 30.2202 34.6397 30.1771 34.3981L28.1307 22.7881L36.8007 14.5651C36.9808 14.393 37.0457 14.1372 36.9676 13.9046Z"
        fill="#FFCF27" />
    </svg> -->
    <img
      v-if="!confirmStar"
      style="width: 18px"
      src="../../../assets/img/require-icon.png"
    />
    <!-- <div v-if="!isCreator && isModalActive && !confirmStar"
      class="w-[240px] h-[26px] z-10 bg-white rounded-[12px] text-[12px] absolute border-[2px] border-[#84C870] px-2 ml-[-16px] mt-[-50px]">
      Click on star when this line is completed.</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalActive: false,
      confirmStar: false,
      isFirstAction: false,
      isActionIndex: null
    }
  },
  props: {
    scale: Number,
    file: { type: Object, required: true },
  },
  mounted() {
    this.checkToolIndex()
  },
  computed: {
    style() {
      return {
        width: `${(this.scale || 1) * 18}px`,
        height: `${(this.scale || 1) * 24}px`,
      }
    },
    notBtn() {
      return this.notClass
    },
    isCreator() {
      try {
        return (
          this.file.userId == this.$auth?.user?.id ||
          (this.$auth?.user?.teamAccess == TeamAccess.COMPANY_FILE &&
            this.$auth?.user?.teamId == this.file.userId)
        )
      } catch (e) {
        return false
      }
    },
  },
  methods: {
    checkToolIndex(){
       let bl = document.querySelectorAll('.annot-button')
      Array.from(bl).forEach((element, index) => {
        element == this.$refs.annotbutton &&
          index == 0 &&
          (this.isFirstAction = true) &&
          (this.isActionIndex = index)
      });
    },
    overHandler: function () {
      this.isModalActive = true
    },
    leaveHandler: function () {
      this.isModalActive = false
    },
    confirmStarAction() {
      if(!this.$auth.loggedIn && !this.$store.getters.getFillAsGuest) return ;
      this.$store.commit('CLICK_TOOL_ACTION', this.isActionIndex)
      !this.isCreator && (this.confirmStar = true)
      this.$BUS.$emit('scrollToSignInitial')
      this.notClass = ''
      setTimeout(() => {
        this.$BUS.$emit('scroll-to-tools')
      }, 200);
    },
  },
  watch: {
    confirmStar(){
      this.$BUS.$emit('scroll-to-tools')
    },
    "$store.getters.getClickAction"(){
      this.checkToolIndex()
  },
  },
}
</script>

<style lang="scss" scoped>
input {
  border: 0.5px solid #e9e9e9;
  background-color: transparent;
  border-radius: 4px;
}
.toolTip{
  position: absolute;
  left: 100%;
  bottom: calc(100% - 4px);
  background-color: yellow;
  border-radius: 2px;
  font-size: 10px;
  color:red;
  font-weight: 600;
  padding: 3px 6px;
  padding-bottom: 8px;
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 19% 75%, 0 99%, 0% 75%);
}
</style>
