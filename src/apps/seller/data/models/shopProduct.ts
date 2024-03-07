import type Model from "@/common/models/model";
import type Shop from "./shop";


export default class ShopProduct implements Model<string>{
    
    id: string | null; 
    shop?: Shop;
    shopId: string;

    constructor(id: string | null, shopId: string, shop?: Shop) {
        this.id = id;
        this.shopId = shopId;
        this.shop = shop;
    }
    
    getPK(): string | null {
        return this.id;
    }
    setPK(pk: string): void {
        this.id = pk;
    }
}
