<template>
    <div class=" bg-white h-full justify-center flex-col md:flex-row flex w-full items-end flex-1 py-4 px-4">
        <div class="w-full justify-center   md:w-[80%]  text-[0.8rem] items-center flex md:justify-end md:pr-3 text-[#B9B8C1]">
            <p class="text-center">© Paperdaz LLC, 1968 S Coast Hwy Suite 4302, Laguna Beach CA 92651 </p>
        </div>

        <div class=" w-full justify-center md:justify-start flex mt-3 md:items-end md:mt-0 items-center   pl-6">
            <nuxt-link to="/terms-condition" class="text-[0.8rem]  md:py-0  px-3">
                Terms of Use
            </nuxt-link>
            <nuxt-link to="/privacy-policy" class="text-[0.8rem] md:py-0  px-3">
                Privacy Policy
            </nuxt-link>
            <nuxt-link to="/contact-us-landing" class="text-[0.8rem] md:py-0  px-3">
                Contact Us
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Footer'
}
</script>

