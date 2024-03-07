import type Seller from "../models/seller";
import SellerSerializer from "../serializers/sellerSerializer";
import ShopRepository from "@/apps/seller/data/repositories/shopRepository";
import AccountRepository from "./accountRepository";


export default class SellerRepository extends AccountRepository<Seller>{
	
	private shopRepository = new ShopRepository();

	constructor(){
		super(
			"auth_seller",
			new SellerSerializer()
		)
	}
	
	public generateNewPK(): Promise<string> {
		throw new Error("Not Allowed");
	}


	public async attachForeignKeys(instance: Seller): Promise<void> {
		instance.shop = await this.shopRepository.getByPrimaryKey(instance.shopId);
	}

}
