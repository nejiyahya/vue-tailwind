<template>
        <TransitionRoot
        appear
        :show="isShowing"
        >
            <section id="home-section" class="flex md:block items-center py-10 h-screen overflow-hidden">
                <div class="group/home md:h-full md:mx-12 relative">
                    <TransitionChild
                            enter="transition ease-in-out duration-300 transform"
                            enter-from="translate-x-full"
                            enter-to="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leave-from="translate-x-0"
                            leave-to="translate-x-full"
                            class="peer flex-1 relative md:h-full overflow-hidden z-0"
                        >
                        <img src="@/assets/images/home-image.png" class="group-hover/home:scale-125 ease-in-out delay-300 duration-300 grayscale group-hover/home:grayscale-0 w-full md:absolute md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 z-0"/>
                    
                    </TransitionChild>
                    <div
                    class="transition peer-hover:scale-105 peer-hover:translate-x-4 ease-in-out delay-300 duration-300 text-6xl md:text-8xl absolute z-10 font-bold text-yellow -top-7 md:-top-9 md:-left-9">
                        We Create
                    </div>
                    <button class="group/button hover:bg-yellow text-yellow hover:text-white flex items-center absolute z-10 text-4xl md:text-7xl font-bold -bottom-7 md:-left-8 py-2 px-2 rounded"  @click="gotoPage('about')">
                        <div class="group-hover:text-white group-hover/home:-translate-x-0 -translate-x-1000 duration-300 mr-2">AWESOME TGS</div>
                        <svg class="group-hover:text-white group-hover/home:-translate-x-0 translate-x-1000 duration-300 w-11" aria-h="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>

                    <span class="absolute bg-yellow -top-9 -right-10 w-0 peer-hover:w-line1 h-5 ease-in-out delay-300 duration-300"></span>
                    <span class="absolute bg-yellow -top-9 right-linemargin w-0 peer-hover:w-line2 h-5 ease-in-out delay-300 duration-300"></span>
                    <span class="absolute bg-yellow -bottom-10 -left-10 w-0 peer-hover:w-line1 h-5 ease-in-out delay-300 duration-300"></span>
                    <span class="absolute bg-yellow -bottom-10 left-linemargin w-0 peer-hover:w-line2 h-5 ease-in-out delay-300 duration-300"></span>
                </div>
            </section>
        </TransitionRoot>
</template>

<script>
    import { ref } from 'vue'
    import { TransitionRoot, TransitionChild } from '@headlessui/vue'

    export default {
        components:{
            TransitionRoot,
            TransitionChild
        },
        methods:{
            gotoPage(page){
                this.isShowing = true;
                setTimeout(() => {
                    this.$emit('gotoPage', page)
                    this.isShowing = false;
                }, 500)
            }
        },
        setup(props) {
            const isShowing = ref(false)
            return {
                isShowing
            }
        },
        mounted() {
            this.isShowing = true;
        }
    }
</script>