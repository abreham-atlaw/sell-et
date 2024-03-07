<template>
    <div>

        <div class="flex" v-if="page === Pages.product">
            <div class="w-[45%] mr-auto">
                <img class="w-[100%]" :src="instance.images[0]">
            </div> 
            <div class="w-1/2 p-10 flex flex-col h-full">
                <h1 class="font-bold text-4xl">{{ instance.title }}</h1>
                <p class="mt-10">{{ instance.description }}</p>
                <LabeledFieldComponent label="Amount" class="mt-16">
                    <TextFieldComponent type="number" :field="amount"/>
                </LabeledFieldComponent>
                <div class="mt-24 w-full text-grey">
                    <div class="flex mt-5">
                        <span class="mr-auto">Unit Price</span>
                        <span>{{ instance.price }} Birr</span>
                    </div>
                    <div class="flex mt-5">
                        <span class="mr-auto">Delivery Fee</span>
                        <span>{{ deliveryFee }} Birr</span>
                    </div>
                    <div class="flex mt-5 font-bold">
                        <span class="mr-auto text-dark">Total Price</span>
                        <span class="text-primary">{{ total }} Birr</span>
                    </div>
                </div>
                <div class="flex ml-auto mt-16">
                    <NextButtonComponent text="Shipping" @click="next" class="ml-auto"/>
                </div>
            </div>
        </div>
        
        <div v-if="page === Pages.shipping" class="my-24">
            <FormSectionComponentVue title="Shipping Information">
                <div class="flex flex-wrap">
                    <div class="w-[45%] mr-auto">
                        <LabeledFieldComponent label="Drop-off Location">
                            <TextFieldComponent :field="form.location"/>
                        </LabeledFieldComponent>
                        <LabeledFieldComponent label="Contact Number" class="mt-10">
                            <TextFieldComponent :field="form.contactNumber"/>
                        </LabeledFieldComponent>
                    </div>
                    <div class="w-[45%]">
                        <LabeledFieldComponent label="Personal Note">
                            <TextBoxFieldComponent :field="form.personalNote" class="h-36"/>
                        </LabeledFieldComponent>
                    </div>
                </div>
            </FormSectionComponentVue>
            <div class="flex mt-10">
                <NextButtonComponent :state="state" :on-click="() => {complete()}" text="Pay"/>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import PhysicalProduct from '@/apps/seller/data/models/physicalProduct';
import { defineComponent, ref } from 'vue';
import { TextField } from '@/common/forms/fields';
import TextFieldComponent from '@/common/components/form/TextFieldComponent.vue';
import TextBoxFieldComponent from '@/common/components/form/TextBoxFieldComponent.vue';
import NextButtonComponent from '@/apps/core/presentation/components/NextButtonComponent.vue';
import { AsyncState } from '@/common/state/baseState';
import FormSectionComponentVue from '@/apps/seller/presentation/components/FormSectionComponent.vue';
import ShippingInfoForm from '../../application/forms/shippingInfoForm';
import LabeledFieldComponent from '@/common/components/form/LabeledFieldComponent.vue';


enum Pages{
    product,
    shipping
}

export default defineComponent({
    props: {
        instance: {
            type: PhysicalProduct,
            required: true
        },
        onComplete: {
            type: Object as () => ((quantity: number) => void),
            required: true
        },
        state: {
            type: AsyncState,
            required: true
        },
        form: {
            type: ShippingInfoForm,
            required: true
        }
    },
    data(){
        let amount = ref(new TextField());
        amount.value.setValue("1");
        return {
            amount,
            deliveryFee: 200,
            page: Pages.product,
            Pages
        }
    },
    methods: {
        async next(){
            if(!(await this.amount.isValid())){
                return;
            }
            this.page = Pages.shipping;
        },
        complete(){
            this.onComplete(this.quantity);
        }
    },
    computed: {
        quantity(): number{
            if(this.amount.getValue() == null){
                return 1;
            }
            return Number.parseFloat(this.amount.getValue()!);
        },
        total(){
            return (this.quantity * this.instance.price) + this.deliveryFee
        }
    },
    components:{
        FormSectionComponentVue,
        NextButtonComponent,
        TextFieldComponent,
        TextBoxFieldComponent,
        LabeledFieldComponent
    }
})
    

</script>