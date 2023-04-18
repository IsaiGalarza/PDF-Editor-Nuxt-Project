<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-full ">

    <div class=" flex flex-col items-center px-6 ">
      <p class="text-center text-[#414142] font-[800] text-[20px] mb-12">We look forward to <br /> hearing from you!</p>
      <p class="text-center text-[1rem] mb-16 text-[#8E8E8E] leading-6">
        We strive to make the best Paperlink <br /> for everyone.
        Drop us a note with any <br /> feedback, questions or concerns. <br />
        We’d love to hear from you. Initiate a <br /> chat to talk to us 9am to 5pm PST.
      </p>

      <div class="card-left">
        <p class="text-center text-[#414142] font-[800] text-[20px] mb-12">Chat with us</p>
        <p class="text-center text-[1rem] mb-16 text-[#8E8E8E] leading-6">
          Our team is ready to answer any <br /> questions you may have.
        </p>
        <button class="outline-btn">
          INITIATE CHAT
        </button>
      </div>
    </div>
    <div class="bg-blue-400">
    </div>


  </div>
</template>

<script>

import BillingDetails from '~/components/billing/BillingDetails.vue'
import SelectCustomBillingPackage from '~/components/billing/SelectCustomBillingPackage.vue'

export default {
  name: 'billing',
  layout: 'dashboard',
  components: { BillingDetails, SelectCustomBillingPackage },
  data() {
    return {

    }
  },

}
</script>

<style lang="scss" scoped>
.card-left {
  @apply min-h-[100px] w-[100%] relative px-6 py-4 flex flex-col items-center justify-center;
  box-shadow: 0px 8.66781px 15.6021px 8.66781px rgba(0, 0, 0, 0.25);

  &::after {
    content: '';
    position: absolute;
    height: 8px;
    width: 100%;
    top: 0;
    left: 0;
    background: #E6AF23;
  }

}

.outline-btn {
  @apply border-[1px] border-[#E6AF23] py-4 rounded-[50px] font-[800] w-full text-[#E6AF23];

}
</style>
