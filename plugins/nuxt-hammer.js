import Vue from 'vue'
import { NuxtHammer } from 'nuxt-hammer'

NuxtHammer.config.swipe = {
    threshold: 0
};

Vue.use(NuxtHammer)
