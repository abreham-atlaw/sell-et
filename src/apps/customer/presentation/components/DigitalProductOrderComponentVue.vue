<template>
    <div class="py-10 flex flex-col">

        <div class="flex  border-2 border-dark h-[20em]">
            <div class="w-1/3 h-full">
                <img :src="instance.image" class="w-full h-full object-cover"/>
            </div>
            <div class="w-2/3 h-full p-10">
                <span class="bg-primary rounded-lg px-5 py-1 text-white">Digital Product</span>
                <h1 class="font-bold text-2xl mt-10">{{ instance.title }}</h1>
                <p>{{ instance.description }}</p>
            </div>
        </div>
        <div class="p-10 flex bg-light mt-10">
            <span class="text-6xl">
                <i class="fa-solid fa-file"></i>
            </span>
            <div class="ml-10">
                <h2 class="text-3xl">{{ instance.title }}</h2>
                <span>250 MB</span>
            </div>
            <span class="text-primary font-bold text-3xl ml-auto">
                {{ instance.price }} Birr
            </span>



        </div>
        <div class="flex mt-10 ml-auto">
            <NextButtonComponent :state="state" class="ml-auto" :on-click="complete" text="Checkout"/>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NextButtonComponent from '@/apps/core/presentation/components/NextButtonComponent.vue';
import { AsyncState } from '@/common/state/baseState';
import DigitalProduct from '@/apps/seller/data/models/digitalProduct';

export default defineComponent({
    props: {
        instance: {
            type: DigitalProduct,
            required: true
        },
        onComplete: {
            type: Object as () => (() => void),
            required: true
        },
        state: {
            type: AsyncState,
            required: true
        }
    },
    methods: {
        complete(){
            this.onComplete();
        }
    },
    components:{
        NextButtonComponent,
    }
})

</script>