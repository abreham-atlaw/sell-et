<template>
        
    <div class="bg-white shadow-sm">
        <img :src="instance.image" class="w-full h-[15em] object-cover"/>
        <div class="p-4 pb-8">
            <div class="flex mt-2">
            <span class="text-lg">{{instance.title}}</span>
            <span class="ml-auto text-lg font-bold">{{instance.price}} Birr</span>
            </div>
            <p class="mt-5 text-sm text-[#666666]">
                {{ instance.description }}
            </p>
            <div class="flex mt-5">
                <p>By</p>
                <a :href="`/customer/shop/detail?store_id=${instance.shop.id}`" class="my-auto text-primary ml-3">{{ instance.shop!.title }}</a>
            </div>
            <a :href="`/customer/order/?id=${instance.id!}&category=${instance.type}`" class="w-full mt-5 block">
                <BaseButton class="w-full">Purchase Now</BaseButton>
            </a>
            </div>
        </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '@/common/components/buttons/BaseButton.vue';
import type Shop from '@/apps/seller/data/models/shop';


export interface CardProduct{
    image: string,
    title: string,
    description: string,
    price: number,
    shop: Shop,
    type: string,
    id: string,
}

export default defineComponent({
    props: {
        instance: {
            type: Object as () => CardProduct,
            required: true
        }
    },
    components:{
        BaseButton
    }
})

</script>