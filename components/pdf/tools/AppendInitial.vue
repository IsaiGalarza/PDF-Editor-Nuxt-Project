<template>
  <div>
    <img
    v-if="completed"
    class="absolute-image"
    :src="completedImgData"
    :style="style"
  />
    <img
      v-if="!initialimgDisplay  && isCreator"
      src="../../../assets/img/initial-icon.png"
      attr="initial"
      :elemFill="uploaded && initialimgDisplay"
      :uploaded="uploaded"
      @click="selectIsCreatorDisplay"
      ref="annotbutton"
      class="annot-button"
      :class="[
        $auth.loggedIn && !initialimgDisplay && !isCreator ? 'pulse' : ' ',
        isAgreedSign !== 1 && isSign ? 'pointer-events-none' : '',
      ]"
      :width="(tool?.pageScaleY || 1) * 18"
    />

    <img
    v-if="!initialimgDisplay  && !isCreator && !tool.justMounted"
    src="../../../assets/img/initial-icon.png"
    attr="initial"
    :elemFill="uploaded && initialimgDisplay"
    :uploaded="uploaded"
    @click="selectIsCreatorDisplay"
    ref="annotbutton"
    class="annot-button"
    :class="[
      $auth.loggedIn && !initialimgDisplay && !isCreator ? 'pulse' : ' ',
      isAgreedSign !== 1 && isSign ? 'pointer-events-none' : '',
    ]"
    :width="(tool?.pageScaleY || 1) * 18"
  />
  
    <img
      v-else-if="theInitial"
      class="absolute-image"
      :src="theInitial"
      :style="style"
    />
    <span v-show="!initialimgDisplay  && !isCreator && !tool.justMounted" class="toolTip hidden">Initial</span>
    <!-- <img v-else class="absolute-image" src="../../../assets/img/initials.png" /> -->
  </div>
</template>

<script>
import AddToPageDrawOrType from '~/components/modals/AddToPageDrawOrType.vue'
import SaveSignatureInitialsMixin from '~/mixins/SaveSignatureInitialsMixin'
import mixins from 'vue-typed-mixins'
import TeamAccess from '~/models/TeamAccess'
import { mapState } from 'vuex'
import DrawOrTypeModal from '~/components/modals/DrawOrTypeModal.vue'
import FileAction from '~/models/FileAction'

export default mixins(SaveSignatureInitialsMixin).extend({
  props: {
    scale: Number,
    file: Object,
    completed: String,
    setInitialSignType: Function,
    tool: Object,
  },
  computed: {
    ...mapState(['loadedPdfFile']),
    isCreator() {
      if(!this.$auth?.user?.id) return false
      return (
        this.$auth?.user?.id == this.file?.userId ||
        (this.$auth?.user?.teamAccess == TeamAccess.COMPANY_FILE &&
          this.$auth?.user?.teamId == this.file.userId)
      )
    },
    isOwner(){
       return this.file.userId == this.$auth?.user?.id  
    },
    theInitial(){
       return this.$store.getters?.getUserInitial || this.initial
    },
    isSign() {
      return String(this.file.fileAction).toLowerCase() === FileAction.SIGNED
    },
    isAgreedSign() {
      return this.$store.state.agreeSign
    },
    isComplete() {
      return String(this.file.fileAction).toLowerCase() === FileAction.COMPLETE
    },
    uploaded() {
      switch (this.$auth.loggedIn) {
        case true:
          return this.$auth?.user?.initialURL !== null && !this.isCreator
        case false:
          return false
      }
    },
    style() {
      return {
        width: 'auto',
        // height: `${(this.scale || 1) * 20}px`,
        height: `${(this.tool?.pageScaleY || 1) * 20}px`,
      }
    },
  },
  data() {
    return {
      showInitialModal: false,
      initial: null,
      initialimgDisplay: false,
      completedImgData: null,
      isFirstAction: false
    }
  },
  components: { AddToPageDrawOrType, DrawOrTypeModal },
  methods: {
    checkToolIndex(){
       let bl = document.querySelectorAll('.annot-button')
      Array.from(bl).forEach((element, index) => {
        element == this.$refs.annotbutton && index == 0 && (this.isFirstAction = true)
      });
    },
    selectIsCreatorDisplay(){
      !this.isCreator ? this.setInitialImgDisplay() : null
    },
    popUpIfNoinitial(){
      !this.theInitial && !this.isCreator && this.setInitialSignType('initial')
    },
    changeInitialToBase64(com) {
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
        this.$auth?.user?.initialURL && toDataURL(com).then((dataUrl) => {
          this.completedImgData = dataUrl
        })
      }
      this.$auth?.user?.initialURL && toDataURL(this.$auth?.user?.initialURL).then((dataUrl) => {
        this.initial = dataUrl
        console.log("alert",this.initial)
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
    popInitial() {
      !this.isCreator && (this.initialimgDisplay = true)
      if (this.isCreator || !this.$auth.loggedIn) return
      if (!this.uploaded) this.showInitialModal = true
    },
    setInitialImgDisplay() {
      if(!this.$auth.loggedIn && !this.$store.getters.getFillAsGuest) return
      !this.isOwner && (this.initialimgDisplay = true)
      this.$BUS.$emit('scrollToSignInitial', 'appendinitial')
      !this.uploaded && !this.theInitial && this.setInitialSignType('initial')
    },
  },
  mounted() {
    console.log(this.$store.state.agreeSign)
    this.changeInitialToBase64()
    this.completed && this.changeInitialToBase64(this.completed)
    !this.initialimgDisplay && !this.isCreator && this.tool.justMounted ? this.popUpIfNoinitial() : null;
    this.checkToolIndex()
  },
  watch: {
    theInitial(){
      this.$BUS.$emit('scroll-to-tools')
    },
    '$auth.user.initialURL': async function () {
      this.changeInitialToBase64()
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
