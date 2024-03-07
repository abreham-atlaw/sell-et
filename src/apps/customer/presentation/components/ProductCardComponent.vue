<template>
        
    <div class="bg-white shadow-sm p-5">
        <img :src="instance.image" class="w-full h-[15em] object-cover"/>
        <div class="flex text-2xl mt-5">
            <span class="">{{instance.title}}</span>
            <span class="ml-auto font-bold">{{instance.price}} Birr</span>
        </div>
        <p class="mt-5">
            {{ instance.description }}
        </p>
        <div class="flex mt-5">
            <i class="fa-solid fa-shop my-auto"></i>
            <span class="my-auto text-primary ml-3">{{ instance.shop!.title }}</span>
        </div>
        <a :href="`/customer/order/?id=${instance.id!}&category=${instance.type}`" class="w-full mt-5 block">
            <BaseButton class="w-full">Purchase Now</BaseButton>
        </a>
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