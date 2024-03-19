<script lang="ts">
import { defineComponent } from 'vue';
import LabeledFieldComponent from '@/common/components/form/LabeledFieldComponent.vue';
import TextFieldComponent from '@/common/components/form/TextFieldComponent.vue';
import { AsyncState } from '@/common/state/baseState';
import ShopForm from '../../application/forms/shopForm';
import ErrorTextVue from '@/common/components/text/ErrorTextVue.vue';
import NextButtonComponent from '@/apps/core/presentation/components/NextButtonComponent.vue';


export default defineComponent({

    name: "ErrorText",
    props: {
        form: {
            type: ShopForm,
            required: true
        },
        onSubmit: {
            type: Function,
            required: true
        },
        state: {
            type: AsyncState,
            required: true
        }
    },

    components: {
        LabeledFieldComponent,
        TextFieldComponent,
        NextButtonComponent,
        ErrorTextVue
    }

})

</script>
<template>

    <div class="p-10">
        <form class="flex flex-col" @submit.prevent="() => {onSubmit()}">

            <!-- <div class="">
                <i class="fa-solid fa-shield-halved text-6xl"></i>
            </div> -->
            <h2 class="text-3xl mt-3">Customize your store</h2>
            <p class="mt-3">Select as many as you want. You can change<br/>your store type afterwards also</p>
            
            <ErrorTextVue :error="state.error"/>
            <div class="flex flex-wrap mt-10">
                <div class="w-[45%] mr-auto">
                    <LabeledFieldComponent label="Shop Title">
                        <TextFieldComponent :field="form.title" placeholder="Enter Shop Name"/>
                    </LabeledFieldComponent>
                </div>
                <div class="w-[45%] ml-auto">
                    <LabeledFieldComponent label="Shop Description">
                        <TextFieldComponent :field="form.description" placeholder="Enter Shop Description"/>
                    </LabeledFieldComponent>
                </div>
                <div class="w-[45%] mr-auto mt-5">
                    <LabeledFieldComponent label="Store Link">
                        <TextFieldComponent :field="form.link" placeholder="SELL.ET/"/>
                    </LabeledFieldComponent>
                </div>
                <div class="w-[45%] ml-auto mt-5">
                    <LabeledFieldComponent label="Social Media URL">
                        <TextFieldComponent :field="form.socialMediaUrl" placeholder="Social Media URL"/>
                    </LabeledFieldComponent>
                </div>
            </div>
            <div class="flex mt-10">
                <NextButtonComponent :state="state" text="Finish"/>
            </div>
        </form>
    </div>
    
</template>../../../core/presentation/components/NextButtonComponent.vue