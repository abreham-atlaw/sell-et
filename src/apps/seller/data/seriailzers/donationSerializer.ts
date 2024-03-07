import { type DocumentData } from "firebase/firestore";
import ShopProductSerializer from "./shopProductSerializer";
import Donation from "../models/donation";

export default class DonationSerializer extends ShopProductSerializer<Donation> {
    serialize(instance: Donation): DocumentData {
        const baseData = super.serialize(instance);
        return {
            ...baseData,
            image: instance.image,
            description: instance.description,
            target: instance.target,
            title: instance.title,
        };
    }

    createProduct(id: string | null, shopId: string, data: DocumentData): Donation {
        return new Donation(
            id,
            shopId,
            data.image,
            data.description,
            data.target,
            data.title,
            data.shop
        );
    }
}
