<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

    props: {
        width: {
            type: Number,
            default: 80
        },
        height: {
            type: Number,
            default: 90
        }
    }

})
</script>
<template>

    <div class="w-full h-screen flex">

        <div :class="`w-[${width}%] h-[${height}%]`" class="m-auto border border-dark shadow-sm bg-white overflow-scroll p-5">
            <slot></slot>
        </div>

    </div>

</template>