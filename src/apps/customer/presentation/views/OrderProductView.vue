<template>
    <ViewModelView :state="state" :view-model="viewModel">
        
        <HeaderComponentVue />
        <CenteredViewComponentVue>

            <a href="/">
                <NextButtonComponent :reverse="true" icon="fa-solid fa-arrow-left" text="Back"/>
            </a>

            <div class="px-2 mt-5">

                <PhysicalProductOrderComponent v-if="state.productType === ProductType.physicalProduct" :on-complete="(quantity) => {viewModel.orderPhysicalProduct(quantity)}" :state="state" :instance="(state.product! as PhysicalProduct)" :form="(state.shippingInfoForm as any)"/>
                
                <TicketOrderComponentVue v-else-if="state.productType === ProductType.ticket" :on-complete="(pkg) => {viewModel.orderTicket(pkg)}" :state="state" :instance="(state.product! as Ticket)"/>
                
                <DigitalProductOrderComponentVue v-else-if="state.productType === ProductType.digitalProducts" :on-complete="() => {viewModel.orderDigitalProduct()}" :state="state" :instance="(state.product! as DigitalProduct)"/>

                <DonationOrderComponent v-else :on-complete="(amount: number) => {viewModel.orderDonation(amount)}" :state="state" :instance="(state.product! as Donation)" />
            </div>
            

        </CenteredViewComponentVue>
        <FooterComponentVue/>

    </ViewModelView>
    
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import OrderProductState from '../../application/states/orderProductState';
import OrderProductViewModel from '../../application/viewModels/orderProductViewModel';
import { ProductType } from '@/apps/seller/data/models/productType';
import CenteredViewComponentVue from '@/apps/core/presentation/components/CenteredViewComponent.vue';
import PhysicalProductOrderComponent from '../components/PhysicalProductOrderComponent.vue';
import type PhysicalProduct from '@/apps/seller/data/models/physicalProduct';
import TicketOrderComponentVue from '../components/TicketOrderComponentVue.vue';
import type Ticket from '@/apps/seller/data/models/ticket';
import ViewModelView from '@/common/components/views/ViewModelView.vue';
import { AsyncStatus } from '@/common/state/baseState';
import DigitalProductOrderComponentVue from '../components/DigitalProductOrderComponentVue.vue';
import DonationOrderComponent from '../components/DonationOrderComponent.vue';
import type Donation from '@/apps/seller/data/models/donation';
import type DigitalProduct from '@/apps/seller/data/models/digitalProduct';
import AuthenticatedView from '@/common/components/views/AuthenticatedView.vue';
import AuthenticationStatus from '@/apps/auth/data/models/authenticationStatus';
import NextButtonComponent from '@/apps/core/presentation/components/NextButtonComponent.vue';
import HeaderComponentVue from '../components/HeaderComponentVue.vue';
import FooterComponentVue from '../components/FooterComponentVue.vue';

const productTypeMap = new Map([
    ["physical-product", ProductType.physicalProduct],
    ["ticket", ProductType.ticket],
    ["digital-product", ProductType.digitalProducts],
    ["donation", ProductType.donation]
])

export default defineComponent({

    data() {
        const id = this.$route.query["id"];
        const category = this.$route.query["category"];
        const productType = productTypeMap.get(category as string)
        let state = ref(new OrderProductState(id as string, productType!));
        return {
            state,
            viewModel: new OrderProductViewModel(state.value as any),
            ProductType,
            AuthenticationStatus
        }
    },
    watch:{
        state: {
            deep: true,
            handler(newValue: OrderProductState){
                if(newValue.status === AsyncStatus.done){
                    window.location = "/payment-error.html";
                }
            }
        }
    },
    components: {
        PhysicalProductOrderComponent,
        CenteredViewComponentVue,
        TicketOrderComponentVue,
        DigitalProductOrderComponentVue,
        DonationOrderComponent,
        NextButtonComponent,
        ViewModelView,
        HeaderComponentVue,
        FooterComponentVue
    }

})
</script>