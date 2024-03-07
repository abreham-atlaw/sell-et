import Field, { TextField } from "@/common/forms/fields";
import Form from "@/common/forms/form";

export default class DigitalProductForm extends Form{
    file = new Field<File>();
    price = new Field<number>();
    title = new TextField();
    description = new TextField();
    productImage = new Field<File>();

    getFields(): Field<any>[] {
        return [
            this.file,
            this.price,
            this.title,
            this.description,
            this.productImage
        ];
    }
}
