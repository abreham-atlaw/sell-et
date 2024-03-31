<template>
  <footer id="main-footer" class="px-4 py-6">
    <div class="grid grid-cols-4 gap-4">
      <div>
        <h4 class="header-text font-bold mb-2">Creators</h4>
        <a href="/create.html#physical-product" class="text-btn block mb-1 text-blue-500 hover:text-blue-700">Physical Product</a>
        <a href="/create.html#ticket" class="text-btn block mb-1 text-blue-500 hover:text-blue-700">Ticket</a>
        <a href="/create.html#digital-product" class="text-btn block mb-1 text-blue-500 hover:text-blue-700">Digital Product</a>
        <a href="/create.html#donation" class="text-btn block mb-1 text-blue-500 hover:text-blue-700">Donation & Tipping</a>
      </div>
  
      <div>
        <h4 class="header-text font-bold mb-2">Pricing</h4>
        <a href="/pricing.html" class="text-btn block mb-1 text-blue-500 hover:text-blue-700">Transaction Fee</a>
      </div>
  
      <div>
        <h4 class="header-text font-bold mb-2">Resources</h4>
        <a href="/resource.html#resource-sell" class="text-btn block mb-1 text-blue-500 hover:text-blue-700">Learn to sell</a>
        <a href="/resource.html#resource-learn" class="text-btn block mb-1 text-blue-500 hover:text-blue-700">Learn to get customers</a>
      </div>
  
      <div>
        <h4 class="header-text font-bold mb-2">Company</h4>
        <a href="/terms&conditions.html" class="text-btn block mb-1 text-blue-500 hover:text-blue-700">Terms of use & Policies</a>
        <a href="/privacy.html" class="text-btn block mb-1 text-blue-500 hover:text-blue-700">Privacy Policy</a>
      </div>
    </div>
  </footer>
  
      


</template>

<script lang="ts">
import { defineComponent } from 'vue';



export default defineComponent({

});
</script>
<style scoped>

#main-footer{
    height: 50vh;
    background: #000000;
    padding:50px;
  }
  
  #main-footer .header-text{
    font-size:17px;
    color:#FFF;
    margin-bottom: 30px;
  }
  
  #main-footer .text-btn{
    font-size:16px;
    color:#AAA;
    text-decoration: none;
    display: block;
    margin-bottom: 5px;
    transition: 0.3s;
  }
  
  #main-footer .text-btn:hover{
    color:#FFF;
    transition: 0.3s;
  }

</style>