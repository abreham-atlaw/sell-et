import type Model from "@/common/models/model";
import type Role from "./role";

export default class Account implements Model<string>{

	public uid: string | null;
	public phoneNumber: string;
	public fullName: string;
	public email: string;
	public role: Role;

	constructor(
		uid: string | null,
		username: string,
		fullName: string,
		role: Role,
		email: string
	){
		this.uid = uid;
		this.phoneNumber = username;
		this.fullName = fullName;
		this.role = role;
		this.email = email;
	}

	getPK(): string | null {
		return this.uid;
	}
	setPK(pk: string): void {
		this.uid = pk;
	}



}