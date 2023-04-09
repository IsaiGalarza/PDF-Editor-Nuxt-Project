<template>
    <el-dialog :visible.sync="showModal" :append-to-body="true" style="" :show-close="false" center
      class="relative text-[#414042]">
  
      <template #title>
        <span class="text-center font-semibold text-xl block w-full">Create Password</span>
      </template>
      <!-- Start:: Body -->
      <div class="justify-center pb-2">
         <el-input placeholder="user email" class="w-full mt-3" v-model="email"/>
         <el-input placeholder="Password"  class="w-full mt-3" v-model="password"/>
         <el-input placeholder="Confirm Password"  class="w-full mt-3" v-model="confirm_pasword"/>

         <div class="w-full flex justify-center mt-5">
            <button class="w-[80%] bg-paperdazgreen-300 text-white py-2 rounded">Continue</button>
         </div>
      </div>
      <!-- end :: body -->
    </el-dialog>
  </template>
    
  <script>
  import Vue from 'vue'
  import SpinnerDottedIcon from '~/components/svg-icons/SpinnerDottedIcon.vue'
  import axios from 'axios'
  import { scrapPdfData } from '~/types/scrapPdfData'
  import { ExtractFormPdf } from '~/types/extractFormPdf'
  import AuthUser from '~/models/AuthUser'
  import jwt, { decode, JsonWebTokenError } from 'jsonwebtoken'
  import UserTypeEnum from '~/models/UserTypeEnum'
  import FileAction from '~/models/FileAction'
  import CheckedFillIcon from '../svg-icons/CheckedFillIcon.vue'
  
  export default Vue.extend({
    name: 'ResetPasswordModal',
    components: { SpinnerDottedIcon, CheckedFillIcon },
    model: {
      prop: 'visible',
      event: 'updateVisibility',
    },
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      file: { type: Object }
    },
    data() {
      return {
        password: "",
        email: "",
        confirm_pasword: "",
        showModal: false,
        errorMessage: '',
        loading: false,
        newSaveData: {},
        // file: {},
        sendAction: null,
      }
    },
    watch: {
      visible(val) {
        this.showModal = val
      },
      showModal(val) {
        this.$emit('updateVisibility', val)
      },
    },
    mounted() {
      this.showModal = this.visible
    },
    methods: {
      closeModal() {
        this.$emit('updateVisibility', false)
      },
  
    },
  })
  
  </script>
    
  <style scoped>
  *>>>.el-dialog {
    width: 416px !important;
    max-width: 95% !important;
    border-radius: 20px !important;
    border-radius: 8px !important;
    position: relative !important;
    overflow: hidden;
  }
  
  *>>>.el-dialog__header {
    padding-bottom: 20px;
  }
  
  *>>>.el-dialog__header,
  *>>>.el-dialog__footer {
    text-align: left !important;
  }
  
  *>>>.el-dialog__body {
    /* padding-top: 0 !important;
      padding-bottom: 0 !important; */
    background: #fcfcfd;
  }
  
  *>>>.el-select .el-input__inner {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  </style>
    