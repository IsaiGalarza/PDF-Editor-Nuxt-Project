<template>
  <div>
    <!-- <div class="text-base px-6 py-2 flex items-center bg-paperdazgreen-500 text-white"
      v-if="isConfirm && !isLoading && $auth.loggedIn && isCreator">
      Free user will be asked to scroll to the bottom of last page to click Confirm. A copy with free user signature
      will be sent to all users.
    </div> -->
    <div class="w-full py-1 pb-2 bg-gray-200 sm:bg-lime-200 flex items-center justify-between" v-if="isConfirm && !isCreator && (!isConfirmChecked || !isScrollBottom)">
      <!-- <span class="float-left pt-2 px-2">Scroll to the bottom of file to confirm that you have read.</span> -->
      <span class="float-left py-1 px-2">
        <input type="checkbox" class="ml-1" @change="confrimStart" />
        I  agree to confirm that I have read this file by applying my e-signature to this document. 
      </span>
      <!-- <button class="text-white bg-zinc-500 rounded px-4 py-2 float-right mr-2" @click="cancelConfrim">Cancel</button> -->
      <button class="bg-red-500 w-4 h-4 rounded-full text-xs text-white lg:mr-4 mr-2 sm:hidden" @click="cancelConfrim">x</button>
    </div>
    <div class="flex justify-between items-center h-full bg-gray-200" v-if="!isCreator && isSign && isAgreedSign === -1">
      <span class="float-left m-2 text-[10px] lg:text-sm font-bold d-flex">I agree to apply my electronic signature/initials.
        <input type="checkbox" class="ml-1" @change="checkBoxChange" /></span>
      <button class="bg-red-500 w-4 h-4 rounded-full text-xs text-white lg:mr-4 mr-2 sm:hidden" @click="signCancel">x</button>
    </div>
    <div v-else-if="userRole == 'free_user' && isSign && isAgreedSign === 1"
      class="h-full pt-2 font-bold pl-2 text-[#77b450]">
      You can sign and initial now.
    </div>
    <div v-else-if="userRole == 'free_user' && isSign && isAgreedSign === 0"
      class="h-full pt-2 font-bold pl-2 text-[#77b450]">
      You can't sign and initial action.
    </div>

    <div v-if="(!isLoading && !isCreator && isComplete)"
      class="flex flex-wrap items-center justify-between w-full gap-x-1 gap-y-2 text-[#757575] text-base sm:text-2xl sm:hidden px-2"
      :class="[isConfirm ? 'py-0' : 'py-2']">
      <button class="rounded h-8 w-8 bg-white">-</button>
      <div class="flex items-center">
        <button class="rounded-l-lg h-8 w-24 flex items-center justify-between rounded-r-none p-2 px-3 text-sm" :class="showInsertTools ? 'bg-white' : 'bg-neutral-500 text-white'" @click="showInsertTools = false">
          <group-tools />
          <span>Tools</span>
        </button>
        <button class="rounded-r-lg h-8 w-24 flex items-center justify-between rounded-l-none p-2 px-3 text-sm" :class="!showInsertTools ? 'bg-white' : 'bg-neutral-500 text-white'" @click="showInsertTools = true">
          <group-insert />
          <span>Insert</span>
        </button>
      </div>
      <button class="rounded h-8 w-8 bg-neutral-500 text-white">+</button>
      <button @click="undoFunction" class="rounded h-8 bg-white text-sm px-2">UNDO</button>
    </div>
    <div v-if="(!isLoading && !isCreator && isComplete)"
      class="tools-container-wrapper flex flex-wrap items-center justify-between w-full gap-x-1 gap-y-2 text-[#757575] text-base sm:text-2xl sm:hidden px-2"
      :class="[isConfirm ? 'py-0' : 'py-2']">
      <div v-if="showInsertTools" class="overflow-x-auto flex">
        <!-- <button class="rounded-full h-8 w-20 text-xs" :class="[activeTool == TOOL_TYPE.name ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
        isCreator ? 'opacity-40' : '']" @click="setSelectedType(TOOL_TYPE.name)">
          <user-profile-solid-icon class="mr-1" /> Name
        </button> -->
        <button class="rounded-full h-8 w-20 text-xs" :class="[activeTool == TOOL_TYPE.date ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
        isCreator ? 'opacity-40' : '']" @click="setSelectedType(TOOL_TYPE.date)">
          <calendar-icon class="mr-1" /> Date
        </button>
        <div class="flex">

          <div class="mx-1">
            <button
              class="rounded-full h-8 w-20 flex items-center gap-2 py-1 px-4 text-xs"
              :class="[activeTool == TOOL_TYPE.appendSignature ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
        isCreator ? 'opacity-40' : '']" @click="onSignClick">
              Sign
              <img src="../../assets/img/sign-icon.png" width="18" class="bg-slate-200 p-[2px]" />
            </button>
            <div class="absolute w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-red-600 ml-[55px] cursor-pointer"
              id="signtraybtn"
              @click="() => { showSignTray = !showSignTray; showSignTray && (showInitialTray = false); }"></div>
            <div v-if="(showSignTray)" v-click-outside="handleSignFocusOut"
              class="absolute border-[2px] rounded-lg border-[#84C870] bg-white py-3 pl-5 pr-2 z-10 flex -ml-10 mt-1 tray-mode">
              <img class="absolute-image border py-1 px-6 rounded h-[50px]" :src="signature" />
              <img src="../../assets/img/pencil.png" class="cursor-pointer w-[12px] h-[12px] ml-1 mt-3"
                @click="openSignModal" />
            </div>
          </div>

          <div class="mx-1">
            <button
              class="rounded-full h-8 w-20 flex items-center gap-2 py-1 px-4 tool-item text-xs"
              :class="[activeTool == TOOL_TYPE.appendInitial ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
        isCreator ? 'opacity-40' : '']"  @click="onIƒƒnitialsClick">
              Initial
              <img src="../../assets/img/initial-icon.png" width="18" class="bg-slate-200 p-[2px]" />
            </button>
            <div class="absolute w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-red-600 ml-[55px] cursor-pointer"
              id="initialtraybtn"
              @click="() => { showInitialTray = !showInitialTray; showInitialTray && (showSignTray = false); }">
            </div>
            <div v-if="showInitialTray" v-click-outside="handleInitialFocusOut"
              class="absolute border-[2px] rounded-lg border-[#84C870] bg-white py-3 pl-5 pr-2 z-10 flex -ml-10 mt-1 tray-mode">
              <img class="absolute-image border py-1 px-6 rounded h-[50px]" :src="initial" />
              <img src="../../assets/img/pencil.png" class="cursor-pointer w-[12px] h-[12px] ml-1 mt-3"
                @click="openInitialModal" />
            </div>
          </div>
        </div>
      </div>
      <template v-else>
        <button class="rounded h-8 w-8 text-sm" :class="[activeTool == TOOL_TYPE.text ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
        isCreator ? 'opacity-40' : 'opacity-100']" @click="setSelectedType(TOOL_TYPE.text)">
          <pdf-text-tool-icon />
        </button>
        <button class="rounded h-8 w-8 text-sm" :class="[activeTool == TOOL_TYPE.tick ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
        isCreator ? 'opacity-40' : '']" @click="setSelectedType(TOOL_TYPE.tick)">
          <pdf-tick-icon />
        </button>
        <button class="rounded h-8 w-8 text-sm" :class="[activeTool == TOOL_TYPE.cross ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
        isCreator ? 'opacity-40' : '']" @click="setSelectedType(TOOL_TYPE.cross)">
          <pdf-times-icon />
        </button>
        <button class="rounded h-8 w-8 text-sm" :class="[activeTool == TOOL_TYPE.circle ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
        isCreator ? 'opacity-40' : '']" @click="setSelectedType(TOOL_TYPE.circle)">
          <hollow-circle-icon />
        </button>
        <button class="rounded h-8 w-8 text-sm" :class="[activeTool == TOOL_TYPE.dot ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
        isCreator ? 'opacity-40' : '']" @click="setSelectedType(TOOL_TYPE.dot)">
          <solid-circle-icon />
        </button>
        <button class="rounded h-8 w-8 text-sm" :class="[activeTool == TOOL_TYPE.line ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
        isCreator ? 'opacity-40' : '']" @click="setSelectedType(TOOL_TYPE.line)">
          <pdf-rectangle-tool-icon />
        </button>
        <button class="rounded text-[#FFCF27] h-8 w-8 text-sm" :class="[activeTool == TOOL_TYPE.highlight ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
        isCreator ? 'opacity-40' : '']" @click="setSelectedType(TOOL_TYPE.highlight)">
          <pdf-highlight-tool-icon />
        </button>
        <button class="rounded h-8 w-8 text-sm" :class="[activeTool == TOOL_TYPE.draw ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
        isCreator ? 'opacity-40' : '']" @click="setSelectedType(TOOL_TYPE.draw)">
          <pdf-pen-tool-icon />
        </button>
      </template>
    </div>

    <div v-if="(!isLoading && !isCreator && isComplete)"
      class="tools-container-wrapper hidden sm:flex flex-wrap items-center justify-between w-full gap-x-1 gap-y-2 text-[#757575] text-base sm:text-2xl"
      :class="[isConfirm ? 'py-0' : 'py-2']">
      <button class="rounded h-10 w-24 text-sm" :class="[activeTool == TOOL_TYPE.text ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
      isCreator ? 'opacity-40' : 'opacity-100']" @click="setSelectedType(TOOL_TYPE.text)">
        <pdf-text-tool-icon />
        <abbr class="ml-2">Type</abbr>
      </button>
      
      <div class="rounded h-10 w-20 text-sm relative">
          <span class="inline-flex w-full h-full rounded bg-white overflow-hidden">
            <button class=" h-10 w-10" :class="[activeTool == initialIcon?.type ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
            isCreator ? 'opacity-40' : '']" @click="setSelectedType(initialIcon?.type)">
            <component :is="initialIcon?.component"/>
            </button>
            <button :class="[ showDropDown ? 'turn-up' : 'turn-down']" @click="showDropDown = !showDropDown" class="h-10 w-10 bg-white"><img src="../pdf/assets/chevron_down.svg"/></button>
          </span>
          <div class="drop-down-action shadow-md" :class="[ showDropDown ? 'h-[240px]' : 'h-[0px]']">
            <button v-for="tool in toolsDropdowm" :key="tool.type" 
            class="rounded h-10 w-10" :class="[activeTool == tool.type ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
            isCreator ? 'opacity-40' : '', tool.color]" @click="setSelectedType(tool.type)">
              <component :is="tool.component"/>
            </button>
          </div>
      </div>
 
      <button class="rounded h-10 w-24 text-sm" :class="[activeTool == TOOL_TYPE.date ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
      isCreator ? 'opacity-40' : '']" @click="setSelectedType(TOOL_TYPE.date)">
        <calendar-icon />
        <abbr class="ml-2">Date</abbr>
      </button>
      <!-- <button class="rounded h-10 w-10" :class="[activeTool == TOOL_TYPE.name ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
      isCreator ? 'opacity-40' : '']" @click="setSelectedType(TOOL_TYPE.name)">
        <user-profile-solid-icon />
      </button> -->
      <!-- <zoom-in-out @zoomIn="$emit('zoomIn')" @zoomOut="$emit('zoomOut')" /> -->
      <div class="flex">
        <!-- <div v-if="isComplete && isCreator" class="mx-1">
          <button
            class="cursor-pointer inline-flex items-center gap-2 bg-paperdazgreen-300 py-1 pr-1 pl-2 text-white text-sm" @click="onImageClick">
            Require
            <img src="../../assets/img/require-icon.png" width="18" class="bg-slate-200 p-[2px]" />
          </button>
        </div> -->

        <div class="mx-1">
          <button
            class="rounded h-10 w-28 flex items-center gap-2 py-1 px-4 text-sm"
            :class="[activeTool == TOOL_TYPE.appendSignature ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
            isCreator ? 'opacity-40' : '']" @click="onSignClick">
            <img src="../svg-icons/PdfSignTool.svg" width="18" />
            Sign
            <img
            src="./assets/arrow_down.svg"
            id="signtraybtn"
            @click="() => { showSignTray = !showSignTray; showSignTray && (showInitialTray = false); }"/>
          </button>
          <div v-if="(showSignTray)" v-click-outside="handleSignFocusOut"
            class="absolute border-[2px] rounded-lg border-[#84C870] bg-white py-3 pl-5 pr-2 z-10 flex -ml-10 mt-1 tray-mode">
            <img class="absolute-image border py-1 px-6 rounded h-[50px]" :src="signature" />
            <img src="../../assets/img/pencil.png" class="cursor-pointer w-[12px] h-[12px] ml-1 mt-3"
              @click="openSignModal" />
          </div>
        </div>

        <div class="mx-1">
          <button
            class="rounded h-10 w-28 flex items-center gap-2 py-1 px-4 tool-item text-sm"
            :class="[activeTool == TOOL_TYPE.appendInitial ? 'bg-paperdazgreen-300 text-white' : 'bg-white',
            isCreator ? 'opacity-40' : '']"  @click="onInitialsClick">
            <img src="../svg-icons/PdfinitialTool.svg" width="18" />
            Initial
            <img
            src="./assets/arrow_down.svg"
            id="initialtraybtn"
            @click="() => { showInitialTray = !showInitialTray; showInitialTray && (showSignTray = false); }"/>
          </button>
        
          <div v-if="showInitialTray" v-click-outside="handleInitialFocusOut"
            class="absolute border-[2px] rounded-lg border-[#84C870] bg-white py-3 pl-5 pr-2 z-10 flex -ml-10 mt-1 tray-mode">
            <img class="absolute-image border py-1 px-6 rounded h-[50px]" :src="initial" />
            <img src="../../assets/img/pencil.png" class="cursor-pointer w-[12px] h-[12px] ml-1 mt-3"
              @click="openInitialModal" />
          </div>
        </div>
      </div>

      <button @click="undoFunction" class="rounded h-10 bg-white text-sm">
        <img src="../svg-icons/UndoIcon.svg" class="w-[15px] mr-2" />
        UNDO</button>
    </div>

    <div v-if="isComplete && isCreator && $auth.loggedIn" class="flex items-center justify-between py-1">
      <button class="rounded-md h-8 sm:h-10 flex sm:flex-row-reverse items-center gap-2 py-1 px-3 max-sm:!px-1 tool-item text-sm"
      :class="[activeTool == TOOL_TYPE.appendSignature ? 'bg-paperdazgreen-300 text-white' : 'bg-white']" @click="onSignClick">
        <img src="../../assets/img/sign-icon.png" width="18" class="bg-slate-200 p-[2px]" />
        Sign
      </button>
      <button class="rounded-md h-8 sm:h-10 flex items-center gap-2 py-1 px-3 max-sm:!px-1 tool-item text-sm"
      :class="[activeTool == TOOL_TYPE.appendInitial ? 'bg-paperdazgreen-300 text-white' : 'bg-white']" @click="onInitialsClick">
        <img src="../../assets/img/initial-icon.png" width="18" class="bg-slate-200 p-[2px]" />
        Initial
      </button>
      <button class="rounded-md h-8 sm:h-10 flex items-center gap-2 py-1 px-3 max-sm:!px-1 tool-item text-sm"
      :class="[activeTool == TOOL_TYPE.appendDate ? 'bg-paperdazgreen-300 text-white' : 'bg-white']" @click="onDateClick">
        <img src="../../assets/img/date_icon.svg" width="18" class="bg-slate-200 p-[2px]" />
        Date
      </button>
      <button class="rounded-md h-8 sm:h-10 flex sm:flex-row-reverse items-center gap-2 py-1 px-3 max-sm:!px-1 tool-item text-sm"
      :class="[activeTool == TOOL_TYPE.star ? 'bg-paperdazgreen-300 text-white' : 'bg-white']" @click="onImageClick">  
        <img src="../../assets/img/require-icon.png" width="18" class="bg-slate-200 p-[2px]" />      
        Require
      </button>
      <button @click="undoFunction"
        class="rounded-md h-8 sm:h-10 flex items-center gap-1 py-1 px-3 max-sm:!px-1 tool-item text-sm bg-white text-red-500">
        <undo-icon />
        Undo
      </button>
    </div>

    <div v-if="isSign && isCreator && $auth.loggedIn" class="flex items-center justify-between py-1">
      <button v-if="isSign && isCreator" @click="onSignClick"
        class="rounded-md h-8 sm:h-10 flex sm:flex-row-reverse items-center gap-2 py-1 px-3 max-sm:!px-1 tool-item text-sm"
        :class="[activeTool == TOOL_TYPE.appendSignature ? 'bg-paperdazgreen-300 text-white' : 'bg-white']">
        <img src="../../assets/img/sign-icon.png" width="18" class="bg-slate-200 p-[2px]" />
        Sign
      </button>
      <button
        class="rounded-md h-8 sm:h-10 flex sm:flex-row-reverse items-center gap-2 py-1 px-3 max-sm:!px-1 tool-item text-sm"
        :class="[activeTool == TOOL_TYPE.appendInitial ? 'bg-paperdazgreen-300 text-white' : 'bg-white']"
        @click="onInitialsClick">
        <img src="../../assets/img/initial-icon.png" width="18" class="bg-slate-200 p-[2px]" />
        Initial
      </button>
      <button class="rounded-md h-8 sm:h-10 flex items-center gap-2 py-1 px-3 max-sm:!px-1 tool-item text-sm"
      :class="[activeTool == TOOL_TYPE.appendDate ? 'bg-paperdazgreen-300 text-white' : 'bg-white']" @click="onDateClick">
        <img src="../../assets/img/date_icon.svg" width="18" class="bg-slate-200 p-[2px]" />
        Date
      </button>
      <button class="rounded-md h-8 sm:h-10 flex items-center gap-2 py-1 px-3 max-sm:!px-1 tool-item text-sm"
      :class="[activeTool == TOOL_TYPE.appendName ? 'bg-paperdazgreen-300 text-white' : 'bg-white']" @click="onNameClick">
        <img src="../../assets/img/name_icon.svg" width="18" class="bg-slate-200 p-[2px]" />
        Name
      </button>
      <button @click="undoFunction"
        class="rounded-md h-8 sm:h-10 flex items-center gap-1 py-1 px-3 max-sm:!px-1 tool-item text-sm bg-white text-red-500">
        <undo-icon />
        Undo
      </button>
    </div>

    <draw-or-type-modal v-model="showSignatureModal" :src="`${$auth?.user?.signatureURL}`"
      @image-exported="imageExportedLocal($event, true)" use-default-button />
    <draw-or-type-modal v-model="showInitialsModal" :src="`${$auth?.user?.initialURL}`"
      @image-exported="imageExportedLocal($event, false)" use-default-button />
    <div v-if="isLoading" class="w-full bg-paperdazgray-200 text-center">Loading PDF...</div>
    <pdf-not-logged-user v-model="showPdfNotLoggedInUser" />
    <AlertModal v-model="showAlert" />
  </div>

