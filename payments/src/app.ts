const express  = require( 'express');
import 'express-async-errors';
import {json} from 'body-parser';


import cookieSession from 'cookie-session';

import {errorhandler, currentUser, NotFoundError,} from '@asticketss/common';
import { createChargeRouter } from './routes/new';


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed : false,
  secure: process.env.NODE_ENV !== 'test'

}))
app.use(currentUser);

//routers
app.use(createChargeRouter);


app.all('*', async () => {
    throw new NotFoundError();
})
app.use(errorhandler);

export {app};