import type DigitalProduct from "../models/digitalProduct";
import DigitalProductSerializer from "../seriailzers/digitalProductSerializer";
import ShopProductRepository from "./shopProductRepository";



export default class DigitalProductRepository extends ShopProductRepository<DigitalProduct>{

    constructor(){
        super(
            "seller_digital_products",
            new DigitalProductSerializer()
        )
    }

}