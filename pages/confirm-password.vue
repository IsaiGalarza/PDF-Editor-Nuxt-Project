<template>
  <section class="bg-gradient-to-t from-white to-transparent">
    <div class="container py-20">
      <!-- show if verified -->
      <div class="reset-pass-section">
        <div class="container">
          <div class="row">
            <form @submit.prevent="submit" class="col-lg-6 md:order-2 order-1">
              <div class="left-form">
                <div class="form form-outer shadow-2xl">
                  <div class="heading">
                    <h1>Welcome Back!</h1>
                    <h3 class="capitalize">{{ username }}</h3>
                  </div>
                  <h6>Create a password</h6>
                  <div class="form-group">
                    <label for="">Password</label>
                    <input
                      class="form-control"
                      v-model="user.password"
                      type="password"
                      :disabled="isLoading || isRedirecting"
                      required
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="">Retype password</label>
                    <input
                      class="form-control"
                      type="password"
                      v-model="user.confirmPassword"
                      :disabled="isLoading || isRedirecting"
                      placeholder="Password"
                    />

                    <div class="">
                      <div class="error-wrapper">
                        <div
                          :class="[
                            alphabet.test(this.user.password)
                              ? 'bg-[green]'
                              : 'bg-[#808080b8]',
                          ]"
                          class="error-indicator"
                        ></div>
                        <span
                          class="text-[11px]"
                          :class="[
                            alphabet.test(this.user.password)
                              ? 'text-[green]'
                              : 'text-[#808080b8]',
                          ]"
                        >
                          Password must contain upper</span
                        >
                      </div>
                      <div class="error-wrapper">
                        <div
                          :class="[
                            number.test(this.user.password)
                              ? 'bg-[green]'
                              : 'bg-[#808080b8]',
                          ]"
                          class="error-indicator"
                        ></div>
                        <span
                          class="text-[11px]"
                          :class="[
                            number.test(this.user.password)
                              ? 'text-[green]'
                              : 'text-[#808080b8]',
                          ]"
                        >
                          Password must contain number</span
                        >
                      </div>
                      <div class="error-wrapper">
                        <div
                          :class="[
                            charac.test(this.user.password)
                              ? 'bg-[green]'
                              : 'bg-[#808080b8]',
                          ]"
                          class="error-indicator"
                        ></div>
                        <span
                          class="text-[11px]"
                          :class="[
                            charac.test(this.user.password)
                              ? 'text-[green]'
                              : 'text-[#808080b8]',
                          ]"
                        >
                          Password must contain symbol</span
                        >
                      </div>
                      <div class="error-wrapper">
                        <div
                          :class="[
                            this.user.password?.length > 8
                              ? 'bg-[green]'
                              : 'bg-[#808080b8]',
                          ]"
                          class="error-indicator"
                        ></div>
                        <span
                          class="text-[11px]"
                          :class="[
                            this.user.password?.length > 8
                              ? 'text-[green]'
                              : 'text-[#808080b8]',
                          ]"
                        >
                          Password must be more than 8 characters</span
                        >
                      </div>
                      <div class="error-wrapper">
                        <div
                          :class="[isPasswordEqual ? 'bg-[green]' : 'bg-[#808080b8]']"
                          class="error-indicator"
                        ></div>
                        <span
                          class="text-[11px]"
                          :class="[isPasswordEqual ? 'text-[green]' : 'text-[#808080b8]']"
                        >
                          Password match</span
                        >
                      </div>
                    </div>
                  </div>
                  <button
                    class="register-btn h-10 w-full mt-6 text-white rounded-lg shadow px-5 text-sm"
                    :class="[
                      isLoading ? 'cursor-progress opacity-60' : '',
                      !isFormValid ? 'cursor-not-allowed opacity-60' : '',
                    ]"
                    :disabled="!isFormValid"
                  >
                    <span class="inline-flex items-center gap-3">
                      <span>Register</span>
                      <transition name="fade" :duration="100">
                        <span v-show="isLoading" class="animate-spin">
                          <spinner-dotted-icon height="22" width="22" color="white" />
                        </span>
                      </transition>
                    </span>
                  </button>
                </div>
              </div>
            </form>
            <div class="col-lg-6 md:order-1 order-2">
              <div class="flex flex-col w-full h-full items-center mt-[30px]">
                <img src="../static/card2.png" class="w-[300px]" alt="" />
                <div class="flex">
                  <div class="text-2xl text-[#8E8989] font-bold px-3 text-center">
                    Thank you for <br />being <br />Responsible!!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SignUpEmailVerify
      :verificationEmail="verificationEmail"
      v-model="showEmailVerification"
    />
  </section>
</template>

<script>
import Vue from "vue";
import CheckIcon from "~/components/svg-icons/CheckIcon.vue";
import SpinnerDottedIcon from "~/components/svg-icons/SpinnerDottedIcon.vue";
import SvgIcon from "~/components/svg-icons/SvgIcon.vue";
import InputField from "~/components/widgets/InputField.vue";
import MessageAlertWidget from "~/components/widgets/MessageAlertWidget.vue";
import PasswordField from "~/components/widgets/PasswordField.vue";
import login from "~/mixins/login";
import { ErrorHandler } from "~/types/ErrorFunction";
import ExclamationIcon from "~/components/svg-icons/ExclamationIcon.vue";
import SignUpEmailVerify from "~/components/pdf/modals/SignUpEmailVerify.vue";
import SocialAuth from "~/components/auth/SocialAuth.vue";
import jwt, { decode, JsonWebTokenError } from "jsonwebtoken";

