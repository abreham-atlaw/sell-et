

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        },
        note: {
            type: String,
            default: null
        }
    }
})

</script>
<template>

    <div class="">
        
        <div class="border border-dark flex px-10 py-5">
            <h3>{{title}}</h3>
            <p v-if="note != null">{{note}}</p>
        </div>

        <div class="p-10 border border-dark">
            <slot></slot>
        </div>

    </div>

</template>