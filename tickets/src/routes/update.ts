import express, {Request, Response} from  'express';
import {Ticket} from '../models/ticket';
import {body} from 'express-validator';
import {requireAuth, validateRequest, NotFoundError, NotAuthorizedError, BadRequestError} from '@asticketss/common';
import {TicketUpdatedPublisher} from '../events/publishers/ticket-updated-publisher';
import {natsWrapper} from '../nats-wrapper';


const router = express.Router();

router.put('/api/tickets/:id',requireAuth,[
  body('title')
    .not()
    .isEmpty()
    .withMessage('Title is Required'),
  body('price')
    .isFloat({gt: 0})
    .withMessage('Price must be provided')
] ,validateRequest,async (req: Request, res:Response) => {
   
  const ticket = await Ticket.findById(req.params.id);
  if(!ticket) { 
      throw new NotFoundError();
  }
  if(ticket.orderId){
    throw new BadRequestError('ticket is reserved');
  }
  
  if( ticket.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
  }

  ticket.set({
      title: req.body.title,
      price: req.body.price  
  });

  await ticket.save();
  new TicketUpdatedPublisher(natsWrapper.client).publish({
    id: ticket.id,
    title: ticket.title, 
    price: ticket.price,
    userId: ticket.userId,
    version: ticket.version,
  });
  res.send(ticket);
});

export {router as updateTicketRouter};