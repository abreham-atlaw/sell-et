import type { ProductType } from "@/apps/seller/data/models/productType";
import type ShopProduct from "@/apps/seller/data/models/shopProduct";
import type { TicketPackage } from "@/apps/seller/data/models/ticket";
import type Model from "@/common/models/model";


export interface ShippingInfo {
    location: string;
    contactNumber: string;
    personalNote: string;
}

export default class Order implements Model<string>{

    id: string|null;
    productId: string;
    productType: ProductType;
    createDateTime: Date | null;
    shippingInfo: ShippingInfo | null;
    quantity: number|null;
    ticketPackage: TicketPackage | null;
    
    customerUid?: string;
    product?: ShopProduct;


    constructor(
        id: string | null,
        productId: string,
        productType: ProductType,
        createDateTime: Date | null,
        shippingInfo: ShippingInfo | null,
        quantity: number | null,
        ticketPackage: TicketPackage | null,
        customerUid?: string
    ){
        this.id = id;
        this.productId = productId;
        this.productType = productType;
        this.createDateTime = createDateTime;
        this.shippingInfo = shippingInfo;
        this.quantity = quantity;
        this.ticketPackage = ticketPackage;
        this.customerUid = customerUid;
    }

    getPK(): string | null {
        return this.id;
    }
    setPK(pk: string): void {
        this.id = pk;
    }


}