<template>
    <LoadingView></LoadingView>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Authenticator from '../../data/repositories/authenticator';
import LoadingView from '@/common/components/views/LoadingView.vue';


export default defineComponent({
    mounted() {
        const authetictor = new Authenticator();
        authetictor.logout().finally(
            () => {
                this.$router.push("/");
            }
        );
    },
    components:{
        LoadingView
    }
})
</script>