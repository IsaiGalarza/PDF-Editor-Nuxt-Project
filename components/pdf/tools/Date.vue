<template>
  <div class="tool">
    <p :style="style">{{ value }}</p>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    fontSize: Number,
    value: String,
    tool: Object,
  },
  computed: {
    style() {
      return {
        // fontSize: `${this.fontSize || 11}px`,
        fontSize: `${(this.fontSize || 11)*(this.tool?.pageScaleX || 1)}px`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
