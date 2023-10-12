<template>
    <TransitionRoot
        appear
        :show="isShowing"
        class="md:col-span-3 h-screen overflow-hidden"
        >
        
            <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enter-from="translate-y-full"
                enter-to="translate-y-0"
                leave="transition ease-in-out duration-300 transform"
                leave-from="translate-y-0"
                leave-to="-translate-y-full"
                class="relative overflow-hidden h-screen"
            >
                <img src="@/assets/images/about-image.png" class="md:w-full md:h-auto min-h-full grayscale brightness-150 md:absolute bottom-0 left-0">
                <div class="absolute inline-block top-1/2 -translate-y-1/2 right-5 md:w-3/5 text-right">
                    <div class="absolute -top-5 -left-5 border-8 border-r-0 border-b-0 border-yellow w-10 h-10"></div>
                    <div class="bg-white bg-opacity-60 rounded pt-8 pb-10 px-10 mb-5 text-left">
                        <div class="text-grey2 md:text-6xl text-base font-bold mb-7">Our People Come First</div>
                        <div class="text-3xl font-semibold">We are independently owned, strategic creative agency forever curious and ready to transform the way business is done.</div>
                    </div>
                    <button class="bg-yellow text-white text-2xl py-3 px-6 rounded">Learn More</button>
                </div>
            </TransitionChild>
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
        mounted(){
            this.$nextTick(function () {
                this.isShowing = true;
            })
        },
        setup(props) {
            const isShowing = ref(false)
            return {
                isShowing
            }
        }
    }
</script>