<template>
    <div class="flex flex-wrap">
        <FileSelectComponent :on-file-selected="handleFileChange" class="my-5"/>
        <div v-for="file in field.getValue()" class="mx-5 w-[20%] my-5" :key="file.name">
            <FileImageComponentVue :file="file" class="h-full"/>
        </div>
    </div>
</template>

<script lang="ts">
import Field from '@/common/forms/fields';
import { defineComponent } from 'vue';
import FileSelectComponent from './FileSelectComponent.vue';
import FileImageComponentVue from '../image/FileImageComponentVue.vue';

export default defineComponent({
props: {
    field: {
        type: Field<File[]>,
        required: true
    }
},
methods: {
    handleFileChange(file: File) {
        if(this.field.getValue() == null){
            this.field.setValue([]);
        }
        let files = this.field.getValue()!.slice();
        files.push(file);
        this.field.setValue(files);
    },
    handleRemoveFile(file: File){
        this.field.setValue(
            this.field.getValue()!.filter(
                (selectedFile: File) => (selectedFile !== file)
            )
        )
    }
},
components: {
    FileSelectComponent,
    FileImageComponentVue
}
});
</script>
