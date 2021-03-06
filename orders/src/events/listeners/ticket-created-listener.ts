import { Listener, Subjects, TicketCreatedEvent } from "@asticketss/common";
import {Message} from 'node-nats-streaming';
import { Ticket } from "../../models/ticket";
import { queueGroupName } from "./queue-grop-name";
 
export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
    subject:Subjects.TicketCreated = Subjects.TicketCreated;
    queueGroupName = queueGroupName;
    async onMessage(data: TicketCreatedEvent['data'], msg: Message){

        const {id,title, price} = data;
        const ticket = Ticket.build({
            id: id,
            title,
             price
        });

        await ticket.save();

        msg.ack();


    }

}