<script lang="ts">
import { AsyncState } from '@/common/state/baseState';
import { defineComponent } from 'vue';
import AsyncButton from '@/common/components/buttons/AsyncButton.vue';
import BaseButton from '@/common/components/buttons/BaseButton.vue';

export default defineComponent({

    props: {
        state: {
            type: AsyncState,
            default: null
        },
        onClick: {
            type: Function,
            default: null
        },
        text: {
            type: String,
            default: "Next"
        },
        reverse: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: "fa-solid fa-arrow-right"
        },
        color: {
            type:String,
            default: "primary"
        }
    },

    components: {
        AsyncButton,
        BaseButton
    }

})
</script>
<template>
    <AsyncButton :bg="color" v-if="state != null" :state="state" class="mx-auto" @click="() => {
        if(onClick != null){
            onClick()
        }
    }">
        <div class="flex" :class="(reverse)?'flex-row-reverse':''">
            <span :class="(reverse)?'ml-20': 'mr-20'">{{ text }}</span>
            <i :class="icon"></i>
        </div>
    </AsyncButton>
    <BaseButton :bg="color" v-else class="mx-auto" @click="() => {
        if(onClick != null){
            onClick()
        }
    }">
        <div class="flex" :class="(reverse)?'flex-row-reverse':''">
            <span :class="(reverse)?'ml-20': 'mr-20'">{{ text }}</span>
            <i :class="icon"></i>
        </div>
    </BaseButton>
</template>