import { type DocumentData } from "firebase/firestore";
import Customer from "../models/customer";
import AccountSerializer from "./accountSerializer";



export default class CustomerSerializer extends AccountSerializer<Customer>{
	
	deserialize(data: DocumentData): Customer {
		return new Customer(
			data["uid"],
			data["phone_number"],
			data["full_name"],
			data["email"]
		)
	}



}