import type Donation from "../models/donation";
import DonationSerializer from "../seriailzers/donationSerializer";
import ShopProductRepository from "./shopProductRepository";



export default class DonationRepository extends ShopProductRepository<Donation>{
    
    constructor(){
        super(
            "seller_donations",
            new DonationSerializer()
        )
    }

}