<script lang="ts">
import {defineComponent} from "vue";

import Home0Img from "@/assets/customer/images/home0.png"
import Home1Img from "@/assets/customer/images/home1.png";
import Home2Img from "@/assets/customer/images/home2.png";
import { ProductType } from "@/apps/seller/data/models/productType";
import BaseButton from "@/common/components/buttons/BaseButton.vue";
import HeaderComponentVue from "../components/HeaderComponentVue.vue";

export default defineComponent({


    data(){
        return {
            Home0Img,
            Home1Img,   
            Home2Img,
            labels: new Map<ProductType, string>([
                [ProductType.digitalProducts, "Digital Product"],
                [ProductType.donation, "Donation"],
                [ProductType.physicalProduct, "Physical Product"],
                [ProductType.ticket, "Ticket"]
            ]),
            icons: new Map<ProductType, string>([
                [ProductType.digitalProducts, "fa-solid fa-file-export"],
                [ProductType.donation, "fa-solid fa-hand-holding-dollar"],
                [ProductType.physicalProduct, "fa-solid fa-cube"],
                [ProductType.ticket, "fa-solid fa-ticket"]
            ]),
            links: new Map<ProductType, string>([
                [ProductType.digitalProducts, "digital-product"],
                [ProductType.donation, "donation"],
                [ProductType.physicalProduct, "physical-product"],
                [ProductType.ticket, "ticket"]
            ]),
        }

    },
    components:{
        BaseButton,
        HeaderComponentVue
    }

})
</script>

<style scoped>
</style>
<template>

    
    <div class="">
        <HeaderComponentVue/>

        <div class="bg-light p-24">
            <div class="rounded-[5em] bg-white flex">
                <div class="w-[35%] mr-auto my-auto p-16">
                    <h1 class="text-4xl font-bold">Buy Anything, Pay Digitally.</h1>
                    <p class="mt-10 text-grey">Easily highlight your most popular work, organize videos and podcast episodes into series.</p>
                </div>
                <div class="w-[55%] rounded-[5em] overflow-clip my-auto">
                    <img :src="Home0Img" class="w-full"/>
                </div>
            </div>

            <div class="mt-36">
                <h2 class="font-bold text-3xl">Explore Categories</h2>
                <div class="flex mt-10 ">

                    <a  class="flex flex-col mx-auto" v-for="category in labels" :href="`/customer/list?category=${links.get(category[0])}`" :key="category[1]">
                        <div class="mx-auto rounded-full w-16 h-16 flex bg-primary text-white">
                            <span :class="icons.get(category[0])" class="m-auto"></span>
                        </div>
                        <p class="mt-5 text-center">{{category[1]}}</p>
                    </a>

                </div>
            </div>
        </div>
        
        <div class="bg-[#95ACCA] flex flex-col p-24">

            <h1 class="text-7xl">Showcase<br/>your work</h1>

            <p class="ml-auto w-[35%] -mt-5">Easily highlight your most popular work, organize videos and podcast episodes into series, and curate collections of posts for specific audiences.</p>

            <div class="w-3/5 mx-auto mt-16">
                <img :src="Home1Img" class="w-full">
            </div>
        </div>

        <div class="bg-[#8AB3FF] flex px-24 py-16">

            <div class="w-1/5 mr-auto">
                <img :src="Home2Img" class="w-full">
            </div>
            <div class="w-[70%] pr-[10%]">
                <h1 class="text-7xl">Turning passions into businesses</h1>
                <div class="flex mt-10">
                    <div class="w-1/3 mr-auto">
                        <h2 class="text-2xl font-bold">More ways to earn</h2>
                        <p class="mt-10">
                            On Patreon, you can build a lasting business outside of the ad-based ecosystem, with revenue streams ranging from membership for offering ongoing benefits, to online shops for selling individual videos, podcast episodes, and more.
                        </p>
                    </div>
                    <div class="w-1/3">
                        <h2 class="text-2xl font-bold">Unlock Growth</h2>
                        <p class="mt-10">
                            Patreon isn’t just for creative growth, it’s for professional growth too. Get in-depth analytics about your fans, dig into powerful relationship management tools, and tap into a growing creator community.
                        </p>
                    </div>
                </div>
                <div class="flex mt-10">
                    <a href="/auth/signup/seller" class="ml-auto">
                        <BaseButton bg="dark" textColor="white" rounded="full" class="ml-auto">Set up shop</BaseButton>
                    </a>
                </div>
            </div>

        </div>



    </div>

</template>

