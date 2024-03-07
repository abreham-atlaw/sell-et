import type Ticket from "../models/ticket";
import TicketSerializer from "../seriailzers/ticketSerializer";
import ShopProductRepository from "./shopProductRepository";


export default class TicketRepository extends ShopProductRepository<Ticket>{

    constructor(){
        super(
            "seller_ticket",
            new TicketSerializer()
        )
    }

}