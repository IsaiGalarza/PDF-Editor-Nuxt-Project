<template>
    <el-dialog
      :visible.sync="showModal"
      :append-to-body="true"
      style=""
      :show-close="false"
      center
      class="relative text-[#414042]"
    >
      <!-- Start:: Body -->
      <!-- <template #title>
        <h4 class="text-center font-semibold text-xl">Oops</h4>
      </template> -->
      <p
        class="text-center block font-medium max-w-[290px] mx-auto mb-6 break-normal"
      >
       Are you sure you want to delete these file?
      </p>
      <div class="flex justify-around">
        <button
          class="disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-red-500"
          :disabled="loading"
          @click="closeModal()"
        >
          <span class="inline-flex gap-1 items-center">
            Cancel
          </span>
        </button>
        <button
        class="disabled:bg-opacity-50 flex items-center justify-center disabled:cursor-not-allowed h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400"
        type="button"
        :disabled="loading"
        @click="DeleteFile"
      >
        Yes &nbsp;
        <spinner-dotted-icon
          v-show="loading"
          height="20"
          width="20"
          class="animate-spin"
        />
      </button>
      </div>
      <!-- end :: body -->
    </el-dialog>
  </template>
  
  <script>
  import Vue from 'vue'
  import SpinnerDottedIcon from '~/components/svg-icons/SpinnerDottedIcon.vue'
  export default Vue.extend({
    name: 'maxInviteModal',
    components: { SpinnerDottedIcon },
    model: {
      prop: 'visible',
      event: 'updateVisibility',
    },
    props: {
      fileId:{ type: Number },
      visible: {
      type: Boolean,
      default: false,
      },
    },
    data() {
      return {
        showModal: false,
        folder: {},
        loading: false
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
    methods: {
      closeModal() {
        this.$emit('updateVisibility', false)
      },
      DeleteFile(){
        this.$BUS.$emit('is-deleted')
        this.loading = true
         this.$axios.delete(`/files/${this.fileId}`)
         .then(()=>{
            this.$nuxt.$router.push('/paperlink-pages')
            this.$notify.success({
                message:'File deleted successfully'
            })
            this.closeModal();
         })
         .catch(()=>{
            this.$notify.error({
                message:'Could not delete file'
            })
         })
         .finally(()=>{loading = false})
      }
    },
  })
  </script>
  
  <style scoped>
  * >>> .el-dialog {
    width: 416px !important;
    max-width: 95% !important;
    border-radius: 20px !important;
    border-radius: 8px !important;
    position: relative !important;
    overflow: hidden;
  }
  * >>> .el-dialog__header {
    padding-bottom: 20px;
  }
  
  * >>> .el-dialog__header,
  * >>> .el-dialog__footer {
    text-align: left !important;
  }
  
  * >>> .el-dialog__body {
    /* padding-top: 0 !important;
    padding-bottom: 0 !important; */
    background: #fcfcfd;
  }
  
  * >>> .el-select .el-input__inner {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  </style>
  