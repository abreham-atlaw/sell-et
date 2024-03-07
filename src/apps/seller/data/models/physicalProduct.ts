import type Shop from "./shop";
import ShopProduct from "./shopProduct";

export default class PhysicalProduct extends ShopProduct {
    images: string[];
    title: string;
    price: number;
    description: string;

    constructor(id: string | null, shopId: string, images: string[], title: string, price: number, description: string, shop?: Shop) {
        super(id, shopId, shop);
        this.images = images;
        this.title = title;
        this.price = price;
        this.description = description;
    }
}
