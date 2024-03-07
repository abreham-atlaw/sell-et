<script lang="ts">
import CustomerSignupState from '../../application/states/customerSignupState';
import CustomerSignupViewModel from '../../application/viewModels/customerSignupViewModel';
import ViewModelView from '@/common/components/views/ViewModelView.vue';
import CenteredViewComponent from '@/apps/core/presentation/components/CenteredViewComponent.vue';
import SignupViewComponent from '../components/SignupViewComponent.vue';
import { AsyncStatus } from '@/common/state/baseState';
import { ref } from 'vue';

export default {
    components: {
        ViewModelView,
        CenteredViewComponent,
        SignupViewComponent
    },
    data() {
        let state = ref(new CustomerSignupState());
        return {
            state,
            viewModel: new CustomerSignupViewModel(state.value as any)
        }
    },
    watch:{
        state: {
            deep: true,
            handler(newValue: CustomerSignupState){
                if(newValue.status === AsyncStatus.done){
                    this.$router.push("/");
                }
            }
        }
    },
    methods: {
        signup() {
            this.viewModel.signup();
        }
    }
}
</script>

<template>
    <ViewModelView :state="state" :view-model="viewModel">
        <div class="bg-light">
            <CenteredViewComponent>
                <SignupViewComponent :state="state" :form="(state.form as any)" @submit="signup"/>
            </CenteredViewComponent>
        </div>
    </ViewModelView>
</template>

