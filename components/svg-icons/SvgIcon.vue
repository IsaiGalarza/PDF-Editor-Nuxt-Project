<template>
  <component :is="icon" />
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SvgIcon',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    icon() {
      const v = this.value
      console.log(">>>>>",v)
      return () => import(`./${v}.vue`)
    },
  },
})
</script>
