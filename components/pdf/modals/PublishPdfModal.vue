<template>
  <el-dialog
    :visible.sync="showModal"
    :close-on-click-modal="false"
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
      <h4
        class="text-center font-semibold text-2xl text-gray-800 pb-2"
        v-if="!isCreator"
      >
        All Done?
      </h4>
    </template>
    <!-- Start:: Body -->
    <div v-if="!nonUserRecieveEmail">
      <div v-if="isConfirm" class="flex justify-center pb-2">
        <CheckedFillIcon width="90" />
      </div>
      <!-- <span v-if="!isCreator">Do you want these file to be saved as
        {{ `${(file.fileAction + 'ed').replace('ee', 'e')}` }}?</span> -->
      <span
        v-if="isCreator"
        class="w-full text-center block py-0 px-2 pb-8 mb-6 text-[16px] break-normal"
        >Publish file as
        <span class="capitalize">
          {{
            file.fileAction + ' & ' + file.filePrivacy.replace('p', 'P') + '?'
          }}</span
        ></span
      >
      <span
        v-if="!isCreator && $auth.loggedIn"
        class="w-full text-center block py-0 px-2 pb-8 text-[16px] mb-6"
      >
        If so, we will send a copy to your email.
      </span>
      <div class="flex justify-around mt-0">
        <button
          class="h-10 text-xs w-[150px] max-w-[50%] rounded-lg shadow border-[#D9251E] mr-1"
          type="button"
          :disabled="isLoading"
          @click="closeModal()"
          :class="
            isConfirm
              ? 'bg-zinc-500 border-[0px] text-white'
              : 'bg-white border-[1px] text-[#D9251E]'
          "
        >
          {{ isCreator ? 'Cancel' : 'Back' }}
        </button>
        <button
          class="disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400 ml-1"
          :disabled="isLoading"
          @click="onSubmit"
        >
          <span class="inline-flex gap-1 items-center">
            Yes
            <spinner-dotted-icon
              v-show="isLoading"
              height="20"
              width="20"
              class="animate-spin"
            />
          </span>
        </button>
      </div>
      <span
        v-if="!isCreator && $store.getters?.getFillAsGuest && file?.user?.allowCopy"
        class="w-full text-center block py-0 px-2 pb-8 text-[16px] pt-4"
      >
        <input v-model="nonUserRecieveEmail" type="checkbox" /> Click here if
        you want a copy
      </span>
    </div>

    <div v-else>
      <p class="w-full text-center">Enter email copy to be sent to.</p>
      <input
        v-model="externalGuestEmail"
        type="text"
        class="py-2 w-full rounded my-3 border-[1px] border-gray-200 px-2"
        placeholder="--Enter email--"
      />
      <p class="flex justify-center">
        <button
          class="disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400 ml-1"
          :disabled="isLoading"
          @click="onSubmit"
        >
          <span class="inline-flex gap-1 items-center">
            Send
            <spinner-dotted-icon
              v-show="isLoading"
              height="20"
              width="20"
              class="animate-spin"
            />
          </span>
        </button>
      </p>
    </div>
    <!-- end :: body -->

    <draw-or-type-modal
      v-model="showInitialModal"
      :src="$auth?.user?.signatureURL || ' '"
      @image-exported="imageExportedLocal($event, true)"
      use-default-button
    />
  </el-dialog>
</template>

<script>
import Vue from 'vue'
import SpinnerDottedIcon from '~/components/svg-icons/SpinnerDottedIcon.vue'
import SaveSignatureInitialsMixin from '~/mixins/SaveSignatureInitialsMixin'
import mixins from 'vue-typed-mixins'
import { file } from '@babel/types'
import CheckedFillIcon from '../../svg-icons/CheckedFillIcon.vue'
import FileAction from '~/models/FileAction'
import { ExtractFormPdf } from '~/types/extractFormPdf'
import TeamAccess from '~/models/TeamAccess'
import DrawOrTypeModal from '~/components/modals/DrawOrTypeModal.vue'
import AddToPageDrawOrType from '~/components/modals/AddToPageDrawOrType.vue'
import { type } from 'os'
import initialURL from '~/assets/img/initials.png'
import signatureURL from '~/assets/img/sign.png'

