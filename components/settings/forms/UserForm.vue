<template>
  <form
    action=""
    ref="form"
    @submit.prevent="onSubmit"
    class="profile-info-form grid grid-cols-1 gap-y-3 sm:gap-5"
  >
    <message-alert-widget
      :message="errorMessage"
      v-show="errorMessage"
      type="error"
      class="mb-8"
    />
    <div
      class="grid gap-y-3 sm:gap-5"
      style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));"
    >
      <div>
        <label for="">First Name</label>
        <el-input
          placeholder="Enter first name..."
          v-model="formData.firstName"
          :disabled="!editingDetails"
        />
      </div>
      <div>
        <label for="">Last Name</label>
        <el-input
          placeholder="Enter last name..."
          v-model="formData.lastName"
          :disabled="!editingDetails"
        />
      </div>
    </div>
    <div
      class="grid gap-y-3 sm:gap-5"
      style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));"
    >
      <div>
        <label for="">Email</label>
        <el-input
          placeholder="Enter email..."
          v-model="formData.email"
          required
          type="email"
          :disabled="true"
        />
      </div>
      <div>
        <label for="">Phone Number</label>
        <el-input
          placeholder="Enter phone number..."
          v-model="formData.phone"
          :disabled="!editingDetails"
        />
      </div>
    </div>
   

    <span class="inline-flex items-center gap-3">
      <span  v-show="!this.isLocationError" class="text-[12px]">Click on icon to  pin your location for us to get your timezone, city and country.   </span>
      <span  v-show="this.isLocationError" class="text-[12px] text-red-600">Error occure while trying to get your location, please try again  </span>
      <span class="cursor-pointer" @click="fetchUserCountryDetail" v-show="!this.isLocationFetching">
        <location-icon />
      </span>
      <transition name="fade" :duration="100">
        <span v-show="this.isLocationFetching" class="animate-spin">
          <spinner-dotted-icon height="22" width="22" />
        </span>
      </transition>
    </span>


    <div
      v-show="this.isLocationFetched"
      class="grid gap-y-3 sm:gap-5"
      style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));"
    >
      <div class="flex items-center">
        <label class="mr-2" for="">Timezone:</label>
        <el-input
          placeholder="Enter timezone"
          v-model="formData.timezone"
          :disabled="!editingDetails"
        />
      </div>
      <div class="flex items-center">
        <label class="mr-2" for="">Location:</label>
        <el-input
          placeholder="Enter country ..."
          v-model="formData.country"
          :disabled="!editingDetails"
        />
      </div>
    </div>
    <div
      v-show="this.isLocationFetched"
      class="grid gap-y-3 sm:gap-5"
      style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));"
    >
      <div class="flex items-center">
        <label class="mr-2" for="">State:</label>
        <el-input
          placeholder="Enter state"
          v-model="formData.city"
          :disabled="!editingDetails"
        />
      </div>
      <div class="flex items-center">
       
      </div>
      
    </div>

    <transition name="fade">
      <div
        class="flex items-center justify-center mt-2"
        v-show="editingDetails"
      >
        <button
          :disabled="!editingDetails || loading"
          class="shadow h-10 px-5 text-white rounded-md bg-paperdazgreen-300 disabled:opacity-50"
        >
          <span class="inline-flex items-center gap-3">
            <span>Update</span>
            <transition name="fade" :duration="100">
              <span v-show="loading" class="animate-spin">
                <spinner-dotted-icon height="22" width="22" />
              </span>
            </transition>
          </span>
        </button>
      </div>
    </transition>
  </form>
</template>

<script>
import Vue from 'vue'
import InputField from '~/components/widgets/InputField.vue'
import AuthUser from '~/models/AuthUser'
import timezones from '~/assets/json/timezones'
import MessageAlertWidget from '~/components/widgets/MessageAlertWidget.vue'
import SpinnerDottedIcon from '~/components/svg-icons/SpinnerDottedIcon.vue'
import { mapState } from 'vuex'
import login from '~/mixins/login'
import { countryCode } from '~/assets/json/countryCode'
import { countryList } from '~/assets/json/coutry'
import { ErrorHandler } from '~/types/ErrorFunction'
import mixins from 'vue-typed-mixins'
import LocationIcon from '../../svg-icons/LocationIconblack.vue'


