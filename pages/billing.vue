<template>
  <div>
    <div
      class="w-full sm:w-[550px] sm:rounded-lg flex items-center bg-white shadow"
    >
      <button
        class="w-6/12 py-3 text-center sm:rounded-lg text-sm sm:text-base"
        :class="[
          activeTab == 'billing'
            ? 'bg-paperdazgreen-300 text-white'
            : 'bg-transparent text-black',
        ]"
        @click="activeTab = 'billing'"
      >
        Billing
      </button>
      <button
        class="w-6/12 py-3 text-center sm:rounded-lg text-sm sm:text-base"
        @click="activeTab = 'features'"
        :class="[
          activeTab == 'features'
            ? 'bg-paperdazgreen-300 text-white'
            : 'bg-transparent text-black',
        ]"
      >
        Buy more features
      </button>
    </div>

    <div class="mt-4">
      <keep-alive>
        <component :is="currentTab"></component>
      </keep-alive>
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
      activeTab: 'billing',
    }
  },
  computed: {
    currentTab() {
      let current_tab = ''
      switch (this.activeTab) {
        case 'billing':
          current_tab = 'billing-details'
          break

        case 'features':
          current_tab = 'select-custom-billing-package'
          break
      }
      return current_tab
    },
  },
}
</script>

<style lang="scss" scoped></style>
