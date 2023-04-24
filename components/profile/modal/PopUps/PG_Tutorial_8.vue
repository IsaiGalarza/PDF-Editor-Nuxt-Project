<template>
  <div>
    <p class="w-full text-center px-3 relative top-[50px] text-white">
      Click here to login and access your Console to manage your Paperlink Pages!
    </p>
    <span class="bottom-[62px] left-[50px] text-white absolute font-bold text-[20px]">Paperlink Console</span>
    <img class="left-[240px] md:top-[400px] z-10 absolute sm:w-48 rotate-[150deg]" src="@/assets/icons/spiral_arrow_white.svg"/>
  </div>
</template>

<script>
import ShareOutlineIcon from '~/components/svg-icons/ShareOutlineIcon.vue';
export default {
  components: {
    ShareOutlineIcon
  }
}
</script>

<style lang="scss" scoped></style>
