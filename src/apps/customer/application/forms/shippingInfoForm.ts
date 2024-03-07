import Field, { TextField } from "@/common/forms/fields";
import Form from "@/common/forms/form";


export default class ShippingInfoForm extends Form{

    contactNumber = new TextField();
    location = new TextField();
    personalNote = new TextField();

    getFields(): Field<any>[] {
        return [
            this.contactNumber,
            this.location,
            this.personalNote
        ]
    }

}