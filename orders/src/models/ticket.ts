
import mongoose from 'mongoose';
import { Order, OrderStatus } from './order';
import {updateIfCurrentPlugin} from 'mongoose-update-if-current';
interface TicketAttrs {
    title: string;
    price: number;
    id: string;
}

export interface TicketDoc extends mongoose.Document {
    title: string;
    price: number;
    version: number;
    isReversed():Promise<boolean>;
}

interface TicketModel extends mongoose.Model<TicketDoc> {
     build(attrs: TicketAttrs): TicketDoc; 
     findByEvent(event: {id: string, version: number}): Promise<TicketDoc| null>; 
}

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
       
    },
    price : { 
        type: Number,
        required: true,
        min: 0
    }
},{
    toJSON: {
        transform(doc,ret) {
            ret.id = ret._id;
            delete ret._id;

        }
    }
});

ticketSchema.set('versionKey','version');
ticketSchema.plugin(updateIfCurrentPlugin);

//for find by id and version
ticketSchema.statics.findByEvent = (event: {id: string, version: number}) => {

    return Ticket.findOne({
        _id: event.id,
        version: event.version - 1
    });

}

ticketSchema.statics.build = (attrs: TicketAttrs ) => {

    return new Ticket({
        _id: attrs.id,
        title: attrs.title,
        price: attrs.price,
    });
}
  // run query to look all  order and find order 
  //where ticket is the ticket we just found and order status is not cancelled
  //if we find an order from this it means ticket is already reserved
ticketSchema.methods.isReserved = async function(){
    //this === the ticket document that we just called 'isReserved' on
    const existingorder = await Order.findOne({
        ticket: this,
        status: {
          $in: [
            OrderStatus.Created,
            OrderStatus.AwaitingPayment,
            OrderStatus.Complete
          ]
        }
      });

      return !!existingorder;
}

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);

export {Ticket};

