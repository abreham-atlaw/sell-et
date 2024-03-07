import Field, { TextField } from "@/common/forms/fields";
import Form from "@/common/forms/form";




export default class ShopForm extends Form{

    title = new TextField();
    description = new TextField();
    link = new TextField();
    socialMediaUrl = new TextField();

    getFields(): Field<any>[] {
        return [
            this.title,
            this.description,
            this.link,
            this.socialMediaUrl
        ];
    }


}