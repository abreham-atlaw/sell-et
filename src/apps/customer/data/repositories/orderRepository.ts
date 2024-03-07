import { FireStoreRepository } from "@/common/repositories/firestoreRepository";
import type Order from "../models/order";
import OrderSerializer from "../seriailzers/orderSerializer";
import Authenticator from "@/apps/auth/data/repositories/authenticator";


export default class OrderRepository extends FireStoreRepository<string, Order>{

    private authenticator = new Authenticator();

    constructor(){
        super(
            "customer_orders",
            "id",
            new OrderSerializer()
        );
    }

    public async create(instance: Order): Promise<void> {
        if(instance.customerUid === undefined){
            instance.customerUid = (await this.authenticator.getCurrentUser())!.uid
        }
        await super.create(instance);
    }

}