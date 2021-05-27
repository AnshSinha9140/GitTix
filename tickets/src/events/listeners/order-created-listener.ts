import { Listener, OrderCreatedEvent, Subjects } from "@asticketss/common";
import {Message} from 'node-nats-streaming'
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publishers/ticket-updated-publisher";
import {queueGroupName} from './queue-grp-name';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
    subject:Subjects.OrderCreated = Subjects.OrderCreated;
    queueGroupName = queueGroupName;

   async onMessage(data: OrderCreatedEvent['data'], msg: Message) {

    //find a ticket that order is reserving
        const ticket = await Ticket.findById(data.ticket.id);

    //if no ticket then throw error
       if(!ticket) {
           throw new Error('Ticket not found');
       }

    //Mark the ticket being reserved by setting its order id property

    ticket.set({
     orderId: data.id
    })

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
