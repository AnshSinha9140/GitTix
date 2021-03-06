import mongoose from 'mongoose';
import {app} from './app'

const start = async () => {

  console.log('starting up auth!!!..............!!!!!!');

  if(!process.env.JWT_KEY) {
    throw new Error('Jwt not found');
  }
  if(!process.env.MONGO_URI) {
    throw new Error('mongo uri not found ');
  }

 try{
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
    console.log('listening on port 3000!!!');
   });
};
  
start();


