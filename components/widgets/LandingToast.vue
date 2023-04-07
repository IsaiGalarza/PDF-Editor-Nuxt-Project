<template>
  <div
    v-if="$store.getters.getToast.active"
    @click="removePopUp"
    ref="wrapper"
    class="fixed z-[99999] bg-black/30 backdrop-blur-sm top-0 left-0 w-[100vw] h-[100vh] justify-center flex pt-8 items-start"
  >
    <div
      class=" top-3 py-3 w-[80%] sm:w-[60%] md:w-[40%] px-5 text-center z-50 rounded transform duration-300 h-auto"
      :class="[ $store.getters.getToast.msg_bg ? `${$store.getters.getToast.msg_bg} text-white` : 'bg-white text-black']"
    >
      <span v-html="$store.getters.getToast.msg"></span>
    </div>
  </div>
</template>

<script>
import mixins from 'vue-typed-mixins'
import GlobalMixin from '~/mixins/GlobalMixin'

export default mixins(GlobalMixin).extend({
  methods: {
    removePopUp(event) {
      event.target == this.$refs.wrapper &&
        this.toggleToast({
          active: false,
          msg: ``,
        })
    },
  },
})
</script>

<style lang="scss" scoped></style>
