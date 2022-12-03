<template>
  <div class="tool">
    <svg ref="crossbox" :style="style" viewBox="0 0 19 19" fill="black" xmlns="http://www.w3.org/2000/svg">
      <path svgToImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAL1JREFUOE+Nk1ENwkAQRF8VgJQ6gDoAB8UBKAEH1AE4ABwgBRyQabrJZrvX4z6be7NzM9sGWAM34AS8qZ8WOAP7BngCG+ADdBUBgY9p4EuwPkhgVRHw4BfYCtapCcxAOTR4SSAFBXg4E1CICkehjlZ9JhGOApb9DMwm2+UeuLrWDsAQWyxNtjrsflpj9mYDZfUIXEo1xrQ9aOEUa/Q9Z6DZTgVsw5bAooDf7bSOkLB3MO62FuA+hfPvX6UQdz/xZ0QQerIQiQAAAABJRU5ErkJggg==" options="fill"
        d="M19 17.0864L17.0864 19L9.5 11.4136L1.91357 19L0 17.0864L7.58643 9.5L0 1.91357L1.91357 0L9.5 7.58643L17.0864 0L19 1.91357L11.4136 9.5L19 17.0864Z"
        fill="black" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    scale: Number,
    generatePDF: Boolean,
  },
  computed: {
    style() {
      return {
        width: `${(this.scale || 1) * 12}px`,
        height: `${(this.scale || 1) * 12}px`,
      }
    },
  },
  // watch: {
  //   generatePDF: function () {
  //     if (this.generatePDF)
  //       this.svgToImage()
  //   },
  // },
  data() {
    return {
      svgToImageData: ''
    }
  },
  methods: {
    async svgToImage() {
      this.svgToImageData = '';
      let dataPAz = ''
      await htmlToImage.toPng(this.$refs.crossbox)
        .then(function (dataUrl) {
          dataPAz = dataUrl;
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });

      this.svgToImageData = dataPAz
      // console.log('gggggggggggggggggg',  this.svgToImageData)
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
