import type Shop from "./shop";
import ShopProduct from "./shopProduct";

export default class Donation extends ShopProduct {
    image: string;
    description: string;
    target: number;
    title: string;

    constructor(id: string | null, shopId: string, image: string, description: string, target: number, title: string, shop?: Shop) {
        super(id, shopId, shop);
        this.image = image;
        this.description = description;
        this.target = target;
        this.title = title;
    }
}