export default Vue.extend({
  name: "confirm-password",
  auth: false,
  mixins: [login],
  components: {
    SocialAuth,
    InputField,
    PasswordField,
    SvgIcon,
    CheckIcon,
    MessageAlertWidget,
    SpinnerDottedIcon,
    ExclamationIcon,
    SignUpEmailVerify,
    SocialAuth,
  },
  layout: "landing",

  data() {
    return {
      confirmPassword: undefined,
      setDropDown: false,
      countrycode: "",
      country: "",
      dropDownContent: [],
      totalCountriesArray: [],
      isTeamLoggin: false,
      teamMemberLinkMessage: "Already have an account?",
      showEmailVerification: false,
      ConfirmedPassword: false,
      verificationEmail: "",
      userParams: this.$route.query.verificationToken,
      decodedUserInfo: {},
      registered: false,
      isFormValid: false,
      user: {
        password: "",
        confirmPassword: "",
        action: "reset_password",
        token: "",
        isEmailVerified: true,
      },
      isLoading: false,
      errorMessage: "",
      isRedirecting: false,
      acceptTermsConditions: false,
      charac: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
      number: /[0-9]/,
      alphabet: /[A-Za-z]/,
    };
  },
  watch: {
    "user.password": function () {
      this.getIsFormValid();
      this.checkPasswordStrength();
    },
    "user.confirmPassword": function () {
      this.getIsFormValid();
      this.checkPasswordStrength();
    },
  },
  computed: {
    username() {
      let userInfo = this.decodedUserInfo;
      return userInfo.firstName + " " + userInfo.lastName || "";
    },
    isPasswordEqual() {
      if (this.user.password?.trim()?.length === 0) return false;
      return this.user.password == this.user.confirmPassword;
    },
  },
  beforeRouteLeave(to, from, next) {
    this.$auth.logout();
    next();
  },
  mounted() {
    let encodedUser = jwt.verify(this.userParams, process.env.NUXT_ENV_BACKEND_JWT_TOKEN);
    this.decodedUserInfo = { ...encodedUser.data };
    this.user.token = jwt.sign(
      { data: this.decodedUserInfo.user_id },
      process.env.NUXT_ENV_BACKEND_JWT_TOKEN
    );
  },
  methods: {
    checkPasswordStrength() {
      if (
        this.charac.test(this.user.password) &&
        this.number.test(this.user.password) &&
        this.alphabet.test(this.user.password) &&
        this.user.password?.length > 8
      ) {
        this.ConfirmedPassword = false;
      } else {
        this.ConfirmedPassword = true;
      }
    },

    getIsFormValid() {
      if (
        this.charac.test(this.user.password) &&
        this.number.test(this.user.password) &&
        this.alphabet.test(this.user.password) &&
        this.user.password?.length > 8 &&
        this.user.password === this.user.confirmPassword
      ) {
        this.isFormValid = true;
      } else {
        this.isFormValid = false;
      }
    },
    cancleOut(e) {
      if (e.target.tagname != "LI") {
        this.setDropDown = false;
      }
    },
    termsConditionClick(event) {
      event.target.checked
        ? (this.acceptTermsConditions = true)
        : (this.acceptTermsConditions = false);
    },

    //method to submit the user data
    submit() {
      event?.preventDefault();

      // <-- checking if loading or redirecting -->
      if (this.isLoading) return;

      this.isLoading = true;
      this.errorMessage = "";

      if (this.user.confirmPassword !== this.user.password) {
        return;
      }
      let cloneUserData = this.user;
      cloneUserData.newPassword = cloneUserData.password;

      delete cloneUserData.password;
      delete cloneUserData.confirmPassword;
      // return
      this.$axios
        .$patch(`/users/1`, { ...cloneUserData })
        .then(async (response) => {
          this.$notify.success({
            title: "Password comfirm",
            message: "Password comfirm success",
          });
          this.$nuxt.$router.push("/login");
        })
        .catch(({ response }) => {
          let message = ErrorHandler(response);
          this.errorMessage = message;
          this.$notify.error({
            title: "Password comfirm",
            message: "Something went wrong, Please try again",
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
});
</script>
<style lang="scss" scoped>
.dropdown {
  @apply absolute top-[100%] left-0 w-full bg-white;
  max-height: 150px;
  overflow-y: scroll;
  margin-top: 5px;
  border-radius: 5px;
  box-shadow: 1px 3px 5px rgba(203, 206, 206, 0.692);
}

.form-outer {
  background-color: white !important;
}

.register-btn {
  background-color: #77b550 !important;
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

.error-wrapper {
  @apply my-2 flex flex-row items-center;
}

.error-indicator {
  @apply mr-2 w-[10px] overflow-hidden h-[10px] rounded-[100%] p-[2px];
}
</style>
