<script setup lang="ts">
import { RouterView } from 'vue-router'
import AuthenticatedViewVue from '@/common/components/views/AuthenticatedView.vue';
import AuthenticationStatus from '@/apps/auth/data/models/authenticationStatus';
import SellerSidebarComponent from '../components/SellerSidebarComponentVue.vue';
</script>

<template>
  <div class="h-screen">
    <AuthenticatedViewVue :valid-status="[AuthenticationStatus.seller]">
      <div class="flex h-screen">
        <SellerSidebarComponent/>
        <div class="flex-1 flex flex-col overflow-hidden h-full">
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-black bg-opacity-20 h-full ">
            <div class="h-full">
              <RouterView/>
            </div>
          </main>
        </div>
      </div>
    </AuthenticatedViewVue>
  </div>
</template>../components/SellerSidebarComponentVue.vue../components/SellerSidebarComponent.vue
