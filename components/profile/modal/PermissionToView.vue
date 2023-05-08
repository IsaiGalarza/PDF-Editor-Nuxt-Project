<template>
    <el-dialog
      :visible.sync="showModal"
      :append-to-body="true"
      style=""
      :show-close="false"
      center
      class="relative text-[#414042]"
    >
      <!--Start:: Close Button -->
      <div class="absolute -top-3 -right-3" style="padding: inherit">
        <span
          class="circle circle-12 bg-white cursor-pointer text-red-600"
          @click="closeModal()"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z"
              fill="#414042"
            />
          </svg>
        </span>
      </div>
      <!--End:: Close Button -->
      <template #title>
        <h4 class="text-center font-semibold text-xl">File Name </h4>
      </template>
      <!-- Start:: Body -->
      <p class="py-3 text-center text-paperdazgreen-300">Private Access</p>
      <p
        class="border-[1px] border-paperdazgreen-300 rounded-md flex items-center p-[2px]"
      >
         <input
         v-model="invite_email"
          class="w-full py-2 px-4 rounded-md bg-transparent outline-none border-none"
          placeholder="Email"
         />
         <button @click="sendInvite" class="px-3 py-2 bg-paperdazgreen-300 text-white rounded-md w-[150px]">Invite</button>
      </p>

         <div class="mt-10">
            <div class="flex items-center mb-4" v-for="invite in permissions" :key="index">
                <div class="w-5/12">{{ invite.email ?? ''}}</div>
                <div class="w-3/12">{{ invite.name ?? ''}}</div>
                <div class="w-2/12">{{ invite.isGranted == 0 ? 'Pending' : 'Approved'}}</div>
                <div class="w-1/12 flex justify-end">
                    <button  @click="approveInvite(invite.id)" v-if="invite.isGranted == 0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                            <path d="M6.00016 11.1698L1.83016 6.99984L0.410156 8.40984L6.00016 13.9998L18.0002 1.99984L16.5902 0.589844L6.00016 11.1698Z" fill="#75C05F"/>
                            </svg>
                    </button>
                </div>
                <div class="w-1/12 flex justify-end">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M13 1L1 13M1 1L13 13" stroke="#FF7373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                    </button>
                </div>
            </div>
         </div>

      <!-- end :: body -->
    </el-dialog>
  </template>
  
  <script>
  import Vue from 'vue'
  import SpinnerDottedIcon from '~/components/svg-icons/SpinnerDottedIcon.vue'
  export default Vue.extend({
    name: 'edit-company-folder',
    components: { SpinnerDottedIcon },
  
    model: {
      prop: 'visible',
      event: 'updateVisibility',
    },
    props: {
      packagename: {
         type: String
      },
      file: {
         type: Object
      },
      visible: {
        type: Boolean,
        default: false,
      },
      isCreator: {
        type: Boolean,
      },
      fileId : {}
    },
    data() {
      return {
        showModal: false,
        errorMessage: '',
        loading: false,
        folderInputData:'',
        permissions: [],
        folder:{},
        invite_email: ""
      }
    },
    watch: {
      visible(val) {
        this.showModal = val
      },
      showModal(val) {
        val ? this.getPermissions() : null
        this.$emit('updateVisibility', val)
      },
    },
    computed: {
      payload(){
        return {
              action: "update_permission",
              isGranted: 1
          }
        },
      sendInvitepayload(){
        return {
            action: "invite_n_grant_permission",
            fileId: this.fileId,
            name: "test user",
            email: this.invite_email
        }
      }
    },
    mounted() {
      this.showModal = this.visible;
    },
    methods: {
      async sendInvite(){
        try {
            await this.$axios.post(`/permissions`, this.sendInvitepayload)
            this.getPermissions()
          } catch (error) {
            //..
          }
      },
      async approveInvite(id){
          try {
            await this.$axios.patch(`/permissions/${id}`, this.payload)
            this.getPermissions()
          } catch (error) {
            //..
          }
      },
    getPermissions(){
      try {
       this.$axios.get(`/permissions?fileId=${this.fileId}`)
       .then((res)=> {
        this.permissions = res.data;
       })
      } catch (error) {
        //
      }
    },
      closeModal() {
        this.$emit('updateVisibility', false)
      },
      onSubmit() {
        event?.preventDefault()
  
        if (this.loading) return
  
        this.loading = true
        this.errorMessage = ''
  
  
        // return
        this.$axios
          .$patch(`/folders/${(this.folder).id}`,
            {name : this.folderInputData}
          )
          .then((response) => {
             this.$notify.success({
              title: 'Folder',
              message: 'Folder name changed successfully',
            })
             this.$emit('updateVisibility', false)
             this.$emit('refresh')
            this.$nuxt.refresh()
          })
          .catch((err) => {
            this.$notify.error({
              title: 'Folder',
              message: 'Unable to change folder name',
            })
          })
            .finally(()=>{
              this.loading = false
            })
      },
    },
  })
  </script>
  
  <style scoped>
  * >>> .el-dialog {
    width: 616px !important;
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
  