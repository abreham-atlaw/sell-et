

<template>

    <div class="h-screen flex">
        <div class="m-auto w-[90%] h-[90%] text-2xl">
            <h1 class="text-5xl font-bold">Orders</h1>
            <div class="flex border border-primary border-2 rounded-xl py-6 mt-10">
                <div class="mx-auto" v-for="title in ['User Name', 'Phone Number', 'Total Purchase', 'Purchased Item']" :key="title">
                    {{ title }}
                </div>
            </div>
            <div class="flex flex-col border border-primary border-2 h-[70%] rounded-xl mt-5">
                <div class="m-auto text-center">
                    <i class="fa-solid fa-circle-info text-7xl"></i>
                    <p class="m-auto text-center mt-5">No customer has purchased your<br/>products yet.</p>
                </div>
        </div>
        </div>
        

    </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({

})
</script>