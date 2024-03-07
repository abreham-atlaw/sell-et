import { FireStoreRepository } from "@/common/repositories/firestoreRepository";
import type Shop from "../models/shop";
import ShopSerializer from "../seriailzers/shopSerializer";


export default class ShopRepository extends FireStoreRepository<string, Shop>{

    constructor(){
        super(
            "seller_shops",
            "id",
            new ShopSerializer()
        )
    }

}