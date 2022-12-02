<template>
  <svg preserveAspectRatio="none" :viewBox="viewBox" class="svg_element" ref="drawBox" :style="style">
    <path :svgToImage="svgToImageData" options="draw" :x="x1" :y="y1" :d="d" stroke="#000" fill="none"></path>
  </svg>
</template>

<script>
export default {
  props: {
    tool: Object,
    points: Array,
    showPublishModal: Boolean,
    generatePDF: Boolean
  },
  data() {
    return {
      svgToImageData: ''
    }
  },
  mounted() {
  },
  watch: {
    generatePDF: function () {
      if (this.generatePDF)
        this.svgToImage()
    },
  },
  methods: {
    async svgToImage() {
      this.svgToImageData = '';
      let dataPAz = '';
      await htmlToImage.toPng(this.$refs.drawBox)
        .then(function (dataUrl) {
          dataPAz = dataUrl;
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });

      this.svgToImageData = dataPAz
    },
  },

  computed: {
    d() {
      let l = this.points
        .map((p, i) => (i % 2 == 0 ? `L${p},` : `${p}`))
        .join(' ')
      return `M${this.points[0]},${this.points[1]}${l}`
    },
    style() {
      return {
        width: `${this.width}px`,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
      }
    },
    x1() {
      return Math.min(...this.points.filter((v, i) => i % 2 == 0))
    },
    y1() {
      return Math.min(...this.points.filter((v, i) => i % 2 == 1))
    },
    x2() {
      return Math.max(...this.points.filter((v, i) => i % 2 == 0))
    },
    y2() {
      return Math.max(...this.points.filter((v, i) => i % 2 == 1))
    },
    viewBox() {
      let x1 = Math.min(this.x1, this.x2)
      let y1 = Math.min(this.y1, this.y2) //Math.min(this.y1, this.y2) : Math.max(this.y1, this.y2)
      return `${x1 - 1.5} ${y1 - 1.5} ${this.width + 2} ${this.height + 2}`
    },
    width() {
      return Math.abs(this.x2 - this.x1)
    },
    height() {
      return Math.abs(this.y2 - this.y1)
    },
  },
}
</script>

