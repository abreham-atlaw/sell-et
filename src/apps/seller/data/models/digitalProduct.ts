import type Shop from "./shop";
import ShopProduct from "./shopProduct";

export default class DigitalProduct extends ShopProduct{
    
    fileUrl: string;
    price: number;
    title: string;
    description: string;
    image: string;

    constructor(id: string | null, shopId: string, fileUrl: string, price: number, title: string, description: string, image: string, shop?: Shop) {
        super(id, shopId, shop);
        this.fileUrl = fileUrl;
        this.price = price;
        this.title = title;
        this.description = description;
        this.image = image;
    }
}
