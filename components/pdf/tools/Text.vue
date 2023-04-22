<template>
  <div
    class="text-field tool"
  >
    <input
      type="text"
      v-model="text"
      v-if="(isActive || justMounted) && !isCreator && !isBlur"
      :style="style"
      class="input-annotation"
      placeholder="Type here..."
      ref="text_box"
      @blur="setBlur"
    />

    <p v-else ref="textbox" @click="isBlur = false" :textImageContent="svgToImageData" :style="style">{{ text || 'Type here...' }}</p>
    <!-- <span :style="hideStyle" ref="text_hidden">{{ text || 'Type here...' }}</span> -->
  </div>
</template>

<script>
import TeamAccess from '~/models/TeamAccess'

export default {
  props: {
    isActive: Boolean,
    fontSize: Number,
    value: String,
    file: Object,
    justMounted: Boolean,
    tool: Object,
    generatePDF: Boolean,
  },
  data: () => ({
    text: null,
    inputWidth: 0,
    svgToImageData: '',
    isBlur: true
  }),
  created () {
    this.text = this.value;
  },
  mounted(){
    this.$refs.text_box && this.$refs.text_box.focus()
  },
  methods: {
    setBlur(){
      this.$emit('onBlur')
    },
    onBlur: () => {
      console.log("onBlur")
    },
    async svgToImage() {
      this.svgToImageData = '';
      let dataPAz = ''
      await htmlToImage.toPng(this.$refs.textbox)
        .then(function (dataUrl) {
          dataPAz = dataUrl;
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });

      this.svgToImageData = dataPAz
      console.log("dazppp---text",dataPAz)
    },
  },
  watch: {
    generatePDF: function () {
      if (this.generatePDF)
        this.svgToImage()
    },
    value (v) {
      if (this.text != v) this.text = v
    },
    text (v) {
      if (this.value != v) this.$emit('input', v)
      if (this.$refs.text_box && this.$refs.text_hidden) {
        if (!v || v.length === 1) {
          setTimeout(() => {
            const inputWidth = this.$refs.text_hidden.clientWidth
            this.$refs.text_box.style.width = `${inputWidth}px`
            this.inputWidth = inputWidth
          }, 200)
        } else {
          const extra = this.fontSize || 11
          if (v.length < this.value.length) {
            const inputWidth = this.$refs.text_hidden.clientWidth
            this.$refs.text_box.style.width = `${inputWidth}px`
            this.inputWidth = inputWidth
          } else {
            const inputWidth = this.$refs.text_hidden.clientWidth + extra
            this.$refs.text_box.style.width = `${inputWidth}px`
            this.inputWidth = inputWidth
          }
        }
      }
    },
    fontSize() {
      if (this.$refs.text_box && this.$refs.text_hidden) {
        const extra = this.fontSize || 11
        const inputWidth = this.$refs.text_hidden.clientWidth + extra
        this.$refs.text_box.style.width = `${inputWidth}px`
        this.inputWidth = inputWidth
      }
    }
  },
  computed: {
    computedFontsize(){
        return `${(this.fontSize || 12)*(this.tool?.pageScaleX || 1)}px`
    },
    isCreator () {
      return (
        this.file.userId == this.$auth?.user?.id ||
        (this.$auth?.user?.teamAccess == TeamAccess.COMPANY_FILE &&
          this.$auth?.user?.teamId == this.file.userId)
      )
    },
    style () {
      return {
        // fontSize: `${this.fontSize || 11}px`,
        fontSize: this.computedFontsize,
        background: 'transparent'
        // width: `${this.inputWidth}px`
      }
    },
    hideStyle () {
      return {
        fontSize: `${this.fontSize || 11}px`,
        visibility: 'hidden',
        position: 'absolute',
        background: 'transparent'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.input-annotation:focus {
  border:none;
  border-left: 1px solid #5FA348;
  border-bottom: 1px solid #5FA348;
  background: transparent;
}

.input-annotation:blur {
  border: transparent;
}
</style>
