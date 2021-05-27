import { BadRequestError, NotFoundError, OrderStatus, requireAuth, validateRequest } from '@asticketss/common';
import express, {Request, Response} from  'express';

import {body} from  'express-validator'
import { OrderCreatedPublisher } from '../events/publisher/order-created-publisher';
import { Order } from '../models/order';
import { Ticket } from '../models/ticket';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

const EXPIRATION_WINDOW_SECONDS = 15 * 60;

router.post('/api/orders',
   requireAuth,
  [
    body('ticketId')
      .not()
      .isEmpty()
      .withMessage('Ticketid must be provided')
  ],
   validateRequest,
   async (req: Request, res: Response) => {

      // find the ticket the user is trying to order in database

      const {ticketId} = req.body;
      const ticket = await Ticket.findById(ticketId);

      if(!ticket) {
        throw new NotFoundError();
      }
      //make sure that ticket is not already reserved
    
      
     const existingOrder = await ticket.isReversed(); 

      if(existingOrder){
        throw new BadRequestError('Ticket is already reserved');
      }

      //calculate an expiry date for the product 

        const expiration  = new Date();

        expiration.setSeconds(expiration.getSeconds() + EXPIRATION_WINDOW_SECONDS);


      //buid the order and save it to the database

      const order = Order.build({
        userId: req.currentUser!.id,
        status: OrderStatus.Created,
        expiresAt: expiration,
        ticket: ticket
      })

      await order.save();
      // emit event sayiing an order was created

      new OrderCreatedPublisher(natsWrapper.client).publish({
        id: order.id,
        status: order.status,
        expiresAt: order.expiresAt.toISOString() ,
        userId: order.userId,
        //update version requirrd
        version: order.version,
        
        ticket: {
          id: ticket.id,
          price: ticket.price
        }
      });


     
    

 });

export {router as newOrderRouter};