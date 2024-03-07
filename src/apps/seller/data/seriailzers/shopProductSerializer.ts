import Serializer from "@/common/serializers/serializer";
import { type DocumentData } from "firebase/firestore";
import ShopProduct from "../models/shopProduct";

export default abstract class ShopProductSerializer<M extends ShopProduct> extends Serializer<M, DocumentData> {

    serialize(instance: M): DocumentData {
        return {
            id: instance.id,
            shopId: instance.shopId,
        };
    }

    deserialize(data: DocumentData): M {
        return this.createProduct(
            data.id,
            data.shopId,
            data
        );
    }

    abstract createProduct(id: string | null, shopId: string, data: DocumentData): M;
}
