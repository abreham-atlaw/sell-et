import Serializer from "@/common/serializers/serializer";
import { type DocumentData } from "firebase/firestore";
import Account from "../models/account";



export default abstract class AccountSerializer<A extends Account> extends Serializer<A, DocumentData>{
	
	serialize(instance: A): DocumentData {
		return {
			uid: instance.uid,
			email: instance.email,
			phone_number: instance.phoneNumber,
			full_name: instance.fullName,
		}
	}

}