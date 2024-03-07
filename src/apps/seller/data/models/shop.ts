import type Model from "@/common/models/model";
import type { ProductType } from "./productType";

export default class Shop implements Model<string>{
    
    id: string | null;
    title: string;
    description: string;
    link: string;
    socialMediaUrl: string;
    types: ProductType[];

    constructor(id: string | null, title: string, description: string, link: string, socialMediaUrl: string, types: ProductType[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.link = link;
        this.socialMediaUrl = socialMediaUrl;
        this.types = types;
    }

    getPK(): string | null {
        return this.id;
    }
    setPK(pk: string): void {
        this.id = pk;
    }
   
}
