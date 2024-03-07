<template>
    <div class="min-h-screen bg-white flex">
        <nav class="bg-white w-64 p-4 h-full flex flex-col">
            <h1 class="text-2xl font-bold mb-4 text-center">SELL.ET</h1>
            <ul class="mt-16">
                <li class="mb-2" v-for="(item, index) in menuItems" :key="index" :class="(currentPage === item.link)?'text-primary':'text-black'">
                    <a :href="item.link" class="flex items-center hover:bg-gray-200 p-2 rounded">
                    <i :class="item.icon" class="text-2xl mr-5 w-7"></i> {{ item.label }}
                    </a>
                </li>
            </ul>
            <ul class="mt-auto">
                <li class="mb-2" v-for="(item, index) in menuItems2" :key="index" :class="(currentPage === item.link)?'text-primary':'text-black'">
                    <a :href="item.link" class="flex items-center hover:bg-gray-200 p-2 rounded">
                    <i :class="item.icon" class="text-2xl mr-5 w-7"></i> {{ item.label }}
                    </a>
                </li>
            </ul>
            <ul class="mt-10">
                <li class="mb-2" v-for="(item, index) in menuItems3" :key="index" :class="(currentPage === item.link)?'text-primary':'text-black'">
                    <a :href="item.link" class="flex items-center hover:bg-gray-200 p-2 rounded">
                    <i :class="item.icon" class="text-2xl mr-5 w-7"></i> {{ item.label }}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SellerSidebarComponent',
    data() {
        return {
            currentPage: this.$router.currentRoute.value.path,
            menuItems: [
                { label: 'Dashboard', icon: 'fas fa-tachometer-alt', link: '/seller/dashboard' },
                { label: 'Publish', icon: 'fa-solid fa-circle-plus', link: '/seller/publish' },
                { label: 'Sales', icon: 'fas fa-chart-line', link: '/seller/sales' },
                { label: 'Customers', icon: 'fas fa-users', link: '/seller/customers' },
                { label: 'Orders', icon: 'fas fa-shopping-cart', link: '/seller/orders' },
                { label: 'Logistics', icon: 'fa-solid fa-cube', link: '/seller/orders' },
            ],
            menuItems2: [
                { label: 'Support', icon: 'fa-solid fa-headset', link: '/seller/orders' },
                { label: 'Settings', icon: 'fas fa-cog', link: 'seller//settings' },
            ],
            menuItems3: [
                { label: 'Logout', icon: 'fa-solid fa-arrow-right-from-bracket', link: '/auth/logout' },
            ],
            
        };
    },
});
</script>

<style scoped></style>
