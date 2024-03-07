<template>
    <div class="min-h-screen bg-primary flex items-center justify-center">
      <div class="bg-white p-8 rounded shadow-lg text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-16 h-16 mx-auto mb-4 text-green-500">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <h2 class="text-2xl font-semibold text-gray-700">Order Successful</h2>
        <p class="text-gray-600 mt-2">Thank you for your purchase. Your order will be shipped in 2-3 business days.</p>
        <a href="/" class="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 block">Continue Shopping</a>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'OrderSuccessfullView'
  }
  </script>
  
  <style scoped>
  </style>
  