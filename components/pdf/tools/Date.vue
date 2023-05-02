<template>
  <div class="tool">
    <p ref="datebox"
    :initialFontSize="initialFontSize"
    :height="initialFontSize * 1.5"
    :scalefactor="responsiveToolDim.width"
    class="whitespace-nowrap" :textImageContent="svgToImageData" :style="style">{{ value }}</p>
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
    responsiveToolDim: Object,
  },
  data() {
    return {
      svgToImageData: ''
    }
  },
  computed: {
    initialFontSize(){
       return (this.fontSize || 12)*(this.tool?.pageScaleX || 1) 
    },
    computedFontSize(){
     return `${(this.fontSize || 12)*(this.tool?.pageScaleX || 1) * this.responsiveToolDim.width}px`
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
