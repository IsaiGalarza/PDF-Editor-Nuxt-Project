<template>
  <div>
    <p class="w-full text-center px-3 relative top-[50px] text-white">
      Click here share your PaperLink Business Page through email, a direct link, or QR Code
    </p>
    <span class="w-[30px] h-[30px] top-[340px] sm:top-[68px] bg-white rounded-md inline-flex justify-center items-center absolute right-[42px]">
        <ShareOutlineIcon color="black"/>
    </span>
    <img class="right-12 top-[390px] sm:top-[50px] md:top-[200px] z-10 absolute w-32 sm:w-48 -rotate-[50deg]" src="@/assets/icons/spiral_arrow_white.svg"/>
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
