import type DigitalProduct from "@/apps/seller/data/models/digitalProduct";
import type Donation from "@/apps/seller/data/models/donation";
import type PhysicalProduct from "@/apps/seller/data/models/physicalProduct";
import type Shop from "@/apps/seller/data/models/shop";
import type ShopProduct from "@/apps/seller/data/models/shopProduct";
import type Ticket from "@/apps/seller/data/models/ticket";
import ModelDetailState from "@/common/state/modelDetailState";


export class ShopDetailState extends ModelDetailState<Shop>{

    physicalProducts?: PhysicalProduct[];
    tickets?: Ticket[];
    donation?: Donation[];
    digitalProduct?: DigitalProduct[];

    products?: ShopProduct[];

}