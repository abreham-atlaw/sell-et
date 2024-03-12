<template>

    <div class="py-10 flex flex-col">

        <div class="flex border-2 border-dark h-[20em]">
            <div class="w-1/3 h-full">
                <img :src="instance.image" class="w-full h-full object-cover"/>
            </div>
            <div class="w-2/3 h-full p-10">
                <span class="bg-primary rounded-lg px-5 py-1 text-white">Ticket</span>
                <h1 class="font-bold text-2xl mt-10">{{ instance.title }}</h1>
                <p>{{ instance.description }}</p>
                <div class="my-3"><i class="fa-solid fa-location-dot"></i> Bole, Street Vue.</div>
                <div><i class="fa-regular fa-clock"></i> 2/2/2 at 4:00</div>
            </div>
        </div>
        <div class="bg-light flex flex-wrap mt-10 py-8 space-x-2 ">
            <div v-for="pkg in instance.packages" :key="pkg.title" class=" rounded-lg p-10 text-center mx-10 bg-white" :class="(pkg === selectedPackage)?'border border-primary':''">
                <h3 class="text-2xl">{{ pkg.price }}</h3>
                <div class="text-lg font-bold">{{ pkg.title }}</div>
                <NextButtonComponent class="mt-6" :color="(pkg === selectedPackage)?'primary':'grey'" :on-click="() => {selectPackage(pkg)}" :text="(pkg === selectedPackage)?'Selected':'Select'" :icon="(pkg === selectedPackage)?'fa-solid fa-circle-check':''"/>
            </div>
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
import Ticket, { TicketPackage } from '@/apps/seller/data/models/ticket';

export default defineComponent({
    props: {
        instance: {
            type: Ticket,
            required: true
        },
        onComplete: {
            type: Object as () => ((pkg: TicketPackage) => void),
            required: true
        },
        state: {
            type: AsyncState,
            required: true
        }
    },
    data(){
        return {
            selectedPackage: this.instance.packages[0]
        }
    },
    methods: {
        selectPackage(pkg: TicketPackage){
            this.selectedPackage = pkg;
        },
        complete(){
            this.onComplete(this.selectedPackage);
        }
    },
    components:{
        NextButtonComponent,
    }
})
    
</script>