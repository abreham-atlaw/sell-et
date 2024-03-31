<template>

    <ViewModelView :state="state" :view-model="viewModel">

        <div class="">

            <HeaderComponentVue />

            
            <section class="">
                <div :style="{
                    backgroundImage: 'url(' + TicketBackgroundImg + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }" class=" text-light py-28 px-16">
                    
    
    
                </div>
                <div class="flex justify-center ">
                  <div class="w-full lg:w-1/3 rounded-[30px] flex flex-col" id="profile-container">
                    <img 
                    src="https://media.gq.com/photos/5582d72009f0bee564402435/16:9/w_1280,c_limit/style-2013-05-daft-punk-daft-punk-630.jpg" 
                    class="rounded-full object-cover w-48 h-48 mx-auto border border-8 -mt-24"
                    >
                    <br><br>
                    <div class="flex flex-wrap">
                      <div class="w-full lg:w-1/2">
                        <h6 class="main-text">Store Name</h6>
                      </div>
              
                      <div class="w-full lg:w-1/2">
                        <h6 class="sub-text">{{ state.instance!.title }}</h6>
                      </div>
              
                      <div class="w-full lg:w-1/2">
                        <h6 class="main-text">Store Description</h6>
                      </div>
              
                      <div class="w-full lg:w-1/2">
                        <h6 class="sub-text">{{ state.instance!.description }}</h6>
                      </div>
              
                      <div class="w-full lg:w-1/2">
                        <h6 class="main-text">Social Media Link</h6>
                      </div>
              
                      <div class="w-full lg:w-1/2">
                        <h6 class="sub-text">{{ state.instance!.socialMediaUrl }}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              <section id="product-listing" class="p-12 mt-10">
                <div class="container mx-auto">
                  <h1 class="text-center text-5xl">Choose your ticket</h1>
                  <p class="text-secondary text-center">Fill the correct information, so your account runs smoothly. <br>Inocorrect information will on your profile might result in a suspension</p>
              
                  <div class="flex flex-wrap items-center justify-center mt-8">
                    <div v-for="instance in state.products!" class="w-1/3 px-12 my-5" :key="(instance.id as string)">
                        <ProductCardComponent :instance="createCardProduct(instance)"/>
                    </div>
                </div>
              
                  <div class="flex justify-center" id="product-gear">
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                      <div class="flex justify-between">
                        <div class="w-1/6">
                          <a href="#" class="flat-link">
                            <i class="bi bi-chevron-left" id="main-icon"></i>
                          </a>
                        </div>
                        <div class="w-1/6">
                          <a href="#" class="flat-link">
                            <i class="bi bi-1-square-fill" id="main-icon"></i>
                          </a>
                        </div>
                        <div class="w-1/6">
                          <a href="#" class="flat-link">
                            <i class="bi bi-2-square" id="main-icon-grey"></i>
                          </a>
                        </div>
                        <div class="w-1/6">
                          <a href="#" class="flat-link">
                            <i class="bi bi-3-square" id="main-icon-grey"></i>
                          </a>
                        </div>
                        <div class="w-1/6">
                          <a href="#" class="flat-link">
                            <i class="bi bi-4-square" id="main-icon-grey"></i>
                          </a>
                        </div>
                        <div class="w-1/6">
                          <a href="#" class="flat-link">
                            <i class="bi bi-chevron-right" id="main-icon-grey"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </section>
              
              
        </div>
    
    </ViewModelView>


</template>


<script lang="ts">


import { defineComponent, ref } from 'vue';
import ViewModelView from '@/common/components/views/ViewModelView.vue';
import HeaderComponentVue from '../components/HeaderComponentVue.vue';
import TicketBackgroundImg from "@/assets/customer/images/ticket-background.png";
import { ShopDetailState } from '../../application/states/shopDetailState';
import ShopDetailViewModel from '../../application/viewModels/shopDetailViewModel';
import type { CardProduct } from '../components/ProductCardComponent.vue';
import type ShopProduct from '@/apps/seller/data/models/shopProduct';
import PhysicalProduct from '@/apps/seller/data/models/physicalProduct';
import DigitalProduct from '@/apps/seller/data/models/digitalProduct';
import Donation from '@/apps/seller/data/models/donation';
import Ticket from '@/apps/seller/data/models/ticket';
import { PRODUCT_TYPE_INFOS } from './ListProductsView.vue';
import ProductCardComponent from '../components/ProductCardComponent.vue';

export default defineComponent({

    data() {
        let state = ref(new ShopDetailState(this.$route.query["store_id"] as string));

        return {
            state,
            viewModel: new ShopDetailViewModel(state.value),
            TicketBackgroundImg
        }
    },

    methods: {
      createCardProduct(product: ShopProduct): CardProduct | null {
        for (let info of PRODUCT_TYPE_INFOS) {
          if ((product instanceof Ticket && info.key === 'ticket') ||
            (product instanceof PhysicalProduct && info.key === 'physical-product') ||
            (product instanceof DigitalProduct && info.key === 'digital-product') ||
            (product instanceof Donation && info.key === 'donation')) {
            return info.cardProductFactory(product);
          }
        }
        return null; // return null if product type is not found
      }

    },
    components: {
        HeaderComponentVue,
        ViewModelView,
        ProductCardComponent
    }

})

</script>
<style>

.sub-text{
    color: #AAA;
}

#profile-container{
    background: #f7f7f7;
    margin-top:10px;
    margin-bottom: 10px;
    border-radius: 30px;
    padding-left:50px;
    padding-right:50px;
    padding-bottom: 50px;
  }

  #product-listing #product-box{
    background: #FFF;
    margin-left:30px;
    margin-right: 30px;
    margin-bottom:50px;
    padding:0px;
    padding-bottom: 20px;
  }


#product-listing{
    background-color: #F7F7F7;
  }
  
  #product-listing #product-box{
    background: #FFF;
    margin-left:30px;
    margin-right: 30px;
    margin-bottom:50px;
    padding:0px;
    padding-bottom: 20px;
  }
  
  #product-listing #product-box .header-text{
    font-size:17px;
    margin-left:10px;
  }
  
  #product-listing #product-box .price{
    font-size:20px;
    float: right;
    margin-right:10px;
  }
  
  #product-listing #product-box .description{
    font-size:15px;
    float: right;
    color:#666666;
    margin-top:10px;
    margin-left:10px;
  }
  
  #product-listing #product-box .store-icon{
    float: left;
    width:25px;
    margin-left:10px;
  }
  
  #product-listing #product-box .store-ink{
    margin-left:10px;
  }
  
  #product-listing #product-box .store-link{
    margin-left:5px;
    margin-top:-3px;
  }
  
  #product-listing #product-box .main-image{
    width:100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 30px;
  }
  
  #product-listing #product-box .purchase-btn{
    padding:10px;
    padding-left: 30px;
    padding-right: 30px;
    display: block;
    background: red;
    text-align: center;
    color:#FFF;
    background: #1650CF;
    border-radius: 10px;
    text-decoration: none;
    margin-top:20px;
  }
  
  #product-listing #product-box .padding-10{
    padding:10px;
    margin-top:10px;
  }
  
  #product-listing .secondary-text{
    margin-bottom: 50px;
  }
  
</style>