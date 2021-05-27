import { PaymentCreatedEvent, Publisher, Subjects } from "@asticketss/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
    subject:Subjects.PaymentCreated = Subjects.PaymentCreated;

}