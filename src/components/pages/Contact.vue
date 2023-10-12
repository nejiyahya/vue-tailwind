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
            <img src="@/assets/images/contact-image.png" class="w-full grayscale brightness-150 absolute bottom-0 left-0">
            <div class="absolute inline-block top-1/2 -translate-y-1/2 right-5 w-3/5 text-right">
                <div class="absolute -top-5 -left-5 border-8 border-r-0 border-b-0 border-yellow w-10 h-10"></div>
                <div class="bg-white bg-opacity-50 rounded pt-8 pb-10 px-10 mb-5 text-left">
                    <div class="text-grey2 text-4xl font-bold mb-8">Type your beautiful name</div>
                    <input type="text" class="p-5 w-full mb-8 rounded text-grey3 text-2xl font-bold" placeholder="in here of course :)" disabled/>
                    <div class="text-grey2 text-4xl font-bold mb-8">Protect your email address</div>
                    <input type="text" class="p-5 w-full mb-8 rounded text-grey3 text-2xl font-bold" placeholder="but not in here :)" disabled/>
                    <button class="bg-yellow text-white text-2xl py-3 px-6 rounded block w-full font-bold">Submit</button>
                </div>
                <div class="absolute -bottom-0 -right-5 border-8 border-l-0 border-t-0 border-yellow w-10 h-10"></div>
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