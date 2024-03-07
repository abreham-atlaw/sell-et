<script lang="ts">
import Field from '@/common/forms/fields';
import { defineComponent } from 'vue';
import FileSelectComponent from './FileSelectComponent.vue';
import FileImageComponentVue from '../image/FileImageComponentVue.vue';

export default defineComponent({
props: {
    field: {
        type: Field<File>,
        required: true
    },
    preview: {
        type: Boolean,
        default: true
    }
},
methods: {
    handleFileChange(file: File) {
        this.field.setValue(file);
    }
},
components: {
    FileSelectComponent,
    FileImageComponentVue
}
});
</script>

<template>
    <div class="flex">
        <FileSelectComponent :on-file-selected="handleFileChange" class="my-auto" :text="field.getValue()?.name ?? undefined"/>
        <FileImageComponentVue v-if="preview" class="w-36 h-36 mx-5 my-auto" :file="field.getValue() ?? undefined"/>
    </div>
</template>

