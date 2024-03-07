<script lang="ts">
import { defineComponent } from 'vue';
import DigitalProductForm from '../../application/forms/digitalProductForm';
import FormSectionComponent from './FormSectionComponent.vue';
import TextFieldComponent from '@/common/components/form/TextFieldComponent.vue';
import LabeledFieldComponent from '@/common/components/form/LabeledFieldComponent.vue';
import TextBoxFieldComponent from '@/common/components/form/TextBoxFieldComponent.vue';
import NextButtonComponent from '@/apps/core/presentation/components/NextButtonComponent.vue';
import { AsyncState } from '@/common/state/baseState';
import FileUploadFieldComponent from '@/common/components/form/FileUploadFieldComponent.vue';

export default defineComponent({

    props: {
        form: {
            type: DigitalProductForm,
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
        TextFieldComponent,
        LabeledFieldComponent,
        TextBoxFieldComponent,
        NextButtonComponent,
        FileUploadFieldComponent,
    }
})
</script>
<template>

    <form @submit.prevent="() => {onSubmit()}">

        <FormSectionComponent title="Digital Product Information">

            <div class="flex flex-wrap">
                <div class="w-[45%] mr-auto">
                    <LabeledFieldComponent label="Product Image">
                        <FileUploadFieldComponent :field="form.productImage"/>
                    </LabeledFieldComponent>
                </div>
                <div class="w-[45%]">
                    <LabeledFieldComponent label="Product Description">
                        <TextBoxFieldComponent :field="form.description" class="h-36"/>
                    </LabeledFieldComponent>
                </div>
            </div>
            <div class="flex mt-5">
                <div class="w-[45%] mr-auto mt-10">
                    <LabeledFieldComponent label="Product Title">
                        <TextFieldComponent :field="form.title"/>
                    </LabeledFieldComponent>
                </div>
                <div class="w-[45%] mt-10">
                    <LabeledFieldComponent label="Product Price" class="">
                        <TextFieldComponent :field="(form.price as any)" type="number"/>
                    </LabeledFieldComponent>
                </div>
            </div>

        </FormSectionComponent>

        <FormSectionComponent title="Digital Product File" class="mt-20">

            <div class="flex">
                <div class="mx-auto">
                    <FileUploadFieldComponent :field="form.file" :preview="false"/>
                </div>
            </div>

        </FormSectionComponent>

        <div class="flex mt-5">
            <NextButtonComponent :state="state"/>
        </div>

    </form>

</template>./FormSectionComponentVue.vue