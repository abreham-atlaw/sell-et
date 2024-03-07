import Field, { TextField } from "@/common/forms/fields";
import Form from "@/common/forms/form";



export default class SignupForm extends Form{

    firstName = new TextField();
    lastName = new TextField();
    email = new TextField();
    phoneNumber = new TextField();
    password = new TextField();
    confirmPassword = new TextField();

    getFields(): Field<any>[] {
        return [
            this.firstName,
            this.lastName,
            this.email,
            this.phoneNumber,
            this.password,
            this.confirmPassword
        ]
    }

}