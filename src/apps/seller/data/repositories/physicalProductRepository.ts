import type PhysicalProduct from "../models/physicalProduct";
import PhysicalProductSerializer from "../seriailzers/physicalProductSerializer";
import ShopProductRepository from "./shopProductRepository";



export default class PhysicalProductRepository extends ShopProductRepository<PhysicalProduct>{


    constructor(){
        super(
            "seller_physical_product",
            new PhysicalProductSerializer()
        )
    }

}