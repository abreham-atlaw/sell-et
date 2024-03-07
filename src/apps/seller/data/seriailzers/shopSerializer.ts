import Serializer from "@/common/serializers/serializer";
import { type DocumentData } from "firebase/firestore";
import Shop from "../models/shop";
import { ProductType } from "../models/productType";

export default class ShopSerializer extends Serializer<Shop, DocumentData> {

    serialize(instance: Shop): DocumentData {
        return {
            id: instance.id,
            title: instance.title,
            description: instance.description,
            link: instance.link,
            socialMediaUrl: instance.socialMediaUrl,
            types: instance.types.map(type => ProductType[type])
        };
    }

    deserialize(data: DocumentData): Shop {
        return new Shop(
            data.id,
            data.title,
            data.description,
            data.link,
            data.socialMediaUrl,
            data.types.map((type: string) => ProductType[type as keyof typeof ProductType])
        );
    }
}
