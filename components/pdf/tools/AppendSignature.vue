<template>
  <div>
    <img
    v-if="completed"
    :src="completedImgData"
    class="absolute-image"
    :width="`${55 * responsiveToolDim.width}px`"
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
        $auth.loggedIn && !initialimgDisplay && !isCreator ? 'puls' : ' ',
        isAgreedSign !== 1 && isSign ? 'pointer-events-none' : '',
      ]"
      :width="`${(tool?.pageScaleY || 1) * 18 * responsiveToolDim.width}px`"
    />
    <img
      v-else-if="!initialimgDisplay && !isCreator && !tool.justMounted"
      src="../../../assets/img/sign_tag.svg"
      attr="sign"
      :elemFill="uploaded && initialimgDisplay"
      :uploaded="uploaded"
      @click="selectIsCreatorDisplay"
      class="annot-button"
      ref="annotbutton"
      :class="[
        $auth.loggedIn && !initialimgDisplay && !isCreator ? 'puls' : ' ',
        isAgreedSign !== 1 && isSign ? 'pointer-events-none' : '',
      ]"
      :width="`${30 * responsiveToolDim.width}px`"
    />
    <img
      v-else-if="theSignature"
      :src="theSignature"
      :width="`${55 * responsiveToolDim.width}px`"
      :style="`height: ${27 * responsiveToolDim.height}px; object-fit:contain`"
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
    isCreator: Boolean,
    responsiveDim: Object,
    responsiveToolDim: Object
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
    console.log(this.isCreator, this.tool.justMounted, this.initialimgDisplay)
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
       return this.$store.getters?.getUserSignature 
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
    style() {
      return {
        width: `${70 * this.responsiveDim.width}px`,
        // height: `${((this.scale || 1) * 20)}px`,
        height: `${((this.tool?.pageScaleY || 1) * 20)  * this.responsiveDim.height}px`,
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
       this.setInitialImgDisplay() 
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
      // if(!this.$auth.loggedIn && !this.$store.getters?.getFillAsGuest) return
      this.initialimgDisplay = true
      !this.theSignature && this.setInitialSignType('sign')
    },
  },
  components: { DrawOrTypeModal },
  watch: {
    initialimgDisplay(){
      if(this.theSignature) setTimeout(() => {
        !this.isComplete && this.$BUS.$emit('scroll-to-tools')
      }, 100);
    },
    theSignature(){
      !this.isComplete && this.$BUS.$emit('scroll-to-tools')
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
