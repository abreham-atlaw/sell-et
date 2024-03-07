import { type DocumentData } from "firebase/firestore";
import ShopProductSerializer from "./shopProductSerializer";
import Ticket, { TicketPackage } from "../models/ticket";

export default class TicketSerializer extends ShopProductSerializer<Ticket> {
    serialize(instance: Ticket): DocumentData {
        const baseData = super.serialize(instance);
        return {
            ...baseData,
            image: instance.image,
            title: instance.title,
            price: instance.price,
            description: instance.description,
            packages: instance.packages.map(pkg => ({ title: pkg.title, price: pkg.price })),
        };
    }

    createProduct(id: string | null, shopId: string, data: DocumentData): Ticket {
        const packages = data.packages.map((pkg: any) => new TicketPackage(pkg.title, pkg.price));
        return new Ticket(
            id,
            shopId,
            data.image,
            data.title,
            data.price,
            data.description,
            packages,
            data.shop
        );
    }
}
