import Field, { TextField } from "@/common/forms/fields";
import Form from "@/common/forms/form";

export default class DonationForm extends Form{
    donationImage = new Field<File>();
    description = new TextField();
    target = new Field<number>();
    title = new TextField();

    getFields(): Field<any>[] {
        return [
            this.donationImage,
            this.description,
            this.target,
            this.title
        ];
    }
}
