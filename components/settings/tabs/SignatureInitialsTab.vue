<template>
  <div>
    <!-- Desktop -->
    <div class="flex-1 rounded-3xl bg-white py-6 px-8 hidden sm:block">
      <!-- Start:: Signature section -->
      <section class="mb-16">
        <h3
          class="
            flex
            justify-center
            text-paperdazgreen-300
            border-b-2 border-paperdazgreen-300
            font-semibold
            text-2xl
            gap-2
            pb-2
            relative
            mb-7
          "
        >
          <span class="flex items-center gap-3"
            >Signature <exclamation-icon class="text-paperdazgreen-300 w-4 h-4"
          /></span>
        </h3>
        <div
          class="
            border
            h-56
            border-[#C4C4C4]
            rounded
            w-full
            bg-white
            flex flex-col
            justify-center
            items-center
            overflow-hidden
            p-4
          "
        >
          <div class="mb-4 text-gray-600 cursor-not-allowed">
            <img :src="signature" width="72" height="72" />
          </div>
          <button
            @click="showSignature"
            class="
              text-white
              rounded
              shadow
              bg-paperdazgreen-400
              px-5
              h-10
              text-sm
            "
          >
            <!-- {{ !$auth.user.signature ? 'Create' : 'View / Update' }} -->
            {{ !signature ? 'Create' : 'View / Update' }}
          </button>
        </div>
      </section>
      <!-- End:: Signature section -->

      <!-- Start:: Initials section -->
      <section>
        <h3
          class="
            flex
            justify-center
            text-paperdazgreen-300
            border-b-2 border-paperdazgreen-300
            font-semibold
            text-2xl
            gap-2
            pb-2
            relative
            mb-7
          "
        >
          <span class="flex items-center gap-3"
            >Initials <exclamation-icon class="text-paperdazgreen-300 w-4 h-4"
          /></span>
        </h3>
        <div
          class="
            border
            h-56
            border-[#C4C4C4]
            rounded
            w-full
            bg-white
            flex flex-col
            justify-center
            items-center
            overflow-hidden
            p-4
          "
        >
          <div class="mb-4 text-gray-600 cursor-not-allowed">
            <img :src="initial" width="72" height="72" />
          </div>
          <button
            @click="showInitial"
            class="
              text-white
              rounded
              shadow
              bg-paperdazgreen-400
              px-5
              h-10
              text-sm
            "
          >
            <!-- {{ !$auth.user.initials ? 'Create' : 'View / Update' }} -->
            {{ !initial ? 'Create' : 'View / Update' }}
          </button>
        </div>
      </section>
      <!-- End:: Initials section -->

      <draw-or-type-modal
        v-model="showSignatureModal"
        :src="usingSignature ? $auth.user.signatureURL : $auth.user.initialURL"
        @image-exported="imageExportedLocal($event)"
      />
    </div>

    <!-- Mobile -->
    <div class="mx-3 mt-4 block sm:hidden">
      <div class="rounded-2xl bg-white overflow-hidden mb-12">
        <div class="tab-header flex">
          <div
            v-for="tab in mobileTabs"
            :key="tab.id"
            class="w-50 text-center py-2"
            @click="tabOnMobile = tab.id"
            :class="[
              tabOnMobile === tab.id ? 'bg-paperdazgreen-800 text-white' : 'bg-paperdazgray-1100',
            ]"
          >
            {{ tab.label }}
          </div>
        </div>
        <div class="h-[240px] flex justify-center items-center">
          <div v-if="tabOnMobile === 'signature' && signature" class="text-gray-600 cursor-not-allowed">
            <img :src="signature" width="100" height="100" />
          </div>
          <div v-else-if="tabOnMobile === 'initials' && initial" class="text-gray-600 cursor-not-allowed">
            <img :src="initial" width="100" height="100" />
          </div>
          <p v-else class="opacity-[0.2]">
            {{ `Write ${tabOnMobile} here` }}
          </p>
        </div>
        <div class="tab-footer flex justify-center gap-3 py-3 border-t">
          <button
            class="
              text-[#FF7373]
              rounded
              border
              border-gray-100
              bg-white
              px-5
              h-9
              text-sm
              hover:shadow
            "
          >
            Clear
          </button>
          <button
            class="
              text-white
              rounded
              bg-paperdazgray-800
              px-5
              h-9
              text-sm
              hover:shadow
            "
          >
            Draw
          </button>
        </div>
      </div>
      <button
        class="
          text-white
          rounded
          shadow
          bg-paperdazgreen-400
          px-5
          h-10
          text-sm
          w-full
        "
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import ExclamationIcon from '~/components/svg-icons/ExclamationIcon.vue'
import DrawOrTypeModal from '~/components/modals/DrawOrTypeModal.vue'
import mixins from 'vue-typed-mixins'
import SaveSignatureInitialsMixin from '~/mixins/SaveSignatureInitialsMixin'
import initialURL from '~/assets/img/initials.png'
import signatureURL from '~/assets/img/sign.png'

export default mixins(SaveSignatureInitialsMixin).extend({
  name: 'SignatureInitialsTab',
  components: { ExclamationIcon, DrawOrTypeModal },
  data() {
    return {
      showSignatureModal: false,
      usingSignature: true,
      mobileTabs: [
        {
          id: 'signature',
          label: 'Signature',
        },
        {
          id: 'initials',
          label: 'Initials',
        },
      ],
      tabOnMobile: 'signature',
    }
  },
  mounted() {
  },
  computed: {
    signature() {
      return this.$auth.user.signatureURL || signatureURL
    },
    initial() {
      return this.$auth.user.initialURL || initialURL
    },
  },
  methods: {
    showSignature() {
      this.usingSignature = true
      this.showSignatureModal = true
    },
    showInitial() {
      this.usingSignature = false
      this.showSignatureModal = true
    },
    imageExportedLocal(image) {
      this.imageExported(image, this.usingSignature)
    },
  },
})
</script>
