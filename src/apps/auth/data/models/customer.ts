import Account from "./account";
import Role from "./role";

export default class Customer extends Account{

    constructor(
        uid: string | null,
        phoneNumber: string,
        fullName: string,
        email: string
    ){
        super(
            uid, 
            phoneNumber,
            fullName,
            Role.customer,
            email
        )
    }

}