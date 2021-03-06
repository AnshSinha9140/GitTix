import { ExpirationCompleteEvent, Listener, OrderStatus, Subjects } from "@asticketss/common"
import { Message } from "node-nats-streaming";
import { Order } from "../../models/order";
import { natsWrapper } from "../../nats-wrapper";
import { OrderCancelledPublisher } from "../publisher/order-cancelled-publisher";
import { queueGroupName } from './queue-grop-name';

export class ExpirationCompleteListener extends Listener<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
    queueGroupName = queueGroupName;
    async onMessage(data: ExpirationCompleteEvent['data'], msg: Message) {
        const order = await Order.findById(data.orderId).populate('ticket');
        if (!order) {
            throw new Error('order not found');
        }

        order.set({
            status: OrderStatus.Cancelled
        });

        await order.save();
        await new OrderCancelledPublisher(natsWrapper.client).publish({
            id: order.id,
            version: order.id,
            ticket: {
                id: order.ticket.id,

            }
        });

        msg.ack();
    }

}