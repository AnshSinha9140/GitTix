import { Listener, OrderCancelledEvent, Subjects } from "@asticketss/common";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publishers/ticket-updated-publisher";
import {queueGroupName} from './queue-grp-name';


export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
    queueGroupName = queueGroupName;
    async onMessage(data: OrderCancelledEvent['data'], msg: Message)  {
        //find a ticket that order is reserving
        const ticket = await Ticket.findById(data.ticket.id);

    //if no ticket then throw error
       if(!ticket) {
           throw new Error('Ticket not found');
       }

       ticket.set({
        orderId: undefined
       });
   
       //save the ticket
   
       await ticket.save();
       await new TicketUpdatedPublisher(this.client).publish({
           id: ticket.id,
           price: ticket.price,
           title: ticket.title,
           version: ticket.version,
           userId: ticket.userId,
           orderId: ticket.orderId
       });
   
       //ack the message
   
       msg.ack();
        
    }

}
