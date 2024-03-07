import { type DocumentData } from "firebase/firestore";
import ShopProductSerializer from "./shopProductSerializer";
import PhysicalProduct from "../models/physicalProduct";

export default class PhysicalProductSerializer extends ShopProductSerializer<PhysicalProduct> {
    serialize(instance: PhysicalProduct): DocumentData {
        const baseData = super.serialize(instance);
        return {
            ...baseData,
            images: instance.images,
            title: instance.title,
            price: instance.price,
            description: instance.description,
        };
    }

    createProduct(id: string | null, shopId: string, data: DocumentData): PhysicalProduct {
        return new PhysicalProduct(
            id,
            shopId,
            data.images,
            data.title,
            data.price,
            data.description,
            data.shop
        );
    }
}
