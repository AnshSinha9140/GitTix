import express, {Request, Response} from 'express';
import { currentUser } from '@asticketss/common';


const router = express.Router();

//currentUser is middleware
router.get('/api/users/currentuser', currentUser, (req: Request, res : Response) => {

  res.send({ currentUser: req.currentUser || null});

});

export {router as currentUserRouter};