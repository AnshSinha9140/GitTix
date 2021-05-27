import {Publisher, OrderCreatedEvent, Subjects} from '@asticketss/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;

}