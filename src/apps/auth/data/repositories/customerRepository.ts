import type Customer from "../models/customer";
import CustomerSerializer from "../serializers/customerSerializer";
import AccountRepository from "./accountRepository";


export default class CustomerRepository extends AccountRepository<Customer>{
	
	constructor(){
		super(
			"auth_customer",
			new CustomerSerializer()
		)
	}
	
	public generateNewPK(): Promise<string> {
		throw new Error("Not Allowed");
	}
	
	public async attachForeignKeys(): Promise<void> {
		
	}

}