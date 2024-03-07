import type Shop from "@/apps/seller/data/models/shop";
import Account from "./account";
import Role from "./role";

export default class Seller extends Account{

    shop?: Shop;
    shopId: string;

    constructor(
        uid: string | null,
        phoneNumber: string,
        fullName: string,
        shopId: string,
        email: string
    ){
        super(
            uid, 
            phoneNumber,
            fullName,
            Role.seller,
            email
        );
        this.shopId = shopId;
    }
    

}