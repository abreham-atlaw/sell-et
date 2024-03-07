<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({

    props: {
        error: {
            type: Error,
            default: null
        }
    }

})
</script>
<template>

    <p v-if="error != null" class="text-danger">{{error.message}}</p>

</template>