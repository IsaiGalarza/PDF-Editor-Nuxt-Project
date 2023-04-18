<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-full mb-8 ">
    <div class=" flex flex-col items-center px-6 mb-8 md:mb-0">
      <p class="text-center text-[#414142] font-[800] text-[20px] mb-12">We look forward to <br /> hearing from you!</p>
      <p class="text-center text-[1rem] mb-16 text-[#8E8E8E] leading-6">
        We strive to make the best Paperlink <br /> for everyone.
        Drop us a note with any <br /> feedback, questions or concerns. <br />
        We’d love to hear from you. Initiate a <br /> chat to talk to us 9am to 5pm PST.
      </p>

      <div class="card-left  flex flex-col items-center justify-center">
        <p class="text-center text-[#414142] font-[800] text-[20px] mb-12">Chat with us</p>
        <p class="text-center text-[1rem] mb-16 text-[#8E8E8E] leading-6">
          Our team is ready to answer any <br /> questions you may have.
        </p>
        <button class="outline-btn">
          INITIATE CHAT
        </button>
      </div>
    </div>
    <div class="px-4 ">
      <div class="card-left py-8 h-full">
        <p class=" text-[#414142] text-[15px] mb-2 mt-4 ">CONTACT</p>
        <p class=" text-[0.9rem] text-[#8E8E8E] mb-2 leading-6">
          We will reply within 24 hours.
        </p>

        <form action="">
          <input type="text" placeholder="NAME" class="contac-input mb-8">
          <input type="text" placeholder="" class="contac-input mb-8">
          <textarea type="text" placeholder="MESSAGE" class="contac-input min-h-[150px]  " />

          <div class="flex mt-4 justify-end">
          <button class="outline-btn-sm text-[#F93120] border-[#F93120] mr-4">
            Clear 
          </button>
          <button class="outline-btn-sm text-white bg-[#77C360]">
            Clear 
          </button>
          </div>
        </form>
        <!-- <button class="outline-btn">
          INITIATE CHAT
        </button> -->
      </div>
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
  @apply min-h-[100px] w-[100%] relative px-6 py-4;
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

.contac-input {
  @apply w-full bg-white h-[60px] rounded-[17px] px-3 py-3;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

}

.contac-input:focus {
  border-color: #E6AF23 !important
}


.outline-btn {
  @apply border-[1px] border-[#E6AF23] py-4 rounded-[50px] font-[800] w-full text-[#E6AF23];
}
.outline-btn-sm {
  @apply border-[1px]  py-2 px-6 rounded-[10px]  ;
}
</style>