</template>

<script>
import SaveSignatureInitialsMixin from '~/mixins/SaveSignatureInitialsMixin'
import FileAction from '~/models/FileAction'
import TeamAccess from '~/models/TeamAccess'
import DrawOrTypeModal from '../modals/DrawOrTypeModal.vue'
import CalendarIcon from '../svg-icons/CalendarIcon.vue'
import ExclamationIcon from '../svg-icons/ExclamationIcon.vue'
import HollowCircleIcon from '../svg-icons/HollowCircleIcon.vue'
import PdfHighlightToolIcon from '../svg-icons/PdfHighlightToolIcon.vue'
import PdfPenToolIcon from '../svg-icons/PdfPenToolIcon.vue'
import PdfRectangleToolIcon from '../svg-icons/PdfRectangleToolIcon.vue'
import PdfTextToolIcon from '../svg-icons/PdfTextToolIcon.vue'
import PdfTickIcon from '../svg-icons/PdfTickIcon.vue'
import PdfTimesIcon from '../svg-icons/PdfTimesIcon.vue'
import SolidCircleIcon from '../svg-icons/SolidCircleIcon.vue'
import StarIcon from '../svg-icons/StarIcon.vue'
import UserProfileSolidIcon from '../svg-icons/UserProfileSolidIcon.vue'
import TOOL_TYPE from './data/toolType'
import PdfNotLoggedUser from './modals/PdfNotLoggedUser.vue'
import AlertModal from './modals/AlertModal.vue'
import initialURL from '~/assets/img/initials.png'
import signatureURL from '~/assets/img/sign.png'
import ZoomInOut from '@/components/pdf/ZoomInOut'
import GroupTools from '../svg-icons/GroupTools.vue'
import GroupInsert from '../svg-icons/GroupInsert.vue'
import UndoIcon from '../svg-icons/UndoIcon.vue'


