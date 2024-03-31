<template>

    <ViewModelView class="" :state="state" :view-model="viewModel">
        <div class="">
            <HeaderComponentVue/>
            <section :style="backgroundStyle" class=" text-light pt-24 pb-48 px-16">
                <h1 class="text-6xl font-bold">Browse {{ productInfo.title }}</h1>
            </section>
            <section class="bg-light pt-10">
                <!-- <div class="flex items-center mx-auto w-1/2 bg-white rounded-full px-10 py-4">
                    <i class="fas fa-search mr-4"></i>
                    <input 
                    class="pl-2 w-full bg-white rounded-full focus:outline-none"
                    type="search"
                    placeholder="Search"
                    />
                </div> -->
                <div class="flex flex-col items-center justify-center">
                    <h2 class="text-4xl font-semibold mb-4">Choose your ticket</h2>
                    <span class="text-center mb-4">Fill the correct information, so your account runs smoothly.<br/>Inocorrect information will on your profile might result in a suspension</span>
                </div>
                <div class="flex flex-wrap items-center justify-center mt-8">
                    <div v-for="instance in state.values!" class="w-1/3 px-12 my-5" :key="(instance.id as string)">
                        <ProductCardComponent :instance="productInfo.cardProductFactory(instance)"/>
                    </div>
                </div>
            </section>
            <FooterComponentVue/>
        </div>
    </ViewModelView>
   
</template>
<script lang="ts">
import TicketBackgroundImg from "@/assets/customer/images/ticket-background.png";
import ViewModelView from '@/common/components/views/ViewModelView.vue';
import ModelListState from '@/common/state/modelListState';
import ModelListViewModel from '@/common/viewmodel/modelListViewModel';
import { defineComponent, ref } from 'vue';
import HeaderComponentVue from '../components/HeaderComponentVue.vue';
import Ticket from '@/apps/seller/data/models/ticket';
import TicketRepository from '@/apps/seller/data/repositories/ticketRepository';
import type ShopProduct from '@/apps/seller/data/models/shopProduct';
import type ShopProductRepository from '@/apps/seller/data/repositories/shopProductRepository';
import ProductCardComponent, { type CardProduct } from '../components/ProductCardComponent.vue';
import PhysicalProductRepository from '@/apps/seller/data/repositories/physicalProductRepository';
import type PhysicalProduct from '@/apps/seller/data/models/physicalProduct';
import type DigitalProduct from '@/apps/seller/data/models/digitalProduct';
import DigitalProductRepository from '@/apps/seller/data/repositories/digitalProductRepository';
import DonationRepository from '@/apps/seller/data/repositories/donationRepository';
import type Donation from '@/apps/seller/data/models/donation';
import FooterComponentVue from '@/apps/customer/presentation/components/FooterComponentVue.vue';


interface ProductTypeInfo{

    key: string,
    title: string,
    description: string,
    repositoryFactory: () => ShopProductRepository<any>,
    cardProductFactory: (product: ShopProduct) => CardProduct

}

export const PRODUCT_TYPE_INFOS: ProductTypeInfo[] = [
    {
        key: "ticket",
        title: "Tickets",
        description: "Buy Tickets Securely, Pay easily",
        repositoryFactory: () => new TicketRepository(),
        cardProductFactory: (product: ShopProduct) => {
            const ticket = product as Ticket
            return {
                image: ticket.image,
                title: ticket.title,
                description: ticket.description,
                price: ticket.price,
                shop: ticket.shop!,
                type: "ticket",
                id: ticket.id!
            }
        }
    },
    {
        key: "physical-product",
        title: "Physical Product",
        description: "Buy your Physical Products here",
        repositoryFactory: () => new PhysicalProductRepository(),
        cardProductFactory: (product: ShopProduct) => {
            const physicalProduct = product as PhysicalProduct
            return {
                image: physicalProduct.images[0],
                title: physicalProduct.title,
                description: physicalProduct.description,
                price: physicalProduct.price,
                shop: physicalProduct.shop!,
                type: "physical-product",
                id: physicalProduct.id!
            }
        }
    },
    {
        key: "digital-product",
        title: "Digital Products",
        description: "Buy Digital Products Securely, Pay easily",
        repositoryFactory: () => new DigitalProductRepository(),
        cardProductFactory: (product: ShopProduct) => {
            const digitalProduct = product as DigitalProduct
            return {
                image: digitalProduct.image,
                title: digitalProduct.title,
                description: digitalProduct.description,
                price: digitalProduct.price,
                shop: digitalProduct.shop!,
                type: "digital-product",
                id: digitalProduct.id!
            }
        }
    },
    {
        key: "donation",
        title: "Donations",
        description: "Donate here",
        repositoryFactory: () => new DonationRepository(),
        cardProductFactory: (product: ShopProduct) => {
            const donation = product as Donation
            return {
                image: donation.image,
                title: donation.title,
                description: donation.description,
                price: donation.target,
                shop: donation.shop!,
                type: "donation",
                id: donation.id!
            }
        }
    }
]

function getProductInfo(urlKey: string): ProductTypeInfo{
    for(let productInfo of PRODUCT_TYPE_INFOS){
        if(productInfo.key == urlKey){
            return productInfo;
        }
    }
    return PRODUCT_TYPE_INFOS[0];
}




export default defineComponent({

    data(){
        let productInfo = getProductInfo(this.$route.query["category"] as string);
        let state = ref(new ModelListState<any>())
        return {
            state,
            productInfo,
            viewModel: new ModelListViewModel<any>(state.value, productInfo.repositoryFactory()),
            backgroundStyle: {
                backgroundImage: 'url(' + TicketBackgroundImg + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            },
        }
    },
    components:{
        ViewModelView,
        HeaderComponentVue,
        ProductCardComponent,
        FooterComponentVue
    }

})


</script>