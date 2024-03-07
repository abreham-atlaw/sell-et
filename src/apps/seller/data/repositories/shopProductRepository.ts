import { FireStoreRepository } from "@/common/repositories/firestoreRepository";
import type ShopProduct from "../models/shopProduct";
import type Serializer from "@/common/serializers/serializer";
import type { DocumentData } from "firebase/firestore";
import ShopRepository from "./shopRepository";



export default class ShopProductRepository<M extends ShopProduct> extends FireStoreRepository<string, M>{

    private shopRepository = new ShopRepository();

    constructor(collectionName: string, serializer: Serializer<M, DocumentData>){
        super(
            collectionName,
            "id",
            serializer
        );
    }

    async attachForeignKeys(instance: M): Promise<void> {
        instance.shop = await this.shopRepository.getByPrimaryKey(instance.shopId);
    }

}