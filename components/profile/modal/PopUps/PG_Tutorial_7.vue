<template>
  <div>
    <p class="w-full text-center px-3 relative top-[50px] text-white">
      Your clients can scan QR Code to access your PaperLink Business Page on their own mobile device!
    </p>
    <img class="left-[70px] top-[390px] md:top-[140px] z-10 absolute w-36" src="@/assets/icons/pwa-qrcode.svg"/>
    <img class="left-[240px] md:top-[300px] z-10 absolute sm:w-48 -rotate-[120deg]" src="@/assets/icons/spiral_arrow_white.svg"/>
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
