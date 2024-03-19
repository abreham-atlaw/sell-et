<script lang="ts">
import { defineComponent } from 'vue';
import SellerSignupState from '../../application/states/sellerSignupState';
import { ProductType } from '@/apps/seller/data/models/productType';
import NextButtonComponent from '@/apps/core/presentation/components/NextButtonComponent.vue';
import ProductTypeChoiceComponentVue from '@/apps/seller/presentation/components/ProductTypeChoiceComponentVue.vue';


export default defineComponent({
  props: {
    state: {
      type: SellerSignupState,
      required: true,
    },
    onSelected: {
      type: Function,
      required: true,
    },
  },
  data() {
    let selectedTypes: ProductType[] = [];
    return {
      selectedTypes,
      ProductType,
      labels: new Map<ProductType, string>([
        [ProductType.digitalProducts, "Digital Product"],
        [ProductType.donation, "Donation"],
        [ProductType.onlineCourses, "Online Courses"],
        [ProductType.other, "Other"],
        [ProductType.physicalProduct, "Physical Product"],
        [ProductType.podcast, "Podcast"],
        [ProductType.subscription, "Subscription"],
        [ProductType.ticket, "Ticket"]
    ])
    };
  },
  methods: {
    selectType(type: ProductType) {
      if(this.selectedTypes.includes(type)){
        this.selectedTypes = this.selectedTypes.filter((value) => value != type);
      }
      else{
        this.selectedTypes.push(type);
      }
    },
    isSelected(type: ProductType): boolean {
      return this.selectedTypes.includes(type);
    },
  },
  components: {
    NextButtonComponent,
    ProductTypeChoiceComponentVue
  }
});
</script>

<template>
  <div class="py-6 px-14">

    <!-- <div class="">
        <i class="fa-solid fa-shop text-6xl"></i>
    </div> -->
    <h2 class="text-4xl mt-5 ">What type of product<br/>are you selling today?</h2>
    <p class="mt-3">Fill the correct information, so your account runs smoothly. <br/>Inocorrect information will on your profile might result in a suspension</p>
    

    <div class="flex flex-wrap mt-8">
		<div v-for="(item, index) in Object.values(ProductType).filter(value => !isNaN(Number(value)))" :key="index" class="w-1/2 mr-auto" :class="`p${(index % 2 == 0)?'r':'l'}-[4%]`">
			<label class="block mt-5">
                <input
                    class="hidden w-full bg-white border rounded-lg focus:outline-none font-medium leading-none text-gray-800 py-5 w-full pl-3"
                    type="checkbox"
                    :value="item"
                    v-model="selectedTypes"
                />
                <ProductTypeChoiceComponentVue :is-selected="isSelected(item as ProductType)" :product-type="(item as ProductType)"/>
            </label>
		</div>
	</div>

    <div class="flex mt-10">
        <NextButtonComponent :state="state" :onclick="() => {onSelected(selectedTypes)}" class="mx-auto"/>
    </div>
  </div>
</template>
