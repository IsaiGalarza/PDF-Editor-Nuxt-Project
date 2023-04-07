<template>
  <div class="container lg:py-14 sm:pb-15 sm:pt-10">
    <div
      class="grid grid-cols-1 sm:grid-cols-[1fr,max-content] gap-2 sm:gap-2 md:gap-3 lg:gap-5"
    >
      <div class="text-center sm:text-left">
        <div class="max-w-[740px] flex flex-col justify-between">
          <div
            class="py-lg-4 py-2 slide-in relative"
            v-for="(content, index) in contents"
            :key="index"
            v-if="activeContent == index"
          >
            <h1
              class="font-bold text-4xl md:text-5xl leading-[42px] md:leading-[62px] text-white text-left"
            >
              {{ content.article }}
            </h1>
            <div class="lg:my-12 mt-8 mb-6 font-medium lg:text-2xl text-left">
              <p
                class="text-sm bg-paperdazgreen-500 inline-block p-3 text-white rounded"
                v-html="content.note"
              ></p>
            </div>
          </div>
          <div class="text-left">
            <div class="w-[50%] flex items-center justify-between">
              <button
                class="h-[4px]"
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
      <div class="h-fit">
        <img
          class="w-screen max-h-[600px] sm:max-w-[270px] md:max-w-[320px] lg:max-w-[470px]"
          src="/img/hero_diplay.svg"
        />
      </div>
    </div>
    <div class="flex flex-col justify-between mt-5">
      <div class="py-lg-4 py-2 sm:hidden lg:inline-block">
        <nuxt-link to="/register" class="px-5 py-2 rounded bg-white border-none outline-none inline-block">
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
            'Perfect for small medical clinics to go paperless in minutes!',
          note: `20, 200, 2000 or more people can <br/>
          complete a Paperlink for just $2.00`,
        },
        {
          article:
            'Perfect for small medical clinics to go paperless in minutes!',
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
