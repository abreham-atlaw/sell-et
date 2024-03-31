import AsyncViewModel from "@/common/viewmodel/asyncViewModel";
import type OrderProductState from "../states/orderProductState";
import OrderRepository from "../../data/repositories/orderRepository";
import Order from "../../data/models/order";
import { ProductType } from "@/apps/seller/data/models/productType";
import type { TicketPackage } from "@/apps/seller/data/models/ticket";
import DigitalProductRepository from "@/apps/seller/data/repositories/digitalProductRepository";
import PhysicalProductRepository from "@/apps/seller/data/repositories/physicalProductRepository";
import DonationRepository from "@/apps/seller/data/repositories/donationRepository";
import TicketRepository from "@/apps/seller/data/repositories/ticketRepository";


export default class OrderProductViewModel extends AsyncViewModel<OrderProductState>{

    private orderRepository = new OrderRepository();


    public async onInit(): Promise<void> {
        await super.onInit();
        this.state.product = await this.productRepository!.getByPrimaryKey(this.state.productId);
    }

    private get productRepository(){
        switch(this.state.productType){
            case ProductType.digitalProducts:
                return new DigitalProductRepository();
            case ProductType.physicalProduct:
                return new PhysicalProductRepository();
            case ProductType.donation:
                return new DonationRepository();
            case ProductType.ticket:
                return new TicketRepository();    
        }
    }

    async orderPhysicalProduct(quantity: number){
        await this.asyncCall(
            async () => {
                await this.state.shippingInfoForm.validate(true);
                this.state.order = new Order(
                    null,
                    this.state.productId,
                    ProductType.physicalProduct,
                    null,
                    {
                        contactNumber: this.state.shippingInfoForm.contactNumber.getValue()!,
                        location: this.state.shippingInfoForm.location.getValue()!,
                        personalNote: this.state.shippingInfoForm.personalNote.getValue()!
                    },
                    quantity,
                    null
                )
                // await this.orderRepository.create(this.state.order);
            }
        );
    }

    async orderDigitalProduct(){
        await this.asyncCall(
            async () => {
                this.state.order = new Order(
                    null,
                    this.state.productId,
                    ProductType.digitalProducts,
                    null,
                    null,
                    null,
                    null
                );
                // await this.orderRepository.create(this.state.order);
            }
        );
    }


    async orderTicket(ticketPackage: TicketPackage){
        await this.asyncCall(
            async () => {
                this.state.order = new Order(
                    null,
                    this.state.productId,
                    ProductType.ticket,
                    null,
                    null,
                    null,
                    ticketPackage
                );
                // await this.orderRepository.create(this.state.order);
            }
        );
    }

    async orderDonation(quantity: number){
        await this.asyncCall(
            async () => {
                this.state.order = new Order(
                    null,
                    this.state.productId,
                    ProductType.donation,
                    null,
                    null,
                    quantity,
                    null
                );
                // await this.orderRepository.create(this.state.order);
            }
        );
    }
    

}