import {Publisher, Subjects, TicketUpdatedEvent} from '@asticketss/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {

    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
   

}

