import express, {Request, Response} from 'express';
import {body} from 'express-validator';
import jwt from 'jsonwebtoken';

import {DatabaseConnectionError} from '@asticketss/common';
import { User } from '../models/user';
import { BadRequestError } from '@asticketss/common';
import { validateRequest } from '@asticketss/common';

const router = express.Router();

//using express validator 
router.post('/api/users/signup', [
    body('email')
     .isEmail()
     .withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({min: 4, max: 20})
      .withMessage('Password must be between 4 and 20 characters')
], 
validateRequest,
async (req: Request, res : Response) => {

   const {email, password} = req.body;

   const existingUser = await User.findOne({email});
   if(existingUser) {
    
       throw new BadRequestError('Email already in use');
   }
   const user = User.build({email,password});
   await user.save(); 

  
   //generate jsonwebtoken 
   const userJwt = jwt.sign({
       id: user.id,
       email: user.email
   }, process.env.JWT_KEY!
   );

   //store it on session object
   req.session = {
       jwt: userJwt
   }

   res.sendStatus(201).send(user);
    
});

export {router as signupRouter};