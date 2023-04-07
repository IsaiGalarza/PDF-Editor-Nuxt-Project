<template>
  <section class="bg-paperdazgreen-300 pt-10">
     <div class="flex flex-wrap p-3 justify-around items-center">
      <div class="w-full sm:w-6/12 md:w-5/12">
        <p class="font-bold text-xl text-white">Account Information</p>
        <span class="text-xs mb-6 text-white">Enter the required information to continue</span>
        <div>
          <input :disabled="loading" class="my-3 rounded text-input" placeholder="Business name" required v-model="business_name" />
          <input :disabled="loading" class="my-3 text-input" placeholder="Contact name" required v-model="business_name" />
          <input :disabled="loading" class="my-3 text-input" placeholder="Email address" required v-model="business_name" />
          <input :disabled="loading" class="my-3 text-input" placeholder="Contact number" required v-model="business_name" />
        </div>
     </div>
     
     <div class="w-full sm:w-6/12 md:w-5/12 bg-white rounded shadow-lg">
       <div class="w-full p-3">
        <form class="" @submit="submit">
          <div class="form-group group-label">
            <label>Total due</label>
            <label class="text-xl" for="">$ 115/ <abbr class="text-xs">yearly</abbr> </label>
          </div>
          <div class="h-[1px] bg-gray-300"></div>
          <div class="h-4"></div>
          <div class="grid mb-10">
            <label class=" font-bold flex items-center justify-between" for="">
              Credit Card
              <img class="float-right inline w-[134px]" src="~/assets/img/payment.png" />
            </label>
          </div>
          <!-- <message-alert-widget class="mb-7" :message="errorMessage" v-if="errorMessage" :type="'error'" /> -->

          <div class="form-group mb-3">
            <label class="input-label" for="">Name of card holder</label>
            <el-input  placeholder="Name Surname" required v-model="name" />
          </div>
          <div class="form-group mb-3">
            <label class="input-label" for="">Card Number</label>
            <el-input  placeholder="0000-0000-0000-0000" :value="cardNumberWithDashes"
              @input="inputCardNumber" required />
          </div>
          <div class="grid gap-5 grid-cols-2">
            <div class="form-group">
              <label class="input-label" for="">Expiration Date</label>
              <el-input :disabled="loading" placeholder="MM/YY" required :value="expirationDateWithSlashes"
                @input="inputExpirationDate" />
            </div>
            <div class="form-group">
              <label class="input-label" for="">CVC</label>
              <el-input :disabled="loading" placeholder="000" required v-model="cvv" type="password" maxlength="3" />
            </div>
          </div>
        </form>
      </div>
   </div>

   <div class="w-full flex justify-center mt-12">
    <button class="w-[50%] sm:w-[350px] py-2 text-center bg-white rounded">Next</button>
  </div>
   
     </div>
  </section>
</template>

<script>
import Vue from 'vue'



export default Vue.extend({
  name: 'RegisterPage',
  auth: false,
  layout: 'landing',
  data() {
    return {
      loading: false,
      errorMessage: '',
      cardNumberWithDashes: '',
      name: '',
      cvv: '',
      cardId: undefined,
      expirationDateWithSlashes: '',
      companyName: '',
      business_name: ""
    }
  },
  computed: {
    // cardNumber() {
    //   return this.cardNumberWithDashes.replace(/-+/g, '')
    // },
    // expirationDateString() {
    //   return this.expirationDateWithSlashes.split('/').join('') || ''
    // },
    // expYear() {
    //   return this.expirationDateString.split('').splice(2, 4).join('')
    // },
    // expMonth() {
    //   return this.expirationDateString.split('').splice(0, 2).join('')
    // },
  },
  methods: {
    // inputCardNumber(val) {

    //   if (val.length > 19) return;
    //   let temp = val.replace(/(-+)|([^0-9]+)/g, '')
    //   this.cardNumberWithDashes = (temp.match(/.{1,4}/g) || []).join('-')
    // },
    // inputExpirationDate(val) {
    //   let temp = val.replace(/\/+|[^0-9]+/g, '')
    //   if (temp.length > 4) return

    //   // Check if the month is greater than 12
    //   if (temp.length === 2) {
    //     if (Number(temp) > 12) temp = '0' + temp
    //     if (Number(temp) == 0) temp = '01'
    //   }

    //   if (temp.length == 4 && Number(temp.substring(2, 4)) == 0) {
    //     temp = temp.substring(0, 2) + '01'
    //   }

    //   let finalVal = (temp.match(/.{1,2}/g) || []).join('/')
    //   this.expirationDateWithSlashes = finalVal
    // },
  },
  
})
</script>
<style lang="scss" scoped>
.input-label{
  @apply text-xs px-1 my-2;
}
.group-label{
  @apply flex justify-between items-center py-2;
}
.dropdown {
  @apply absolute top-[100%] left-0 w-full bg-white;
  max-height: 150px;
  overflow-y: scroll;
  margin-top: 5px;
  border-radius: 5px;
  box-shadow: 1px 3px 5px rgba(203, 206, 206, 0.692);
}
.dropdown::-webkit-scrollbar {
  width: 5px;
  height: 3px;
  cursor: pointer;
}
.dropdown::-webkit-scrollbar-thumb {
  @apply bg-paperdazgreen-400;
  width: 5px;
  border-radius: 50px;
  cursor: pointer;
}

.dropdown::-webkit-scrollbar-track {
  cursor: pointer;
  @apply border-[1px] border-transparent;
}
.dropdown > li {
  list-style-type: none;
  @apply py-2 px-1;
}
.custom-input {
  @apply w-12 text-center outline-none rounded-lg border-[1px] border-paperdazgray-200 mr-2;
}
.width-full {
  width: 100%;
  text-align: left;
}
.text-input{
  @apply p-[8px] border-none outline-none rounded w-full
}
</style>
