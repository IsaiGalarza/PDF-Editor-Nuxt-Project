<template>
  <div
    class="text-field tool"
    attr="star"
    :elemFill="confirmStar"
    ref="starTool"
  >
  <!-- <span v-if="isFirstAction && $store.state.agreeSign == 1" class="toolTip"
  >Sign</span
> -->
    <!-- <svg v-if="!confirmStar" :style="style" viewBox="0 0 37 36" fill="black" xmlns="http://www.w3.org/2000/svg" @mouseover="overHandler" @mouseleave="leaveHandler">
      <path options="fill"
        d="M36.9676 13.9046C36.8894 13.6713 36.6821 13.5012 36.4324 13.4658L24.4516 11.7717L19.0937 1.20887C18.9825 0.988492 18.752 0.849304 18.5003 0.849304C18.2487 0.849304 18.0175 0.988492 17.9069 1.20887L12.5484 11.7723L0.567584 13.4664C0.317902 13.5019 0.111268 13.6713 0.0324561 13.9052C-0.0450315 14.1379 0.0192104 14.3943 0.200015 14.5651L8.87002 22.7875L6.82289 34.3981C6.7805 34.6397 6.88249 34.8839 7.08582 35.0283C7.29046 35.1739 7.56134 35.1926 7.7832 35.0772L18.5003 29.5961L29.2161 35.0772C29.3128 35.1269 29.4195 35.1513 29.5248 35.1513C29.6619 35.1513 29.7983 35.1101 29.9142 35.0283C30.1182 34.8839 30.2202 34.6397 30.1771 34.3981L28.1307 22.7881L36.8007 14.5651C36.9808 14.393 37.0457 14.1372 36.9676 13.9046Z"
        fill="#FFCF27" />
    </svg> -->
    <img
      v-if="!confirmStar && isCreator"
      :width="`${18 * responsiveToolDim.width}px`"
      src="../../../assets/img/require-icon.svg"
    />
    <span v-if="!confirmStar" class="annot-button w-0 h-0 p-0 m-0 border-0"></span>
    <span class="tip" ref="tip" v-if="!confirmStar && !isCreator && tool.discription.length">
      <img @click="confirmStarAction" src="../assets/check_green_icon.svg" class="w-[15px] h-[15px] absolute check-position-left -top-1 check-position z-10"/>
    </span>
    <div 
    v-if="!confirmStar && !isCreator && tool.discription.length"
    :style="scaleStyle"
    ref="toolTip"
    class="w-[180px] text-[11px] arrow-head text-center bg-white p-2 rounded-md transition duration-150">
     <div class="max-h-[200px] overflow-y-auto break-all pt-1"> {{ tool.discription }}</div>
    </div>

   
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'

export default {
  data() {
    return {
      isModalActive: false,
      confirmStar: false,
      isFirstAction: false,
      isActionIndex: null,
      hasAddedOffset: false
    }
  },
  props: {
    scale: Number,
    file: { type: Object, required: true },
    isCreator: Boolean,
    tool: Object,
    responsiveDim: Object,
    responsiveToolDim: Object,
    textareaStyles: Object,
    calcTop: Number,
    calcLeft: Number,
    wrpStyle: Object
  },
  mounted() {
    this.checkToolIndex()
    setTimeout(() => {
    !this.hasAddedOffset ? !this.isCreator && this.$emit('addOffset', 33 ) : null
    this.hasAddedOffset = true
    this.checkToolPosition()
   }, 300);
  },
  computed: {
    scaleStyle() {
      return {
        transform: `scale(${1 * this.responsiveToolDim.width})`,
        transformOrigin: '0 0'
      }
    },
    style() {
      return {
        width: `${(this.scale || 1) * 18 * this.responsiveDim.width}px`,
        height: `${(this.scale || 1) * 24 * this.responsiveDim.height}px`,
      }
    },
    notBtn() {
      return this.notClass
    },

  },
  methods: {
    checkToolPosition(){
      let pageheight = document.querySelectorAll(".pdf-page")[this.tool.pageNumber - 1].clientHeight
      let pagewidth = document.querySelectorAll(".pdf-page")[this.tool.pageNumber - 1].clientWidth
      let elem = this.$refs.toolTip
      let top = Number(this.wrpStyle?.top.replace("px",''))
      let left = Number(this.wrpStyle?.left.replace("px",''))
      
       if((elem.clientHeight + top) > pageheight){
        this.$refs.toolTip.style.top = `-${elem.clientHeight + 20}px`
        this.$refs.tip.className = 'down_tip'
       }
       if((elem.clientWidth + left) > pagewidth){
        this.$refs.toolTip.style.left = `-${elem.clientWidth - 17}px`
       }
       console.log(document.querySelectorAll(".pdf-page")[this.tool.pageNumber - 1], elem.clientWidth)
    },
    checkToolIndex(){
       let bl = document.querySelectorAll('.annot-button')
      Array.from(bl).forEach((element, index) => {
        element == this.$refs.annotbutton &&
          index == 0 &&
          (this.isFirstAction = true) &&
          (this.isActionIndex = index)
      });
    },
    overHandler: function () {
      this.isModalActive = true
    },
    leaveHandler: function () {
      this.isModalActive = false
    },
    confirmStarAction() {
      if(!this.$auth.loggedIn && !this.$store.getters.getFillAsGuest) return ;
      this.$store.commit('CLICK_TOOL_ACTION', this.isActionIndex)
      !this.isCreator && (this.confirmStar = true)
      this.notClass = ''
      setTimeout(() => {
        this.$BUS.$emit('scroll-to-tools')
      }, 200);
    },
  },
  watch: {
    confirmStar(){
      this.$BUS.$emit('scroll-to-tools')
    },
    "$store.getters.getClickAction"(){
      this.checkToolIndex()
  },
  },
}
</script>

