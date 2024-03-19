<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

    props: {
        width: {
            type: Number,
            default: 70
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

        <div :class="`w-[${width}%] h-[${height}%]`" class="m-auto border border-primary shadow-sm bg-white overflow-scroll px-12 py-5">
            <slot></slot>
        </div>

    </div>

</template>