import AsyncViewModel from "@/common/viewmodel/asyncViewModel";
import type SellerSignupState from "../states/sellerSignupState";
import { Stage } from "../states/sellerSignupState";
import Shop from "@/apps/seller/data/models/shop";
import type { ProductType } from "@/apps/seller/data/models/productType";
import SellerRepository from "../../data/repositories/sellerRepository";
import ShopRepository from "@/apps/seller/data/repositories/shopRepository";
import Seller from "../../data/models/seller";



export default class SellerSignupViewModel extends AsyncViewModel<SellerSignupState>{

    private repository = new SellerRepository();
    private shopRepository = new ShopRepository();

    async setAccount(){
        await this.asyncCall(
            async () => {
                await this.state.form.validate(true);
                this.state.stage = Stage.productTypes;
            }
        )
    } 

    async selectProductTypes(types: ProductType[]){
        
        this.state.productTypes = types;
        this.state.stage = Stage.shop;
        this.syncState();

    }

    async createShop(){
        await this.asyncCall(
            async () => {
                await this.state.shopForm.validate(true);
                this.state.shop = new Shop(
                    null,
                    this.state.shopForm.title.getValue()!,
                    this.state.shopForm.description.getValue()!,
                    this.state.shopForm.link.getValue()!,
                    this.state.shopForm.socialMediaUrl.getValue()!,
                    this.state.productTypes!
                );
                await this.shopRepository.create(this.state.shop!);
                this.state.seller = new Seller(
                    null,
                    this.state.form.phoneNumber.getValue()!,
                    `${this.state.form.firstName.getValue()!} ${this.state.form.lastName.getValue()!}`,
                    this.state.shop!.getPK()!,
                    this.state.form.email.getValue()!
                );
                await this.repository.signup(this.state.seller!, this.state.form.password.getValue()!);
                this.state.stage = Stage.done;
            }
        )
    }

}