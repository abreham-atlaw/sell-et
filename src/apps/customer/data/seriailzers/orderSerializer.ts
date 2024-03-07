import Serializer from "@/common/serializers/serializer";
import { type DocumentData } from "firebase/firestore";
import Order, { type ShippingInfo } from "../models/order";
import { ProductType } from "@/apps/seller/data/models/productType";


class ShippingInfoSerializer extends Serializer<ShippingInfo | null, DocumentData | null> {

    serialize(instance: ShippingInfo | null): DocumentData | null {
        if(instance === null){
            return null;
        }
        return {
            location: instance.location,
            contactNumber: instance.contactNumber,
            personalNote: instance.personalNote
        };
    }

    deserialize(data: DocumentData | null): ShippingInfo | null {
        if(data){
            return {
                location: data.location,
                contactNumber: data.contactNumber,
                personalNote: data.personalNote
            };
        }
        return null;
        
    }
}


export default class OrderSerializer extends Serializer<Order, DocumentData> {

    private shippingInfoSerializer = new ShippingInfoSerializer();

    serialize(instance: Order): DocumentData {
        return {
            id: instance.id,
            productId: instance.productId,
            productType: ProductType[instance.productType],
            createDateTime: instance.createDateTime,
            shipping_info: this.shippingInfoSerializer.serialize(instance.shippingInfo)
        };
    }

    deserialize(data: DocumentData): Order {
        return new Order(
            data.id,
            data.productId,
            ProductType[data.productType as keyof typeof ProductType],
            data.createDateTime,
            this.shippingInfoSerializer.deserialize(data.shipinng_info),
            data.quantity,
            null,
        );
    }
}