export default mixins(SaveSignatureInitialsMixin).extend({
  name: 'PublishPdfModal',
  components: {
    SpinnerDottedIcon,
    CheckedFillIcon,
    DrawOrTypeModal,
    AddToPageDrawOrType,
  },
  model: {
    prop: 'visible',
    event: 'updateVisibility',
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    tools: { type: Array },
    file: { type: Object },
    startGeneratePdf: { type: Function },
    successFileFunction: { type: Function },
    trackSubmitTools: { type: Function },
  },
  computed: {
    signature() {
      return this.$auth.user?.signatureURL || signatureURL
    },
    initial() {
      return this.$auth.user?.initialURL || initialURL
    },
    pdfOffsetY() {
      return this.$store.state.pdfOffset_y * this.$store.state.pdfScale
    },
    pdfOffsetX() {
      return this.$store.state.pdfOffset_x * this.$store.state.pdfScale
    },
    ledgerInfo() {
      return {
        userId: this.$auth?.user?.id ?? this.file.userId,
        fileName: this.file?.fileName,
        action: this.file?.fileAction,
        fileId: this.file?.id,
        fileOwnerId: this.file?.userId,
        fileOwner: 0,
        isGuest: this.$store.getters?.getFillAsGuest ? true : false,
      }
    },
    isSign() {
      return this.file.fileAction == FileAction.SIGNED
    },
    isConfirm() {
      return String(this.file.fileAction).toLowerCase() === FileAction.CONFIRM
    },
    isCreator() {
      if(this.$store.getters.getFrombusinessPage) return false
      return (
        this.file.userId == this.$auth?.user?.id ||
        (this.$auth?.user?.teamAccess == TeamAccess.COMPANY_FILE &&
          this.$auth?.user?.teamId == this.file.userId)
      )
    },
    signLabel() {
      let date = new Date()
      return `P${this.convertToDoubleString(
        date.getUTCMonth() + 1
      )}${this.convertToDoubleString(
        date.getUTCDate()
      )}${this.convertToDoubleString(
        date.getFullYear()
      )}${this.convertToDoubleString(
        date.getUTCHours()
      )}${this.convertToDoubleString(date.getUTCMinutes())}${(
        this.$auth.user?.firstName || ''
      )?.charAt(0)}${(this.$auth.user?.lastName || '').charAt(0)}`.toUpperCase()
    },
    confirmAnnotation() {
      let date = new Date()
      return {
        signaturePath: this.$store.getters.getUserSignature ?? this.$auth?.user?.signatureURL,
        text: `P${date.getFullYear()}${this.convertToDoubleString(
          date.getUTCDate()
        )}${this.convertToDoubleString(
          date.getUTCDay()
        )}${this.convertToDoubleString(
          date.getUTCHours()
        )}${this.convertToDoubleString(
          date.getUTCMinutes()
        )}${(this.$auth.user?.firstName || '')?.charAt(
          0
        )}${(this.$auth.user?.lastName || "")?.charAt(0)}`.toUpperCase(),
        fileAction: this.file?.fileAction,
      }
    },
  },
  data() {
    return {
      showModal: false,
      isLoading: false,
      base64: null,
      proceedToSendEmail: false,
      generatedPdf: {},
      showInitialModal: false,
      nonUserRecieveEmail: false,
      externalGuestEmail: undefined,
    }
  },
  watch: {
    "$store.getters.getUserSignature"(){
      this.showInitialModal = false
       if(!this.isConfirm) return
       this.onSubmit()
    },
    visible(val) {
      this.showModal = val
    },
    showModal(val) {
      this.$emit('updateVisibility', val)
    },
    '$auth.user': function () {
      this.convertImageToBase64(this.$auth?.user?.signatureURL)
    },
  },
  mounted() {
    this.showModal = this.visible
  },
  methods: {
    imageExportedLocal(image, isSignature) {
      this.$BUS.$emit('signature-update', image)
      // this.imageExported(image, 'signature-update')
      this.imageExported(image, isSignature)
    },
    confirmCheckedTools() {
      return (
        this.tools.filter((item, index) => item.isChecked == false).length > 0
      )
    },
    convertToDoubleString(val) {
      return Number(val) < 10 ? `0${val}` : val
    },
    async convertImageToBase64(src) {
      const response = await fetch(src)
      const imageBlob = await response.blob()
      const reader = new FileReader()
      reader.readAsDataURL(imageBlob)
      reader.onloadend = () => {
        const base64data = reader.result
        this.base64 = base64data
      }
    },
    addToLedger() {
      this.$_server
        .post(`/ledger`, { ...this.ledgerInfo })
        .then(() => {
          this.proceedToSendEmail = true
          this.publishAsGuest()
        })
        .catch(() => {
          this.$notify.error({
            message: 'Error occcured, could not send file',
          })
        })
    },
    appendConfirmSign() {
      console.log(
        'appendConfirmSign',
        ExtractFormPdf({
          downloadLink: this.file.downloadLink,
          file: this.confirmAnnotation,
          pdfOffset_y: this.pdfOffsetY,
          pdfOffset_x: this.pdfOffsetX,
        })
      )
    },
    confirmAllSignAndInitials() {
      if (this.$auth?.user?.id == this.file?.userId) return true
      else
        return (
          ExtractFormPdf(this.file?.downloadLink)[0].data.filter(
            (item) => item.hasOwnProperty('uploaded') && item.uploaded == null
          ).length < 1
        )
    },
    async confirmRequest() {
      await this.$_server.post('/pdf-generator', {
          ...ExtractFormPdf({
            downloadLink: this.file?.downloadLink,
            file: this.confirmAnnotation,
            pdfOffset_y: this.pdfOffsetY,
            pdfOffset_x: this.pdfOffsetX,
            signLabel: this.signLabel,
          })[0],
        })
        .then((response) => {
          this.generatedPdf = response.data
          this.addToLedger()
        })
        .catch(() => {})
        .finally(() => {
          this.isLoading = false
        })
    },
    async otherRequest() {
      await this.$_server
        .post('/pdf-generator', {
          ...ExtractFormPdf({
            downloadLink: this.file?.downloadLink,
            pdfOffset_y: this.pdfOffsetY,
            pdfOffset_x: this.pdfOffsetX,
            signLabel: this.signLabel,
          })[0],
          // actionBy: `${this.$auth.user.firstName} ${this.$auth.user.lastName}`.toUpperCase()
        })
        .then((response) => {
          this.isLoading = false
          // this.addToLedger()
          this.generatedPdf = response.data
        })
        .catch(() => {
          this.$notify.error({
            message: 'Error occcured, could not save file',
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    sendPdfToEmail(val) {
      let requestData = {
        email: this.externalGuestEmail,
        action: val == 'owner' ? this.file?.fileAction : 'shareFileToGuest',
        userId: this.$auth?.user?.id ?? 0,
        editedFileLink: this.generatedPdf?.downloadLink,
        fileId: this.file?.id,
      }
      console.log("email-requset",requestData)
      //   // return
      try {
        this.$_server.post(`/request`, requestData).then(() => {
          this.$store.commit('SET_PDF_EXIT', true)
          this.toggleToast({
            active: true,
            msg: `Thank you for completing a Paperlink!`,
          })
          this.$store.commit('SET_FILE_SIGNATURE', null)
          this.$store.commit('SET_FILE_INITIAL', null)
          this.$store.commit("UN_SET_AGREE_SIGN")
          console.log(this.file)
          this.$auth.loggedIn && this.isCreator
            ? this.$nuxt.$router.push('/paperlink-pages')
            : this.$nuxt.$router.push(`/${this.file?.user?.businessPage}`)
        })
      } catch (error) {
        this.$notify.error({
          title: 'Request',
          message: 'Request Failed',
        })
      } finally {
        this.closeModal()
        this.isLoading = false
        this.proceedToSendEmail = false
      }
    },
    allowLoadingAllAnnotations(ms) {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve()
        }, ms)
      })
    },
    async publishAsGuest() {
      // let filteredTools = this.tools.filter(e => e.isDeleted != true)
      // filteredTools.map((val, ind) => {
      //   if (val.type == 'star') {
      //     val['completed'] = true
      //   }
      //   if (val.type == 'appendSignature') {
      //     val['completed'] = this.signature
      //   }
      //   if (val.type == 'appendInitial') {
      //     val['completed'] = this.initial
      //   }
      // })
      // this.$axios
      //   .patch(`/files/${this.file.id}`, {
      //     fileAction: this.file.fileAction,
      //     annotaions: JSON.stringify(filteredTools)
      //   })
      //   .then(() => { })
      //   .catch(() => {
      //     this.$notify.error({
      //       message: 'Error occcured, could not save file'
      //     })
      //   })
      //   .finally(() => { })

      if (!this.proceedToSendEmail) {
        switch (this.file?.fileAction) {
          case FileAction.CONFIRM:
            await this.confirmRequest()
            // await this.otherRequest()
            break
          case FileAction.SIGNED:
            await this.otherRequest()
            break
          case FileAction.COMPLETE:
            await this.otherRequest()
            break
        }
      } else {
        this.sendPdfToEmail('owner')
        this.sendPdfToEmail('guest')
      }
    },
    publishAsCreator() {
      let filteredTools = this.tools.filter((e) => e.isDeleted != true)

      this.$axios
        .patch(`/files/${this.file?.id}`, {
          fileAction: this.file?.fileAction,
          annotaions: JSON.stringify(filteredTools),
          filePrivacy: this.file?.filePrivacy
        })
        .then(() => {
          this.$notify.success({
            message: 'File publish successfully',
          })
          this.closeModal()
          this.$store.commit('SET_PDF_EXIT', true)
          this.$nuxt.$router.push('/paperlink-pages')
        })
        .catch(() => {
          this.$notify.error({
            message: 'Error occcured, could not save file',
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    closeModal() {
      this.$emit('updateVisibility', false)
    },
    successAction() {
      this.$emit('successFileFunction')
      this.closeModal()
    },
    onSubmit() {
      if (!this.confirmAllSignAndInitials()) {
        this.$notify.error({
          message: 'Input all signs and initial to save',
        })
        return
      }
 
      if (
        !this.isCreator &&
        !this.$auth.user?.signatureURL &&
        !this.$store.getters.getUserSignature &&
        this.file?.fileAction == FileAction.CONFIRM
      ) {
        this.showInitialModal = true
        return
      }
      this.$emit('startGeneratePdf', true)
      this.appendConfirmSign()
      this.isLoading = true
      // this.proceedToSendEmail = false
      if (!this.isCreator && !this.proceedToSendEmail) {
        this.$notify.info({
          message: 'Pdf generating.....',
          duration: 1000 * 7,
        })
        this.allowLoadingAllAnnotations(6000).then(() => {
          this.publishAsGuest()
          this.$emit('startGeneratePdf', false)
        })
      } else {
        this.publishAsCreator()
      }
      this.$emit('trackSubmitTools', this.tools)
    },
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
