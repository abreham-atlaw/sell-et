import type Shop from "@/apps/seller/data/models/shop";
import ModelDetailViewModel from "@/common/viewmodel/modelDetailVIewModel";
import type { ShopDetailState } from "../states/shopDetailState";
import PhysicalProductRepository from "@/apps/seller/data/repositories/physicalProductRepository";
import DigitalProductRepository from "@/apps/seller/data/repositories/digitalProductRepository";
import DonationRepository from "@/apps/seller/data/repositories/donationRepository";
import TicketRepository from "@/apps/seller/data/repositories/ticketRepository";
import ShopRepository from "@/apps/seller/data/repositories/shopRepository";



export default class ShopDetailViewModel extends ModelDetailViewModel<Shop>{


    constructor(state){
        super(state, new ShopRepository());
    }

    public async onInit(): Promise<void> {
        await super.onInit();
        (this.state as ShopDetailState).products = [];
        for(const repository of [new PhysicalProductRepository(), new DigitalProductRepository(), new DonationRepository(), new TicketRepository()]){
            const products = await repository.filterByShop(this.state.instance!);
            products.forEach(
                (product) => (this.state as ShopDetailState).products.push(product)
            );
        }
    }

}