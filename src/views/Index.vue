<template>
        <Home v-if="page=='home'" @goto-page="gotoPage" :page="page"></Home>

        <div v-else class="min-h-screen md:grid md:grid-cols-5 gap-0">
            <div class="md:col-span-2 relative z-10">
                <div :class="isChange?'animate-[sliding-down_400ms_ease-in-out]':'animate-[sliding-up_400ms_ease-in-out]'" class="bg-yellow h-10 md:h-12">
                    <button class="text-white flex items-center text-base font-bold p-5 rounded" @click="gotoPage('home')">
                        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        <div class="ml-2">Back</div>
                    </button>
                </div>
                <div class="md:inline-block flex text-left md:absolute md:right-0 md:translate-x-1/2 md:top-1/2 md:-translate-y-1/2 mt-11 text-base md:text-6xl font-bold whitespace-nowrap">
                    <a @click.stop.prevent="gotoPage('about')" :class="{'text-yellow':page=='about','text-grey':page!='about'}" class="flex items-center mb-9 mx-2">
                        <span :class="(page!='about'&&isChange?'invisible':'')+(isChange?' animate-[link-in_400ms_ease-in-out]':(prev=='about'?' animate-[link-out_400ms_ease-in-out]':'invisible'))" class="absolute -translate-x-full bg-yellow h-3 w-128 -ml-5"></span>
                        <span>About Us</span>
                    </a>
                    <a @click.stop.prevent="gotoPage('product')" :class="{'text-yellow':page=='product','text-grey':page!='product'}" class="flex items-center mb-9 mx-2 hover:opacity-60">
                        <span :class="(page!='product'&&isChange?'invisible':'')+(isChange?' animate-[link-in_400ms_ease-in-out]':(prev=='product'?' animate-[link-out_400ms_ease-in-out]':'invisible'))" class="absolute -translate-x-full bg-yellow h-3 w-128 -ml-5"></span>
                        Our Product
                    </a>
                    <a @click.stop.prevent="gotoPage('contact')" :class="{'text-yellow':page=='contact','text-grey':page!='contact'}" class="flex items-center mb-9 mx-2 hover:opacity-60">
                        <span :class="(page!='contact'&&isChange?'invisible':'')+(isChange?' animate-[link-in_400ms_ease-in-out]':(prev=='contact'?' animate-[link-out_400ms_ease-in-out]':'invisible'))" class="absolute -translate-x-full bg-yellow h-3 w-128 -ml-5"></span>
                        Contact Us
                    </a>
                </div>
            </div>

            <About v-if="page=='about'" ref="about"></About>
            <Product v-else-if="page=='product'" ref="product"></Product>
            <Contact v-else-if="page=='contact'" ref="contact"></Contact>
        </div>
</template>

<script>
    import {ref} from 'vue'
    import Home from '@/components/pages/Home.vue'
    import About from '@/components/pages/About.vue'
    import Product from '@/components/pages/Product.vue'
    import Contact from '@/components/pages/Contact.vue'

    export default{
        methods:{
            gotoPage(param){
                this.prev = this.page;
                if(this[this.page]){
                    this[this.page].isShowing=false;
                    this.isChange = false;
                }

                setTimeout(() => {
                    if(this.page != param){
                        this.page = param;
                    }
                }, 10)

                setTimeout(() => {
                    if(this.page == param){
                        this[this.page].isShowing=true;
                    }
                    this.isChange = true;
                }, 300)
            }
        },
        components:{
            Home,
            About,
            Product,
            Contact
        },
        setup(){
            const about = ref(null);
            const product = ref(null);
            const contact = ref(null);
            const page = ref('home')
            const isChange = ref(false);
            const prev = ref('home');
            return {page,isChange,about,product,contact}
        }
    }
</script>