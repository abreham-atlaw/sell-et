<template>
    <div class="w-full h-full">
      <img v-if="imageUrl" :src="imageUrl" alt="Uploaded file"  class="object-cover w-full h-full"/>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      file: File
    },
    data() {
      return {
        imageUrl: ''
      }
    },
    watch: {
      file(newFile) {
        this.createImageUrl(newFile);
      }
    },
    methods: {
      createImageUrl(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    mounted() {
      if (this.file) {
        this.createImageUrl(this.file);
      }
    }
  }
  </script>
  