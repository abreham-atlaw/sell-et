<template>
    <div class="min-h-screen bg-white flex">
        <nav :class="`bg-white ${collapsed ? 'w-20' : 'w-64'} p-4 h-full flex flex-col`">
            <button @click="toggleSidebar" class="mt-8">
                <i class="fas fa-bars text-xl"></i> <!-- You can use a different icon -->
            </button>
            <!-- <h1 class="text-2xl font-bold mb-4 text-center" :class="{'hidden': collapsed}">SELL.ET</h1> -->
            <ul class="mt-4">
                <li class="mb-2" v-for="(item, index) in menuItems" :key="index" :class="[(currentPage === item.link) ? 'text-primary' : 'text-black', collapsed ? 'justify-center' : '']">
                    <a :href="item.link" class="flex items-center hover:bg-gray-200 p-2 rounded">
                    <i :class="item.icon" class="text-2xl mr-5 w-7"></i> <span :class="{'hidden': collapsed}">{{ item.label }}</span>
                    </a>
                </li>
            </ul>
            <ul class="mt-auto">
                <li class="mb-2" v-for="(item, index) in menuItems3" :key="index" :class="[(currentPage === item.link) ? 'text-primary' : 'text-black', collapsed ? 'justify-center' : '']">
                    <a :href="item.link" class="flex items-center hover:bg-gray-200 p-2 rounded">
                    <i :class="item.icon" class="text-2xl mr-5 w-7"></i> <span :class="{'hidden': collapsed}">{{ item.label }}</span>
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
            collapsed: false, // Add this line
            currentPage: this.$router.currentRoute.value.path,
            menuItems: [
                { label: 'Dashboard', icon: 'fas fa-chart-pie', link: '/seller/dashboard' }, // Lighter dashboard icon
                { label: 'Publish', icon: 'far fa-plus-square', link: '/seller/publish' }, // Lighter publish icon
                { label: 'Sales', icon: 'far fa-chart-bar', link: '/seller/sales' }, // Lighter sales chart icon
                { label: 'Customers', icon: 'far fa-user-circle', link: '/seller/customers' }, // Lighter customers icon
                { label: 'Orders', icon: 'fas fa-receipt', link: '/seller/orders' }, // Lighter orders icon
                { label: "Logistics", icon: 'fa-solid fa-truck-fast', link: '/admin-logistics.html'}
                ],
                // menuItems2: [
                // { label: 'Settings', icon: 'fas fa-tools', link: 'seller//settings' }, // Lighter settings icon
                // ],
                menuItems3: [
                { label: 'Logout', icon: 'fas fa-door-open', link: '/auth/logout' }, // Lighter logout icon
            ],

        };
    },
    methods: {
        toggleSidebar() {
            this.collapsed = !this.collapsed;
        },
    },
});
</script>

<style scoped></style>
