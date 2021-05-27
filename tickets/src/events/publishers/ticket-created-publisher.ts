import {Publisher, Subjects, TicketCreatedEvent} from '@asticketss/common';


export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {

     subject: Subjects.TicketCreated = Subjects.TicketCreated;

}
