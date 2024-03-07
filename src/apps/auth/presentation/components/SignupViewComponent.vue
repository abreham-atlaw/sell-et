<script lang="ts">
import { defineComponent } from 'vue';
import SignupForm from '../../application/forms/signupForm';
import LabeledFieldComponent from '@/common/components/form/LabeledFieldComponent.vue';
import TextFieldComponent from '@/common/components/form/TextFieldComponent.vue';
import { AsyncState } from '@/common/state/baseState';
import ErrorTextVue from '@/common/components/text/ErrorTextVue.vue';
import NextButtonComponent from '@/apps/core/presentation/components/NextButtonComponent.vue';

export default defineComponent({

    props: {
        form: {
            type: SignupForm,
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

            <div class="">
                <i class="fa-solid fa-circle-user text-6xl"></i>
            </div>
            <h2 class="text-4xl mt-3">Create your account</h2>
            <p class="mt-3">Fill the correct information, so your account runs smoothly. Inocorrect information will on your profile might result in a suspension</p>
            
            <ErrorTextVue :error="state.error" />
            <div class="flex flex-wrap mt-5">
                <div class="w-[45%] mr-auto">
                    <LabeledFieldComponent label="First Name">
                        <TextFieldComponent :field="form.firstName" placeholder="Enter First Name"/>
                    </LabeledFieldComponent>
                </div>
                <div class="w-[45%] ml-auto">
                    <LabeledFieldComponent label="Last Name">
                        <TextFieldComponent :field="form.lastName" placeholder="Enter Last Name"/>
                    </LabeledFieldComponent>
                </div>
                <div class="w-[45%] mr-auto mt-5">
                    <LabeledFieldComponent label="Phone Number">
                        <TextFieldComponent :field="form.phoneNumber" placeholder="Enter Phone Number"/>
                    </LabeledFieldComponent>
                </div>
                <div class="w-[45%] ml-auto mt-5">
                    <LabeledFieldComponent label="Email">
                        <TextFieldComponent :field="form.email" placeholder="Enter Email"/>
                    </LabeledFieldComponent>
                </div>
                <div class="w-[45%] mr-auto mt-5">
                    <LabeledFieldComponent label="Password">
                        <TextFieldComponent :field="form.password" placeholder="Enter Password" type="password"/>
                    </LabeledFieldComponent>
                </div>
                <div class="w-[45%] ml-auto mt-5">
                    <LabeledFieldComponent label="Confirm Password">
                        <TextFieldComponent :field="form.confirmPassword" placeholder="Confirm Password" type="password"/>
                    </LabeledFieldComponent>
                </div>

            </div>
            <div class="flex mt-10">
                <NextButtonComponent :state="state"/>
            </div>
        </form>
    </div>
    
</template>../../../core/presentation/components/NextButtonComponent.vue