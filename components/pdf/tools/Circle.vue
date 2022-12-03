<template>
  <div class="tool">
   <svg 
   ref="circlebox"
   :style="style" version="1.1" :scale="scale" viewBox="0 0 20 20" fill="black">
   <path
    svgToImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAO9JREFUOE+lk+ENAUEQhb+rgA5QgdMBFaACdKADVEAHqIAO6AAVoAMqIF+yd9kjl5yYX7vZeW/mzbxN+I4x0Ae6QB14AEdgD2zj9CS6NIEdkAL3kCxQggHQAM7AELiJy8ACT+E+BTYlHa2AF9CRIAPLKIGtei4Lu1LCVQLBalwDk5KKn0R5vmAHIaOVq4aaz4IdihrVWjXUPhLsABbAvCoy5M7+qTzONLeB1g+Vc81/TduC7lYH9Srs+RAcmMYOk8DhOfWCh4McO1wGF7ra3GG+u2d3rn41eY697fsl+Lzg7XhWVvAjaNUa8Ix+VcHzb/ouOw6BPGVjAAAAAElFTkSuQmCC"
    options="fill" d="M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C14.4,2 18,5.6 18,10 C18,14.4 14.4,18 10,18 L10,18 Z" id="Shape"/>
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
  data() {
    return {
      svgToImageData:''
    }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped></style>