export default mixins(login).extend({
  name: 'UserForm',
  components: { InputField, MessageAlertWidget,  LocationIcon, SpinnerDottedIcon },
  data() {
    return {
      dropDownContent: [],
      setDropDown: false,
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        timezone: '',
        country: '',
        state: '',
        city: ''
      },
      country: '',
      state: '',
      states: [],
      timezones,
      loading: false,
      errorMessage: '',
      isLocationFetching:false,
      isLocationError: false,
      isLocationFetched: false
    }
  },
  computed: {
    ...mapState(['initialUser']),
  },
  props: {
    editingDetails: {
      type: Boolean,
      default: false,
    },
  },
  async fetch() {
    await this.fetchCountries()
    await this.fetchStates()

    this.formData.state = this.$auth.user ? this.$auth.user.state : ''
  },
  mounted() {
    for (const key of Object.keys(this.formData)) {
      this.formData[key] = this.$auth.user ? this.$auth.user[key] : ''
    }
    this.country = this.$auth.user.country
    this.state = this.$auth.user.state
  },
  methods: {

    async fetchUserCountryDetail() {
      this.isLocationFetching = true
      fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => {
        fetch(`http://ip-api.com/json/${data.ip}`)
        .then(response => response.json())
        .then(IpDetail => {
          this.isLocationFetching = false
          this.isLocationFetched = true
          this.formData.country = IpDetail.country
          this.formData.timezone = IpDetail.timezone
          this.formData.city = IpDetail.city
        }).catch(() => {
          this.isLocationFetching = false
          this.isLocationError = false
        })
      }).catch(() => {
        this.isLocationFetching = false
        this.isLocationError = false

      })
    },
    inputPhone(val,title){
      let valid = true
      let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~a-zA-Z]/
      if (format.test(val)) {
        this.errorMessage = `${title} format not correct`
        valid = false
      }
     return valid
    },
    cancleOut(e) {
      if (e.target.tagname != 'LI') {
        this.setDropDown = false
      }
    },
    setCountryInfo(e) {
      this.country = e.target.textContent.trim().toLowerCase()
      this.setDropDown = false

      //set the state AND TIMEZONE
      try {
        let countryData = countryList.filter((item) =>
          item.name.common.toLowerCase().startsWith(this.country)
        )[0]
        this.formData.timezone = countryData.timezones[0]
        this.state = countryData.capital[0]
      } catch (err) {
        this.state = ''
      }
    },
    displayCountry() {
      if (this.country.trim() != '') {
        this.setDropDown = true

        this.dropDownContent = countryList
          .map((item) => item)
          .filter((item) =>
            item.name.common.toLowerCase().startsWith(this.country)
          )
          .sort()
      } else {
        this.setDropDown = false
      }
    },

    fetchCountries() {
      // return this.$axios
      //   .$get('https://api.countrystatecity.in/v1/countries', {
      //     headers: {
      //       'X-CSCAPI-KEY': this.$config.countryApiKey,
      //     },
      //   })
      //   .then((response) => {
      //     this.countries = response
      //   })
    },
    fetchStates() {
      // if (!this.formData.country) {
      //   this.states = []
      //   this.formData.state = ''
      //   return
      // }
      // const country = this.countries.find(
      //   (el) => el.name == this.formData.country
      // )
      // if (!country) {
      //   this.states = []
      //   this.formData.state = ''
      //   return
      // }
      // return this.$axios
      //   .$get(
      //     `https://api.countrystatecity.in/v1/countries/${country.iso2}/states`,
      //     {
      //       headers: {
      //         'X-CSCAPI-KEY': this.$config.countryApiKey,
      //       },
      //     }
      //   )
      //   .then((response) => {
      //     const states = response
      //     states.sort((a, b) =>
      //       a.name > b.name ? 1 : -1
      //     )
      //     this.states = states
      //     if (this.states.length === 0) this.formData.state = ''
      //   })
    },
    onSubmit() {
      event?.preventDefault()
     
      if (this.loading) return

      this.loading = true
      this.errorMessage = ''
      let userId = this.$auth.user?.id
      this.formData = {
        ...this.formData,
        country: this.country,
        state: this.state,
      }

      this.$axios
        .$patch(`/users/${userId}`, this.formData)
        .then(async () => {
          this.filterUsers()
          this.$notify.success({
          title: 'Data write',
          message: 'Data updated successfully!',
          })

          this.loading = false
          await this.$nextTick()
          this.$emit('stop-editing')
        })
        .catch(({response}) => {
          let message = ErrorHandler(response)
          this.errorMessage = message
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
  watch: {
    'formData.country': function () {
      this.formData.state = ''
      this.fetchStates()
    },
    '$auth.user.country': function () {
      for (const key of Object.keys(this.formData)) {
        this.formData[key] = this.$auth.user ? this.$auth.user[key] : ''
      }
      this.country = this.$auth.user.country
      this.state = this.$auth.user.state
    },
  },
})
</script>

<style>
.profile-info-form input {
  @apply h-9 sm:h-10;
}
</style>

<style lang="postcss" scoped>
.profile-info-form label {
  @apply block mb-0.5 text-xs sm:text-base;
  color: #707070;
}
.dropdown {
  @apply absolute top-[100%] left-0 w-full bg-white p-2;
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
.dropdown > div > li {
  list-style-type: none;
  @apply py-2 px-1;
  transition: 0.2s;
}
.dd-image {
  transition: 0.2s;
}
.dropdown > div:hover .dd-image {
  width: 20px;
  height: 20px;
  border-radius: 50px;
}
.dropdown > div > li:hover {
  padding-left: 10px;
}
.custom-input {
  @apply w-12 text-center outline-none rounded-lg border-[1px] border-paperdazgray-200 mr-2;
}
.width-full {
  width: 100%;
  text-align: left;
}
</style>
