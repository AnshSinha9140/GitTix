import { ExpirationCompleteEvent, Publisher, Subjects } from "@asticketss/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;

}