import { AsyncState } from "@/common/state/baseState";
import SignupForm from "../forms/signupForm";
import type Shop from "@/apps/seller/data/models/shop";
import ShopForm from "../forms/shopForm";
import type { ProductType } from "@/apps/seller/data/models/productType";
import type Seller from "../../data/models/seller";


export enum Stage{
    account,
    productTypes,
    shop,
    done
}


export default class SellerSignupState extends AsyncState{
    
    form = new SignupForm();
    shopForm = new ShopForm();
    productTypes?: ProductType[];
    shop?: Shop;
    seller?: Seller;
    stage = Stage.account;

}