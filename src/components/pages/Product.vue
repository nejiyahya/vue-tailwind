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
                <img src="@/assets/images/product-image.png" class="w-full grayscale brightness-150 absolute bottom-0 left-0 z-0">
                <div class="absolute inline-block top-1/2 -translate-y-1/2 right-5 w-3/5 z-10">
                    <SliderProduct></SliderProduct>
                </div>
            </TransitionChild>
    </TransitionRoot>
</template>

<script>
    import { ref } from 'vue'
    import { TransitionRoot, TransitionChild } from '@headlessui/vue'
    import SliderProduct from '@/components/SliderProduct.vue'

    export default {
        components:{
            TransitionRoot,
            TransitionChild,
            SliderProduct
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