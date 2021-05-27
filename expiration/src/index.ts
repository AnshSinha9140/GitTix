
import {natsWrapper} from '../src/nats-wrapper';
import { OrderCreatedListener } from './events/listener/Order-created-listener';


const start = async () => {

 
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

  new OrderCreatedListener(natsWrapper.client).listen();

  
} catch (err) {
 console.error(err);
}

};
  
start();


