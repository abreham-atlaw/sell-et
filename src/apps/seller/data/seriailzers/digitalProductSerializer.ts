import { type DocumentData } from "firebase/firestore";
import ShopProductSerializer from "./shopProductSerializer";
import DigitalProduct from "../models/digitalProduct";

export default class DigitalProductSerializer extends ShopProductSerializer<DigitalProduct> {
    serialize(instance: DigitalProduct): DocumentData {
        const baseData = super.serialize(instance);
        return {
            ...baseData,
            fileUrl: instance.fileUrl,
            price: instance.price,
            description: instance.description,
            image: instance.image,
            title: instance.title
        };
    }

    createProduct(id: string | null, shopId: string, data: DocumentData): DigitalProduct {
        return new DigitalProduct(
            id,
            shopId,
            data.fileUrl,
            data.price,
            data.title,
            data.description,
            data.image,
        );
    }
}