export default {
  components: {
    DrawOrTypeModal,
    PdfTextToolIcon,
    PdfTickIcon,
    PdfTimesIcon,
    SolidCircleIcon,
    HollowCircleIcon,
    PdfRectangleToolIcon,
    PdfHighlightToolIcon,
    PdfPenToolIcon,
    CalendarIcon,
    UserProfileSolidIcon,
    StarIcon,
    ExclamationIcon,
    PdfNotLoggedUser,
    AlertModal,
    ZoomInOut,
    GroupTools,
    GroupInsert,
    UndoIcon,
  },
  mixins: [SaveSignatureInitialsMixin],
  data: () => ({
    showAlert: false,
    selectedType: null,
    activeTool: '',
    components: { PdfTextToolIcon },
    signaturePad: false,
    showSignatureModal: false,
    showInitialsModal: false,
    showPdfNotLoggedInUser: false,
    signAgreeChecked: false,
    initial: null,
    signature: null,
    showInitialTray: false,
    showSignTray: false,
    showInsertTools: false,
    isConfirmChecked: false,
    showDropDown: false,
    agreedConfirmPolicy: false,
    initialIcon:  {
        type: TOOL_TYPE.tick,
        component: 'pdf-tick-icon',
        color: 'text-black'
      },
    toolsDropdowm: [
      {
        type: TOOL_TYPE.cross,
        component: 'pdf-times-icon',
        color: 'text-black'
      },
      {
        type: TOOL_TYPE.circle,
        component: 'hollow-circle-icon',
        color: 'text-black'
      },
      {
        type: TOOL_TYPE.dot,
        component: 'solid-circle-icon',
        color: 'text-black'
      },
      {
        type: TOOL_TYPE.line,
        component: 'pdf-rectangle-tool-icon',
        color: 'text-black'
      },
      {
        type: TOOL_TYPE.highlight,
        component: 'pdf-highlight-tool-icon',
        color: 'text-[#FFCF27]'
      },
      {
        type: TOOL_TYPE.draw,
        component: 'pdf-pen-tool-icon',
        color: 'text-black'
      }
    ]
  }),
  props: {
    file: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: true
    },
    selectedToolType: {},
    openTypeSignModal: Boolean,
    openTypeInitialModal: Boolean,
  },
  emits: ['zoomOut', 'zoomIn', 'cancel', 'confirmChecked'],
  computed: {
    TOOL_TYPE() {
      return TOOL_TYPE
    },
    FrombusinessPage(){
        return JSON.parse(localStorage.getItem("from_publicpage"))?.fromBusiness ?? true
    },
    isCreator() {
      if(this.FrombusinessPage == null) return false
      if(this.FrombusinessPage){
        return false
      } else{
        return true
      }
      // try {
      //   return (this.file.userId == this.$auth?.user?.id) ||
      //     ((this.$auth?.user?.teamAccess == TeamAccess.COMPANY_FILE) && this.$auth?.user?.teamId == this.file.userId)
      // } catch (e) {
      //   return false
      // }
    },
    isConfirm() {
      return String(this.file.fileAction).toLowerCase() === FileAction.CONFIRM
    },
    isComplete() {
      return String(this.file.fileAction).toLowerCase() === FileAction.COMPLETE
    },
    isSign() {
      return String(this.file.fileAction).toLowerCase() === FileAction.SIGNED
    },
    isScrollBottom() {
      return this.$store.state.scrollPosition;
    },
    userRole() {
      return this.$auth?.user?.role || '';
    },
    isAgreedSign() {
      return this.$store.state.agreeSign;
    }
  },
  methods: {
    handleKeyDown(event) {
      if (event.ctrlKey && event.key === 'z') {
       this.undoFunction()
      }
    },
    onImageClick() {
      if (this.isCreator) {
        this.setSelectedType(this.TOOL_TYPE.star)
      }
    },
    onDateClick() {
      if (this.isCreator) {
        this.setSelectedType(this.TOOL_TYPE.appendDate)
      }
    },
    onNameClick() {
      if (this.isCreator) {
        this.setSelectedType(this.TOOL_TYPE.appendName)
      }
    },
    handleInitialFocusOut(e) {
      if (e.target.id !== 'initialtraybtn') {
        this.showInitialTray = false;
      };
    },
    handleSignFocusOut(e) {
      if (e.target.id !== 'signtraybtn') {
        this.showSignTray = false;
      };
    },
    signContinue() {
      if (this.signAgreeChecked) {
        this.$store.commit('SET_AGREE_SIGN', 1);
        this.$emit('check-active-tools')
      } else {
        this.showAlert = true;
      }
    },
    signCancel() {
      this.$store.commit('UN_SET_AGREE_SIGN');
      this.$emit('cancel')
    },
    checkBoxChange(e) {
      this.signAgreeChecked = e.target.checked
      this.signContinue()
    },
    allowAnnotationsSign_Initial(type) {
      switch (this.isCreator && (this.isComplete || this.isSign)) {
        case true:
          if (type == (this.TOOL_TYPE.appendSignature))
            return type == (this.TOOL_TYPE.appendSignature)
          else if (type == this.TOOL_TYPE.appendInitial)
            return type == this.TOOL_TYPE.appendInitial
          else if (type == this.TOOL_TYPE.star)
            return type == this.TOOL_TYPE.star
          else if (type == this.TOOL_TYPE.appendDate)
            return type == this.TOOL_TYPE.appendDate
          else if (type == this.TOOL_TYPE.appendName)
            return type == this.TOOL_TYPE.appendName

        default:
          return this.isCreator ? false : true
      }

    },
    undoFunction() {
      this.$emit('undo')
    },
    imageExportedLocal(image, isSignature) {
      this.$BUS.$emit(
        isSignature ? 'signature-update' : 'initials-update',
        image
      )
      this.imageExported(image, isSignature)
    },
    setSelectedType(type) {
      if (!this.$auth.loggedIn && !this.$store.getters?.getFillAsGuest) {
        !this.$auth.loggedIn ? this.$store.getters.showGuestModal() : null
        return
      }
      if (!this.allowAnnotationsSign_Initial(type)) return

      if (this.selectedType == type) this.selectedType = null
      else this.selectedType = type
      this.$emit('tool-change', this.selectedType)
      this.activeTool = this.selectedType || ''
    },
    downloadPdf() {
      this.$BUS.$emit('download-pdf')
    },
    onSignClick() {
      if (!this.$auth.loggedIn && !this.$store.getters?.getFillAsGuest) {
        !this.$auth.loggedIn ? this.$store.getters.showGuestModal() : null
        return
      }
 
      this.setSelectedType(this.TOOL_TYPE.appendSignature)
    },
    openSignModal() {
      if (!this.isCreator) {
        this.showSignatureModal = true
      }
    },
    openInitialModal() {
      if (!this.isCreator) {
        this.showInitialsModal = true
      }
    },
    onInitialsClick() {
      if (!this.$auth.loggedIn && !this.$store.getters?.getFillAsGuest) {
        !this.$auth.loggedIn ? this.$store.getters.showGuestModal() : null
        return
      }
 
      this.setSelectedType(this.TOOL_TYPE.appendInitial)
    },
    cancelConfrim() {
      window.location.assign('/paperlink-pages')
    },
    changeInitialToBase64() {
      const toDataURL = (url) =>
        fetch(url)
          .then((response) => response.blob())
          .then(
            (blob) =>
              new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onloadend = () => resolve(reader.result)
                reader.onerror = reject
                reader.readAsDataURL(blob)
              })
          )
      this.$auth?.user?.initialURL ? toDataURL(this.$auth?.user?.initialURL).then((dataUrl) => {
        this.initial = dataUrl
      }) : toDataURL(initialURL).then((dataUrl) => {
        this.initial = dataUrl
      });
      this.$auth?.user?.signatureURL ? toDataURL(this.$auth?.user?.signatureURL).then((dataUrl) => {
        this.signature = dataUrl
      }) : toDataURL(signatureURL).then((dataUrl) => {
        this.signature = dataUrl
      })
    },
    confrimStart(e) {
      if (!this.$auth.loggedIn && !this.$store.getters?.getFillAsGuest) {
        this.$store.getters.showGuestModal() 
        e.target.checked = false
        return
      }
      
      this.isConfirmChecked = e.target.checked
      this.$emit('confirmChecked', e.target.checked)
    },
  },
  watch: {
    "$store.getters.getFrombusinessPage"(val){
      console.log(">>>>>>>>>>>>>>>>store-business",val)
    },
    selectedType(){
       if(this.selectedType == TOOL_TYPE.appendDate ||
        this.selectedType == TOOL_TYPE.appendInitial || 
        this.selectedType == TOOL_TYPE.appendSignature || 
        this.selectedType == TOOL_TYPE.appendName || 
        this.selectedType == TOOL_TYPE.date || 
        this.selectedType == TOOL_TYPE.text ||  this.selectedType == null) return

       this.toolsDropdowm = [ ...this.toolsDropdowm, this.initialIcon ]
       const storeInitialIcon = this.toolsDropdowm.filter((item)=> item.type == this.selectedType)[0]
       this.toolsDropdowm = this.toolsDropdowm.filter((item)=> item.type != this.selectedType)
       this.initialIcon = storeInitialIcon
       this.showDropDown = false
    },
    'file.fileAction': function () {
      this.setSelectedType(null)
    },
    selectedToolType: function () {
      this.activeTool = this.selectedToolType == null ? null : this.activeTool
    },
    '$auth.user.initialURL': async function () {
      this.changeInitialToBase64()
    },
    '$auth.user.signatureURL': async function () {
      this.changeInitialToBase64()
    },
    openTypeSignModal: function () {
      if (this.openTypeSignModal) {
        this.showSignatureModal = true
      }
    },
    openTypeInitialModal: function () {
      if (this.openTypeInitialModal) {
        this.showInitialsModal = true
      }
    }
  },
  mounted: function () {
    // console.log(this.openTypeInitialModal);
    this.changeInitialToBase64()
    document.addEventListener('keydown', this.handleKeyDown);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeyDown);
  },
}
</script>

<style lang="scss" scoped>
.tools-container-wrapper {
  button {
    @apply p-2 flex justify-center items-center
  }
}

// .tray-mode {}

// .tray-mode::before {  
//   content: " ";
//   position: absolute;
//   background: white;
//   border: solid 2px #84C870;
//   width: 10px;
//   height: 10px;
//   z-index: 11;
//   transform: rotate(45deg);
//   margin-top: -20px;
// }
.drop-down-action{
    position: absolute;
    top: calc(100% + 5px);
    background-color: white;
    border-radius: 8px;
    left: 0px;
    z-index: 5;
    transition: 0.3s;
    overflow: hidden
}
 .turn-up{
  transition: 0.3s;
  transform: rotateX(180deg)
}
.turn-down{
  transition: 0.3s;
  transform: rotateX(0deg)
}
</style>
