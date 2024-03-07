

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({

    props: {
        onFileSelected: {
            type: Function,
            required: true
        },
        text: {
            type: String,
            default: null
        }
    },
    methods: {
        handleFileChange(event: any){
            this.onFileSelected(event.target.files[0]);
        }
    }

})
</script>
<template>

    <label class="cursor-pointer rounded-lg border border-primary p-4 block w-36 h-36 flex overflow-clip">
        
        <div class="flex flex-col m-auto overflow-clip w-24 h-24">
            <i class="fa-solid fa-cloud-arrow-up text-primary mx-auto mt-auto"></i>
            <p class="mt-3 mx-auto">Upload File</p>
            <p class="mt-5 mx-auto text-grey overflow-clip mb-auto">{{ text }}</p>
        </div>

        <input
            id="file-upload"
            type="file"
            class="hidden"
            @change="handleFileChange"
            />
        </label>

</template>