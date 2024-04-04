<script lang="ts">
import { defineComponent } from 'vue';
import PhysicalProductForm from '../../application/forms/physicalProductForm';
import FormSectionComponent from './FormSectionComponent.vue';
import MultipleFileUploadFieldComponentVue from '@/common/components/form/MultipleFileUploadFieldComponentVue.vue';
import TextFieldComponent from '@/common/components/form/TextFieldComponent.vue';
import LabeledFieldComponent from '@/common/components/form/LabeledFieldComponent.vue';
import TextBoxFieldComponent from '@/common/components/form/TextBoxFieldComponent.vue';
import NextButtonComponent from '@/apps/core/presentation/components/NextButtonComponent.vue';
import { AsyncState } from '@/common/state/baseState';


export default defineComponent({

    props: {
        form: {
            type: PhysicalProductForm,
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
        FormSectionComponent,
        MultipleFileUploadFieldComponentVue,
        TextFieldComponent,
        LabeledFieldComponent,
        TextBoxFieldComponent,
        NextButtonComponent
    }
})
</script>
<template>

    <form @submit.prevent="() => {onSubmit()}">

        <FormSectionComponent note="Add proper sufficient and truthfull that if not misleading to customers" title="Product Image">

            <MultipleFileUploadFieldComponentVue :field="form.productImages"/>

        </FormSectionComponent>

        <FormSectionComponent note="Add proper sufficient and truthfull that if not misleading to customers" title="Product Details" class="mt-20">

            <div class="flex">
                <div class="w-[45%] mr-auto">
                    <LabeledFieldComponent label="Product Title">
                        <TextFieldComponent :field="form.title"/>
                    </LabeledFieldComponent>
                    <LabeledFieldComponent label="Product Price" class="mt-5">
                        <TextFieldComponent :field="(form.price as any)" type="number"/>
                    </LabeledFieldComponent>
                </div>
                <div class="w-[45%]">
                    <LabeledFieldComponent label="Product Description">
                        <TextBoxFieldComponent :field="form.description" class="h-36"/>
                    </LabeledFieldComponent>
                </div>
    
            </div>

        </FormSectionComponent>

        <div class="flex mt-5">
            <NextButtonComponent :state="state"/>
        </div>

    </form>

</template>./FormSectionComponentVue.vue./FormSectionComponent.vue