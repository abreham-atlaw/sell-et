import type ShopProduct from "@/apps/seller/data/models/shopProduct";
import { AsyncState } from "@/common/state/baseState";
import ShippingInfoForm from "../forms/shippingInfoForm";
import type Order from "../../data/models/order";
import type { ProductType } from "@/apps/seller/data/models/productType";


export class Stage{

}

export default class OrderProductState extends AsyncState{


    productId: string;
    productType: ProductType;
    product?: ShopProduct;
    order?: Order;
    shippingInfoForm = new ShippingInfoForm();

    constructor(id: string, type: ProductType){
        super();
        this.productId = id;
        this.productType = type;
    }

}