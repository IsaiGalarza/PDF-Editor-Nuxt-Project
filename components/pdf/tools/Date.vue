<template>
  <div class="tool">
    <p ref="datebox" class="whitespace-nowrap" :textImageContent="svgToImageData" :style="style">{{ value }}</p>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    fontSize: Number,
    value: String,
    generatePDF: Boolean,
    tool: Object,
  },
  data() {
    return {
      svgToImageData: ''
    }
  },
  computed: {
    computedFontSize(){
     return `${(this.fontSize || 12)*(this.tool?.pageScaleX || 1)}px`
    },
    style() {
      return {
        // fontSize: `${this.fontSize || 11}px`,
        fontSize: this.computedFontSize,
      }
    },
  },
  methods: {
    async svgToImage() {
      this.svgToImageData = '';
      let dataPAz = ''
      await htmlToImage.toPng(this.$refs.datebox)
        .then(function (dataUrl) {
          dataPAz = dataUrl;
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });

      this.svgToImageData = dataPAz
    },
  },
  watch: {
    generatePDF: function () {
      if (this.generatePDF)
        this.svgToImage()
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
