<template>
  <div class="bg-white rounded-lg">
    <h2 class="capitalize py-4 border-b-2 border-gray-200 px-3">
      Billing details
    </h2>
    <div class="p-3 overflow-x-auto w-full">
      <div class="w-full min-w-[800px]">
        <table class="w-full">
            <thead class="border-b-[1px] border-gray-200 px-3 w-full py-2">
              <td class="w-[16%]">Date</td>
              <td class="w-[16%]">Paperlink</td>
              <td class="w-[16%]">Team Member</td>
              <td class="w-[16%]">Business Page</td>
              <td class="w-[16%]">Discount</td>
              <td class="w-[10%]">Total</td>
              <td class="w-[10%] text-right">Reciept</td>
            </thead>
            <tbody>
              <tr class="px-3 w-full py-2" v-for="index in [1,2,3,4,5]" :key="index">
                <td class="w-[16%]">3/05/2023</td>
                <td class="w-[16%]">$2 x {No}</td>
                <td class="w-[16%]">$2 x {No}</td>
                <td class="w-[16%]">$10 x 1</td>
                <td class="w-[16%]">20%</td>
                <td class="w-[10%]">$112.00</td>
                <td class="w-[10%]">
                    <span class="inline-flex justify-end w-full">
                    <img src="~/assets/icons/pdf-icon.svg" />
                </span>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
td {
  @apply py-2 text-sm;
}
</style>
