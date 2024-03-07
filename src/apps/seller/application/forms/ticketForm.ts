import Field, { TextField } from "@/common/forms/fields";
import Form from "@/common/forms/form";
import type { TicketPackage } from "../../data/models/ticket";

export default class TicketForm extends Form{
    ticketImage = new Field<File>();
    title = new TextField();
    price = new Field<number>();
    description = new TextField();
    packages = new Field<TicketPackage[]>();

    getFields(): Field<any>[] {
        return [
            this.ticketImage,
            this.title,
            this.price,
            this.description,
            this.packages
        ];
    }
}
