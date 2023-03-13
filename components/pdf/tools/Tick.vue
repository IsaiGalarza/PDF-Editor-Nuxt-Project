<template>
  <div class="text-field tool">
    <svg ref="tickbox" :style="style" viewBox="0 0 22 21" fill="black" xmlns="http://www.w3.org/2000/svg">
      <path svgToImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAYAAACMGIOFAAAAAXNSR0IArs4c6QAAAyJJREFUaEPlmuFx1DAUhDcVQAl0AKkAqACoAFIBUAFQAaQCSAWQCoAKAhVAOggVwHwz5xthJGsl63yW0a9LTrb16a3eSu98ov+gnWyU8Y6kpzu28y1CvpX0Igje5dYg30t6NlbnliDfSXoeWX7XW4EkekQx1i62AHlP0tVEAj3tHRLAz5Jup6LIGu0ZEjAAAY21X5KwkpueIZFoChDoJ5I+8aFXyKhVhN4o6fHwd4+QGD2Gn2p7mfYKOWUVA9Nepj1C5jIpTJehTHuDJEuSaFJWAc8/Mu0JMmcVSZn2BIkXPsgcCaMy7QUyZxWTMu0B0smkcLyUxAkk2dbqkxj5x4xE+fqrIeVV7ngcqxhkSt+fuclYWyTJpD8yVjEwZWW6xjXpWoUt0zVCsgb3m+rM3tSS6dogU/WZGKst0zVBulZRLNO1QLKTYUfjNPamRTJNQfLQR8GJm/R8IemLM4rCPq5VFGfT8ThCC5naQgHJOe2mECTVnUzKqYLThdMs00/daIB09ojfJD1sBJqrz4TjrZZpKNeShU9EAZ3TnAkN7/9G0us5DySSVLRYh277IOnM7Tzqx2BfFVz7PVORs24F5G+r59+dama3RDHD004lsUxmtVpIHko0iarTcqX82D1qJjI6FiCZqbvOSCN9WJ85eym1Ch7TRKZh4ildJyErlgJoSlIlm+7wvk1kGkIyEKJRG01AGVTsXOfUZ8YCaSbTEJLPSArQW5WyjXloqVU0l+kYshUoEaXlSvmpuWwq0xgk/6tJ8+GAybZswVK/+k4JpblMU5AtQGsU3zSbjgeQqvEQkeE9mJpBl15zEJlORXL4binQg8nUgZxrLU40r3eZvdURLvrMXEny0KDOjsmZrMk+OUgu5mCLD9Z6aGoA56PXw2bDpG7gQLbw0PHzF5GpsybHA3N/n3AisohMayBbeehiMq2F5LqSQvBRZToHkmtrPXRRmc6F5HpOLfedBbjrs7hMW0CWeOii2dTdu7oBckCpm1KZn12QcgfVGpL7AcoajZU1OV1wfDsaIAN0NwPOJFJdIGLDC0XUc48K12JNOuCr6PMH4NmYqXAqaIYAAAAASUVORK5CYII=" options="fill"
        d="M8.7883 20.5956C9.4535 21.2689 10.9351 21.0457 11.0946 19.987C12.0871 13.4143 17.0534 7.8694 20.8116 2.64442C21.8536 1.19652 19.4576 -0.178944 18.4291 1.25172C14.9947 6.02588 10.6661 11.0495 8.97269 16.8427C7.03751 14.865 5.09452 12.9061 2.92406 11.1682C1.5495 10.0672 -0.416737 12.0069 0.972637 13.1195C3.80049 15.3846 6.2443 18.0259 8.7883 20.5956Z"
        fill="black" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    scale: Number,
    generatePDF: Boolean,
    tool: Object,
  },
  data() {
    return {
      svgToImageData: ''
    }
  },
  watch: {
    // generatePDF: function () {
    //   if (this.generatePDF)
    //     this.svgToImage()
    // },
  },
  computed: {
    style() {
      return {
        // width: `${(this.scale || 1) * 11}px`,
        // height: `${(this.scale || 1) * 11}px`,
        width: `${(this.tool?.pageScaleX || 1) * 11}px`,
        height: `${(this.tool?.pageScaleY || 1) * 11}px`,
      }
    },
  },
  methods: {
    async svgToImage() {
      this.svgToImageData = '';
      let dataPAz = ''
      await htmlToImage.toPng(this.$refs.tickbox)
        .then(function (dataUrl) {
          dataPAz = dataUrl;
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });

      this.svgToImageData = dataPAz
    },
  }
}
</script>

<style lang="scss" scoped>
input {
  border: 0.5px solid #e9e9e9;
  background-color: transparent;
  border-radius: 4px;
}
</style>
