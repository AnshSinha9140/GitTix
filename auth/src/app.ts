const express  = require( 'express');
import 'express-async-errors';
import {json} from 'body-parser';

import cookieSession from 'cookie-session';

import {currentUserRouter } from  './routes/current-user';
import {signinRouter } from  './routes/sigin';
import {signoutRouter } from  './routes/signout';
import {signupRouter } from  './routes/signup';
import {errorhandler} from '@asticketss/common';
import { NotFoundError } from '@asticketss/common';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed : false,
  secure: process.env.NODE_ENV !== 'test'

}))

//routers
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);
app.all('*', async () => {
    throw new NotFoundError();
})
app.use(errorhandler);

export {app};