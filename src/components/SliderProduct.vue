<template>
  <div ref="container" class="keen-slider">
    <div class="keen-slider__slide number-slide1 pr-9">
        <div class="bg-white bg-opacity-60 rounded pt-8 pb-11 px-10">
            <div class="text-grey2 text-base md:text-5xl font-bold mb-8">We Solve Your</div>
            <div class="relative inline-block text-base md:text-5xl font-bold bg-clip-text text-yellow">
                <div class="relative text-yellow w-full z-0">PROBLEM</div>
                <div class="absolute top-0 left-0 text-white w-full z-10 animate-[text_1500ms_ease-in-out_infinite] overflow-hidden">PROBLEM</div>
            </div>
        </div>
    </div>
    <div class="keen-slider__slide number-slide1 pr-9">
        <div class="bg-white bg-opacity-60 rounded pt-8 pb-10 px-10">
            <div class="text-grey2 text-base md:text-5xl font-bold mb-8">We Know You Have</div>
            <div class="relative inline-block text-base md:text-5xl font-bold bg-clip-text text-yellow">
                <div class="relative text-yellow w-full z-0">PROBLEM</div>
                <div class="absolute top-0 left-0 text-white w-full z-10 animate-[text_1500ms_ease-in-out_infinite] overflow-hidden">PROBLEM</div>
            </div>
        </div>
    </div>
    <div v-if="slider"
        @click="gotoNextSlide"
        class="group hover:bg-white bg-yellow rounded-full absolute top-1/2 -translate-y-1/2 right-1 p-3 font-bold">
        <svg class="w-8 h-8 group-hover:text-yellow text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
        </svg>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

import { useKeenSlider } from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'


export default {
    methods: {
        gotoNextSlide(s){
            if(this.current+1 == this.dotHelper.length){
                this.slider.moveToIdx(0);
            }
            else{
                this.slider.next();
            }
        }
    },
    setup(){

        const current = ref(0)
        const [container, slider] = useKeenSlider({
            loop: true,
            mode: 'snap',
            drag:false,
            slides: () => [
                {
                size: 0.9,
                spacing: 0,
                },
                {
                size: 0.9,
                spacing: 0,
                }
            ],
            slideChanged: (s) => {
                current.value = s.track.details.rel
            },
        })

        const dotHelper = computed(() => slider.value ? [...Array(slider.value.track.details.slides.length).keys()] : [])
    
    return { container, current, dotHelper, slider }
    }
}
</script>