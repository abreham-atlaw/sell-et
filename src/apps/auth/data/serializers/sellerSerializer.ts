import { type DocumentData } from "firebase/firestore";
import Seller from "../models/seller";
import AccountSerializer from "./accountSerializer";



export default class SellerSerializer extends AccountSerializer<Seller>{
	
	serialize(instance: Seller): DocumentData {
		const data = super.serialize(instance);
		data["shop_id"] = instance.shopId;
		return data;
	}

	deserialize(data: DocumentData): Seller {
		return new Seller(
			data["uid"],
			data["phone_number"],
			data["full_name"],
			data["shop_id"],
			data["email"],
		);
	}



}