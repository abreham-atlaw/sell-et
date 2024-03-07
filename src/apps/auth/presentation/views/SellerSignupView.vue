<script lang="ts">
import { ref, defineComponent } from 'vue';
import SellerSignupState, { Stage } from '../../application/states/sellerSignupState';
import SellerSignupViewModel from '../../application/viewModels/sellerSignupViewModel';
import ViewModelView from '@/common/components/views/ViewModelView.vue';
import SignupView from '../components/SignupViewComponent.vue';
import CenteredViewComponent from '@/apps/core/presentation/components/CenteredViewComponent.vue';
import SellerProductsTypeComonent from '../components/SellerProductsTypeComponent.vue';
import type { ProductType } from '@/apps/seller/data/models/productType';
import CreateShopComponentVue from '../components/CreateShopComponentVue.vue';
import LoadingView from '@/common/components/views/LoadingView.vue';
import { AsyncStatus } from '@/common/state/baseState';

export default defineComponent({

    data(){
        let state = ref(new SellerSignupState());
        return {
            state,
            viewModel: new SellerSignupViewModel(state.value as any),
            Stage
        }
    },
    components: {
        ViewModelView,
        SignupView,
        CenteredViewComponent,
        SellerProductsTypeComonent,
        CreateShopComponentVue,
        LoadingView
    },
    methods: {

        setAccount(){
            this.viewModel.setAccount();
        },

        selectProductTypes(types: ProductType[]){
            this.viewModel.selectProductTypes(types);
        },

        finish(){
            this.viewModel.createShop();
        }

    },

    watch: {
        state: {
            deep: true,
            handler(newValue: SellerSignupState){
                if(newValue.status == AsyncStatus.done && newValue.seller != null){
                    this.$router.push("/");
                }
            }
        }
    }

})
</script>
<template>
    <ViewModelView :state="state" :view-model="viewModel">

        <div class="bg-light">
            <CenteredViewComponent>

                <div v-if="state.stage == Stage.account" class="">
                    <SignupView :state="state" :form="(state.form as any)" :onSubmit="setAccount"/>
                </div>
                <div v-else-if="state.stage == Stage.productTypes" class="">
                    <SellerProductsTypeComonent :state="(state as any)" :on-selected="selectProductTypes"/>
                </div>
                <div v-else-if="state.stage == Stage.shop" class="">
                    <CreateShopComponentVue :form="(state.shopForm as any)" :state="(state as any)" :on-submit="finish"/>
                </div>
                <div v-else class="h-full">
                    <LoadingView />
                </div>
    
            </CenteredViewComponent>
        </div>

        

    </ViewModelView>
</template>../components/SignupView.vue../components/SignupViewComponent.vue../components/SellerProductsTypeComponent.vue