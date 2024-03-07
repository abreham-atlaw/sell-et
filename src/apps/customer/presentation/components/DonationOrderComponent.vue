<template>
    <div class="py-10 flex flex-col">

        <div class="flex shadow-xl border border-dark h-[20em]">
            <div class="w-1/3 h-full">
                <img :src="instance.image" class="w-full h-full object-cover"/>
            </div>
            <div class="w-2/3 h-full p-10">
                <span class="bg-primary rounded-lg px-5 py-1 text-white">Digital Product</span>
                <h1 class="font-bold text-2xl mt-10">{{ instance.title }}</h1>
                <p>{{ instance.description }}</p>
            </div>
        </div>
        <div class="bg-light">
            <div class="">
                <div class="flex">
                    <span>Target Amount</span>
                    <span class="ml-auto">{{ progress * 100 }}%</span>
                </div>
                <div class="w-full bg-grey rounded-full">
                    <div class="h-2 bg-primary rounded-full" :class="`w-[${progress*100}%]`"></div>
                  </div>
                  
            </div>

            <div class="flex mt-10">
                <div v-for="suggestion in suggestions" :key="suggestion.toString()" @click="() => {setAmount(suggestion)}" class="border border-primary rounded-xl flex mx-auto h-36 w-36">
                    <div class="m-auto">{{  suggestion }} Birr</div>
                </div>
            </div>
            <LabeledFieldComponent label="Enter Custom Amount" class="mt-10 w-64">
                <TextFieldComponent :field="amount" type="number"/>
            </LabeledFieldComponent>
        </div>
        <div class="flex mt-10 ml-auto">
            <NextButtonComponent :state="state" class="ml-auto" :on-click="complete" text="Checkout"/>
        </div>
    </div>

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import NextButtonComponent from '@/apps/core/presentation/components/NextButtonComponent.vue';
import { AsyncState } from '@/common/state/baseState';
import Donation from '@/apps/seller/data/models/donation';
import { TextField } from '@/common/forms/fields';
import TextFieldComponent from '@/common/components/form/TextFieldComponent.vue';
import LabeledFieldComponent from '@/common/components/form/LabeledFieldComponent.vue';

export default defineComponent({
    props: {
        instance: {
            type: Donation,
            required: true
        },
        onComplete: {
            type: Object as () => ((quantity: number) => void),
            required: true
        },
        state: {
            type: AsyncState,
            required: true
        }
    },
    data(){
        let amount = ref(new TextField())
        amount.value.setValue("0");
        return {
            progress: 0.78,
            suggestions: [
                100,
                500, 
                1000
            ],
            amount
        }
    },
    methods: {
        setAmount(x: number){
            this.amount.setValue(x.toString());
        },
        complete(){
            this.onComplete(this.quantity);
        }
    },

    computed:{
        quantity(): number{
            return Number.parseFloat(this.amount.getValue()!);
        }
    },
    components:{
        NextButtonComponent,
        LabeledFieldComponent,
        TextFieldComponent
    }
})


</script>