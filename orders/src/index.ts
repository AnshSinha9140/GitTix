import mongoose from 'mongoose';
import {app} from './app'
import {natsWrapper} from '../src/nats-wrapper';
import { TicketCreatedListener } from './events/listeners/ticket-created-listener';
import { TicketUpdatedListener } from './events/listeners/ticket-updated-listeners';
import { ExpirationCompleteListener } from './events/listeners/expiration-complete-listener';
import { PaymentCreatedListener } from './events/listeners/payment-created-listener';

const start = async () => {

  if(!process.env.JWT_KEY) {
    throw new Error('Jwt not found');
  }
  if(!process.env.MONGO_URI) {
    throw new Error('mongo uri must be defined');
  }
  if(!process.env.NATS_CLIENT_ID) {
    throw new Error('nats client must be defined');
  }
  if(!process.env.NATS_URL) {
    throw new Error('nats url must be defined');
  }
  if(!process.env.NATS_CLUSTER_ID) {
    throw new Error('nats cluster must be defined');
  }

 try{
   await natsWrapper.connect(
   process.env.NATS_CLUSTER_ID,
   process.env.NATS_CLIENT_ID,
    process.env.NATS_URL);

   natsWrapper.client.on('close', () => {
    console.log('NATS Connection Closed');
    process.exit();
  });

  process.on('SIGINT', () => natsWrapper.client.close());
  process.on('SIGTERM', () => natsWrapper.client.close());

  new TicketCreatedListener(natsWrapper.client).listen();
  new TicketUpdatedListener(natsWrapper.client).listen();
  new ExpirationCompleteListener(natsWrapper.client).listen();
  new PaymentCreatedListener(natsWrapper.client).listen();

await mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true, 
});
  console.log('Connected to db');
} catch (err) {
 console.error(err);
}
 app.listen(3000, () => {
    console.log('listening on port 3000'); 
 });
};  
start();


