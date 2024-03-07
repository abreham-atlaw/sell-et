import type Shop from "./shop";
import ShopProduct from "./shopProduct";

export class TicketPackage{
    title: string;
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

export default class Ticket extends ShopProduct {
    image: string;
    title: string;
    price: number;
    description: string;
    packages: TicketPackage[];

    constructor(id: string | null, shopId: string, image: string, title: string, price: number, description: string, packages: TicketPackage[], shop?: Shop) {
        super(id, shopId, shop);
        this.image = image;
        this.title = title;
        this.price = price;
        this.description = description;
        this.packages = packages;
    }
}
