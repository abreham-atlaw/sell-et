import { AsyncState } from "@/common/state/baseState";
import type { ProductType } from "../../data/models/productType";
import type Form from "@/common/forms/form";
import type Shop from "../../data/models/shop";

export default class PublishProductState extends AsyncState{

    shop?: Shop;
    productType?: ProductType;
    form?: Form;

}