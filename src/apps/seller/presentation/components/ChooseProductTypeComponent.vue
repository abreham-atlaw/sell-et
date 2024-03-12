<script lang="ts">
import { defineComponent } from 'vue';
import { ProductType } from '@/apps/seller/data/models/productType';
import ProductTypeChoiceComponentVue from './ProductTypeChoiceComponentVue.vue';

export default defineComponent({
  props: {
    onSelected: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      ProductType,
      ProductTypeChoiceComponentVue
    };
  },
  components: {
    ProductTypeChoiceComponentVue,
  }
});
</script>

<template>
  <div class="pb-4 px-16">

    <!-- <div class="">
        <i class="fa-solid fa-shop text-6xl"></i>
    </div> -->
    <h2 class="text-4xl mt-5 font-bold">What type of product are<br/>you selling today?</h2>
    <p class="mt-3">Fill the correct information, so your account runs smoothly. Inocorrect information will<br/>on your profile might result in a suspension</p>
    

    <div class="flex flex-wrap mt-8">
		<div v-for="(item, index) in Object.values(ProductType).filter(value => !isNaN(Number(value)))" :key="index" class="w-1/2 mr-auto" :class="`p${(index % 2 == 0)?'r':'l'}-[4%]`">
			<div class="mt-5">
                <ProductTypeChoiceComponentVue :on-select="onSelected" :product-type="(item as ProductType)"/>
            </div>
		</div>
	</div>
  </div>
</template>
