import Field, { TextField } from "@/common/forms/fields";
import Form from "@/common/forms/form";



export default class PhysicalProductForm extends Form{

    productImages = new Field<File[]>();
    title = new TextField();
    price = new Field<number>();
    description = new TextField();

    getFields(): Field<any>[] {
        return [
            this.productImages,
            this.title,
            this.price,
            this.description
        ];
    }

}