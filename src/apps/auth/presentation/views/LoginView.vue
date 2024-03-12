<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginState from '@/apps/auth/application/states/loginState';
import LoginViewModel from '../../application/viewModels/loginViewModel';
import LabeledFieldComponent from '@/common/components/form/LabeledFieldComponent.vue';
import TextFieldComponent from '@/common/components/form/TextFieldComponent.vue';
import AsyncButtonVue from '@/common/components/buttons/AsyncButton.vue';
import { AsyncStatus } from '@/common/state/baseState';
import BaseButton from '@/common/components/buttons/BaseButton.vue';


export default defineComponent({
    data() {
        let state = ref(new LoginState());
        return {
            AsyncStatus,
            state,
            viewModel: new LoginViewModel(state.value as any)
        };
    },
    methods: {
      login(){
        this.viewModel.login();
      },
      signup(){
        this.$router.push("/auth/signup/customer");
      }
    },
    watch: {
      state: {
        handler(newValue: LoginState){
          if(newValue.status === AsyncStatus.done){
            this.$router.push("/")
          }
        },
        deep: true
      }
    },
    components: { LabeledFieldComponent, TextFieldComponent, AsyncButtonVue, BaseButton }
})
</script>

<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="px-16 py-[6rem] align-center bg-white shadow-md">
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-2xl font-bold">Welcome Back</h2>
        <span class="">Please login to your account</span>
      </div>

      <form class="mt-10 w-[30em]" @submit.prevent="login">
        <div class="text-danger" v-if="state.status === AsyncStatus.failed">Incorrect username or password</div>

        <LabeledFieldComponent label="Email">
          <TextFieldComponent :field="state.form.email" type="email"/>
        </LabeledFieldComponent>
        <LabeledFieldComponent label="Password" class="mt-5">
          <TextFieldComponent :field="state.form.password" type="password"/>
        </LabeledFieldComponent>

        <div class="mt-9 flex">
          <AsyncButtonVue class="block mr-auto w-[12em]" :state="state">Login</AsyncButtonVue>
          <a href="/auth/signup/customer" class="block ml-auto w-[12em]"><BaseButton @click.prevent="signup" bg="white" text-color="dark" class="block w-full mx-auto" :state="state">Create Account</BaseButton></a>
        </div>
      </form>
    </div>
  </div>
</template>