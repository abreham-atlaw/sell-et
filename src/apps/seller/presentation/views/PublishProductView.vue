<!-- eslint-disable @typescript-eslint/no-unused-vars -->



<script lang="ts">
import { defineComponent, ref } from 'vue';
import PublishProductState from '../../application/states/publishProductState';
import PublishProductViewModel from '../../application/viewModels/publishProductViewModel';
import ViewModelView from '@/common/components/views/ViewModelView.vue';
import CenteredViewComponent from '@/apps/core/presentation/components/CenteredViewComponent.vue';
import PublishPhysicalProductComponent from '../components/PublishPhysicalProductComponent.vue';
import { ProductType } from '../../data/models/productType';
import ChooseProductTypeComponent from '../components/ChooseProductTypeComponent.vue';
import NextButtonComponent from '@/apps/core/presentation/components/NextButtonComponent.vue';
import { AsyncStatus } from '@/common/state/baseState';
import ErrorTextVue from '@/common/components/text/ErrorTextVue.vue';
import PublishTicketComponentVue from '../components/PublishTicketComponentVue.vue';
import PublishDigitalProductComponentVue from '../components/PublishDigitalProductComponentVue.vue';
import PublishDonationComponentVue from '../components/PublishDonationComponentVue.vue';
import type TicketForm from '../../application/forms/ticketForm';
import type DigitalProductForm from '../../application/forms/digitalProductForm';
import type PhysicalProductForm from '../../application/forms/physicalProductForm';
import type DonationForm from '../../application/forms/donationForm';

export default defineComponent({
    
    data() {
        let state = ref(new PublishProductState());
        return {
            state,
            viewModel: new PublishProductViewModel(state.value),
            ProductType
        }
    },

    methods: {
        selectProductType(productType: ProductType){
            this.viewModel.chooseProductType(productType);
        },
        resetProductType(){
            this.viewModel.resetProductType();
        }
    },

    watch: {
        state: {
            deep: true,
            handler(newValue: PublishProductState){
                if(newValue.status === AsyncStatus.done){
                    this.$router.push("/");
                }
            }
        }
    },
    components: {
        ViewModelView,
        CenteredViewComponent,
        ChooseProductTypeComponent,
        PublishPhysicalProductComponent,
        NextButtonComponent,
        ErrorTextVue,
        PublishTicketComponentVue,
        PublishDigitalProductComponentVue,
        PublishDonationComponentVue
    }

})

</script>
<template>

    <ViewModelView :state="state" :view-model="viewModel">

        <CenteredViewComponent>

            <ChooseProductTypeComponent v-if="state.productType === undefined" :on-selected="selectProductType"/>
            
            <div v-else class="p-5">

                <NextButtonComponent :reverse="true" icon="fa-solid fa-arrow-left" text="Back" @click="resetProductType"/>

                <ErrorTextVue :error="state.error"/>

                <div class="mt-5">
                    <PublishPhysicalProductComponent
                        v-if="state.productType === ProductType.physicalProduct"
                        :form="(state.form! as PhysicalProductForm)"
                        :on-submit="() => {viewModel.publishPhysicalProduct()}"
                        :state="state"
                    />
                    <PublishTicketComponentVue
                        v-else-if="state.productType === ProductType.ticket"
                        :form="(state.form! as TicketForm)"
                        :on-submit="() => {viewModel.publishTicket()}"
                        :state="state"
                    /> 
                    <PublishDigitalProductComponentVue
                        v-else-if="state.productType === ProductType.digitalProducts"
                        :form="(state.form! as DigitalProductForm)"
                        :on-submit="() => {viewModel.publishDigitalProduct()}"
                        :state="state"
                    /> 
                    <PublishDonationComponentVue
                        v-else-if="state.productType === ProductType.donation"
                        :form="(state.form! as DonationForm)"
                        :on-submit="() => {viewModel.publishDonation()}"
                        :state="state"
                    />
                </div>
                
            </div>

        </CenteredViewComponent>

    </ViewModelView>
</template>