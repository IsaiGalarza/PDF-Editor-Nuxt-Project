<template>
  <div class="container lg:py-20 sm:pb-15 sm:pt-10">
    <div
      class="flex justify-between flex-wrap"
    >
      <div class="text-center sm:text-left md:w-6/12 sm:w-full">
        <div class="max-w-[740px] flex flex-col justify-between w-full">
          <div
            class="py-lg-4 py-2 slide-in relative"
            v-for="(content, index) in contents"
            :key="index"
            v-if="activeContent == index"
          >
            <h1
              class="font-[500] text-3xl md:text-5xl leading-[42px] md:leading-[62px] text-white text-left"
            >
              {{ content.article }}
            </h1>
            <div class="lg:my-12 mt-8 mb-4 font-medium lg:text-2xl text-left">
              <p
                class="text-sm bg-paperdazgreen-500 inline-block p-3 text-white rounded"
                v-html="content.note"
              ></p>
            </div>
          </div>
          <div class="text-left">
            <div class="w-[50%] flex items-center justify-between">
              <button
                class="h-[7px] rounded-[30px]"
                v-for="(content, index) in contents"
                :key="index"
                :style="`width: ${70 / contents.length}%`"
                :class="[activeContent == index ? 'bg-white' : 'bg-white/50']"
                @click="activeContent = index"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div class="h-fit sm:pt-0 pt-4 lg:w-6/12 sm:w-full md:text-right">
        <img
          class="w-full md:w-[90%]"
          src="/img/hero_diplay.svg"
        />
      </div>
    </div>
    <div class="flex flex-col justify-between mt-2 mb-6">
      <div class="py-lg-4 py-2  lg:inline-block">
        <nuxt-link to="/package?tablevel=1" class="px-[110px] py-2 rounded-[15px] bg-white border-none outline-none inline-block">
          Register
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'HeroPage',
  created() {
    setInterval(() => {
      if(this.activeContent === 2){
        this.activeContent = 0
      }else{
        this.activeContent += 1 
      }
    }, 3000) // run timer every second
  },

  data() {
    return {
      activeContent: 0,
      contents: [
        {
          article:
            'Perfect for small medical clinics to go paperless in minutes!',
          note: `20, 200, 2000 or more people can <br/>
          complete a Paperlink for just $2.00`,
        },
        {
          article:
            'Register, upload and Paperlink is created, no reason for not going paperless!',
          note: `20, 200, 2000 or more people can <br/>
          complete a Paperlink for just $2.00`,
        },
        {
          article:
            'Save time and money for everyone!',
          note: `20, 200, 2000 or more people can<br/> 
          complete a Paperlink for just $2.00`,
        },
      ],
    }
  },
})
</script>
<style>
 .slide-in{
  animation: 1s ease-in-out 1 flow-in;
 }
 @keyframes flow-in {
   from {
      opacity: 0
   }
   to {
    opacity: 1
 }
 }
</style>


