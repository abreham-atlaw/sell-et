<script lang="ts">
import { defineComponent } from 'vue';
import TicketForm from '../../application/forms/ticketForm';
import FormSectionComponent from './FormSectionComponent.vue';
import TextFieldComponent from '@/common/components/form/TextFieldComponent.vue';
import LabeledFieldComponent from '@/common/components/form/LabeledFieldComponent.vue';
import TextBoxFieldComponent from '@/common/components/form/TextBoxFieldComponent.vue';
import NextButtonComponent from '@/apps/core/presentation/components/NextButtonComponent.vue';
import { AsyncState } from '@/common/state/baseState';
import FileUploadFieldComponent from '@/common/components/form/FileUploadFieldComponent.vue';
import TicketPackagesInputComponent from './TicketPackagesInputComponent.vue';

export default defineComponent({

    props: {
        form: {
            type: TicketForm,
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
        TicketPackagesInputComponent
    }
})
</script>
<template>

    <form @submit.prevent="() => {onSubmit()}">

        <FormSectionComponent note="Add proper sufficient and truthfull that if not misleading to customers" title="Ticket Details">

            <div class="flex flex-wrap">
                <div class="w-[45%] mr-auto">
                    <LabeledFieldComponent label="Product Image">
                        <FileUploadFieldComponent :field="form.ticketImage"/>
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

        <FormSectionComponent note="Add proper sufficient and truthfull that if not misleading to customers" title="Ticket Package" class="mt-20">

            <TicketPackagesInputComponent :field="form.packages"/>

        </FormSectionComponent>

        <div class="flex mt-5">
            <NextButtonComponent :state="state"/>
        </div>

    </form>

</template>./FormSectionComponentVue.vue