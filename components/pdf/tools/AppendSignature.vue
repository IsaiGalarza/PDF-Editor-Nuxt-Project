<template>
  <div>
    <img
    v-if="completed"
    class="absolute-image"
    :src="completedImgData"
    :style="style"
  />
    <img
      v-else-if="!initialimgDisplay && isCreator"
      src="../../../assets/img/sign-icon.png"
      attr="sign"
      :elemFill="uploaded && initialimgDisplay"
      :uploaded="uploaded"
      class="annot-button"
      ref="annotbutton"
      :class="[
        $auth.loggedIn && !initialimgDisplay && !isCreator ? 'pulse' : ' ',
        isAgreedSign !== 1 && isSign ? 'pointer-events-none' : '',
      ]"
      :width="(tool?.pageScaleY || 1) * 18"
    />
    <img
      v-else-if="!initialimgDisplay && !isCreator && !tool.justMounted"
      src="../../../assets/img/sign_tag.svg"
      attr="sign"
      :elemFill="uploaded && initialimgDisplay"
      :uploaded="uploaded"
      @click="selectIsCreatorDisplay"
      class="annot-button w-[30px]"
      ref="annotbutton"
      :class="[
        $auth.loggedIn && !initialimgDisplay && !isCreator ? 'pulse' : ' ',
        isAgreedSign !== 1 && isSign ? 'pointer-events-none' : '',
      ]"
    />
    <img
      v-else-if="theSignature"
      class="absolute-image"
      :src="theSignature"
      :style="style"
    />
    <!-- <span v-show="!initialimgDisplay && !isCreator && !tool.justMounted && (isAgreedSign == 1 && isSign || isComplete)" class="toolTip hidden">Sign</span> -->
    <!-- <img v-else class="absolute-image" src="../../../assets/img/sign.png" /> -->
  </div>
</template>

<script>
import DrawOrTypeModal from '~/components/modals/DrawOrTypeModal.vue'
import SaveSignatureInitialsMixin from '~/mixins/SaveSignatureInitialsMixin'
import mixins from 'vue-typed-mixins'
import TeamAccess from '~/models/TeamAccess'
import { mapState } from 'vuex'
import FileAction from '~/models/FileAction'

export default mixins(SaveSignatureInitialsMixin).extend({
  props: {
    scale: Number,
    file: Object,
    completed: String,
    setInitialSignType: Function,
    tool: Object,
  },
  data() {
    return {
      showSignatureModal: false,
      signature: null,
      initialimgDisplay: false,
      completedImgData: null,
    }
  },
  mounted() {
    this.changeSignToBase64()
    this.completed && this.changeSignToBase64(this.completed)
    !this.initialimgDisplay && !this.isCreator && this.tool.justMounted ? this.popUpIfNoSign() : null
    // this.checkToolIndex()
  },
  computed: {
    ...mapState(['loadedPdfFile']),
    uploaded() {
      switch (this.$auth.loggedIn) {
        case true:
          return this.$auth?.user?.signatureURL !== null && !this.isCreator

        case false:
          return false
      }
    },
    isOwner(){
       return this.file.userId == this.$auth?.user?.id  
    },
    theSignature(){
       return this.$store.getters?.getUserSignature || this.signature || this.$auth?.user?.signatureURL
    },
    isSign() {
      return String(this.file.fileAction).toLowerCase() === FileAction.SIGNED
    },
    isComplete() {
      return String(this.file.fileAction).toLowerCase() === FileAction.COMPLETE
    },
    isAgreedSign() {
      return this.$store.state.agreeSign
    },
    isCreator() {
      if(!this.$auth?.user?.id) return false
      return (
        this.$auth?.user?.id == this.file?.userId ||
        (this.$auth?.user?.teamAccess == TeamAccess.COMPANY_FILE &&
          this.$auth?.user?.teamId == this.file.userId)
      )
    },
    style() {
      return {
        width: 'auto',
        // height: `${((this.scale || 1) * 20)}px`,
        height: `${(this.tool?.pageScaleY || 1) * 20}px`,
      }
    },
  },
  updated() {
    this.checkToolIndex()
  },
  methods: {
    checkToolIndex(){
       let bl = document.querySelectorAll('.annot-button')
       console.log(bl.length)
      Array.from(bl).forEach((element, index) => {
        element == this.$refs.annotbutton && index == 0 && (console.log("sig",index))
      });
    },
    selectIsCreatorDisplay(){
      !this.isCreator ? this.setInitialImgDisplay() : null
      // this.theSignature && setTimeout(() => {
      //   this.$BUS.$emit('scroll-to-tools')
      // }, 200);
    },
    popUpIfNoSign(){
      !this.theSignature && !this.isCreator && this.setInitialSignType('sign')
    },
    changeSignToBase64(com) {
      const toDataURL = (url) =>
        fetch(url)
          .then((response) => response.blob())
          .then(
            (blob) =>
              new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onloadend = () => resolve(reader.result)
                reader.onerror = reject
                reader.readAsDataURL(blob)
              })
          )
      if (com) {
        this.$auth?.user?.signatureURL && toDataURL(com).then((dataUrl) => {
          this.completedImgData = dataUrl
        })
      }
      this.$auth?.user?.signatureURL && toDataURL(this.$auth?.user?.signatureURL).then((dataUrl) => {
        this.signature = dataUrl
      })
    },
    imageExportedLocal(image, isSignature) {
      this.$BUS.$emit(
        isSignature ? 'signature-update' : 'initials-update',
        image
      )
      this.imageExported(image, isSignature)
      // this.uploaded = true
    },
    popSign() {
      !this.isCreator && (this.initialimgDisplay = true)

      if (this.isCreator || !this.$auth.loggedIn) return
      if (!this.uploaded) this.showSignatureModal = true
    },
    setInitialImgDisplay() {
      if(!this.$auth.loggedIn && !this.$store.getters?.getFillAsGuest) return
      !this.isOwner && (this.initialimgDisplay = true)
      this.$BUS.$emit('scrollToSignInitial', 'appendsign')
      !this.uploaded &&  !this.theSignature && this.setInitialSignType('sign')
    },
  },
  components: { DrawOrTypeModal },
  watch: {
    initialimgDisplay(){
      if(this.theSignature) setTimeout(() => {
        this.$BUS.$emit('scroll-to-tools')
      }, 100);
    },
    theSignature(){
      this.$BUS.$emit('scroll-to-tools')
    },
    '$auth.user.signatureURL': async function () {
      this.changeSignToBase64()
    },
  },
})
</script>

<style scoped>
.absolute-image {
  transition: 0.25s;
  max-width: 200px;
  width: 70px;
  height: auto;
  @apply absolute top-0 left-[5%] opacity-100;
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