<style lang="scss" scoped>
input {
  border: 0.5px solid #e9e9e9;
  background-color: transparent;
  border-radius: 4px;
}
.toolTip{
  position: absolute;
  left: 100%;
  bottom: calc(100% - 4px);
  background-color: yellow;
  border-radius: 2px;
  font-size: 10px;
  color:red;
  font-weight: 600;
  padding: 3px 6px;
  padding-bottom: 8px;
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 19% 75%, 0 99%, 0% 75%);
}

.note-input{
  @apply w-full rounded-md outline-none text-sm bg-white p-2 resize-none md:shadow-md md:shadow-black/30
  min-h-[300px] max-h-[300px] overflow-auto
}
.note-input-pc{
  @apply w-full rounded-md outline-none text-sm bg-white p-2 resize-none md:shadow-md md:shadow-black/30
}
.note-input-pc[placeholder]:empty:before {
  content: 'Type here...';
  opacity: 0.5;
  color: #555;
}
.pop-label{
 @apply  md:shadow-md md:shadow-black/30
}
.input-wrapper{
  @apply rounded-md md:relative md:w-[180px] md:h-auto z-[100]  flex justify-center items-center
}
.text-field:hover .pop-label{
  @apply block
}
.arrow-head{
@apply md:shadow-md md:shadow-black/30 border-[2px] border-paperdazgreen-300 absolute left-[-13px]
}


 .tip{
    position: absolute;
    display: inline-block;
    top: 3px;
    left: -3px
 }
 .tip::before{
  content: "";
  position: absolute;
  border-top: 12px solid transparent;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 16px solid rgb(119 195 96 );
  bottom: 100%;
  right: calc(96% - 19px);
}
.tip::after{
 content: "";
 position: absolute;
 border-top: 9px solid transparent;
 border-left: 9px solid transparent;
 border-right: 9px solid transparent;
 border-bottom: 13px solid white;
 z-index: 9;
 bottom: calc(100% - 1px);
 right: calc(96% - 16px);
}
.down_tip{
  position: absolute;
  display: inline-block;
  top: -17px;
  left: 10px;
  transform: rotateZ(180deg)
}
.down_tip::before{
content: "";
position: absolute;
border-top: 16px solid transparent;
border-left: 12px solid transparent;
border-right: 12px solid transparent;
border-bottom: 12px solid rgb(119 195 96 );
bottom: 100%;
right: calc(96% - 19px);
}
.down_tip::after{
content: "";
position: absolute;
border-top: 13px solid transparent;
border-left: 9px solid transparent;
border-right: 9px solid transparent;
border-bottom: 9px solid white;
z-index: 9;
bottom: calc(100% - 1px);
right: calc(96% - 16px);
}
img{
  max-width: none ;
}
</style>
