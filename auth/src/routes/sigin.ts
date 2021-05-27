import express, {Request, Response} from 'express';
import {body} from 'express-validator';
import {Password} from '../services/password';
import { BadRequestError } from '@asticketss/common';
import jwt from 'jsonwebtoken';

import { validateRequest } from '@asticketss/common';
import { User } from '../models/user';

const router = express.Router();

router.post('/api/users/signin',[
  body('email')
       .isEmail()
       .withMessage('Email must be valid'),
  body('password')
        .trim()
        .notEmpty()
        .withMessage('You must enter a password')


],
validateRequest,

async (req: Request , res:Response ) => {
   
  const {email, password} = req.body;

  const existingUser = await User.findOne({email});

  if(!existingUser) {
     throw new BadRequestError('Invalid credentials');
  }
  
  const passwordMatch = await Password.compare(existingUser.password, password);
  if(!passwordMatch) {
    throw new BadRequestError('Invalid credentials');

  }

  //generate jsonwebtoken 
  const userJwt = jwt.sign({
    id: existingUser.id,
    email: existingUser.email
}, process.env.JWT_KEY!
);

//store it on session object
req.session = {
    jwt: userJwt
}

 res.sendStatus(200).send(existingUser);


  res.send('hi there');
});

export {router as signinRouter};