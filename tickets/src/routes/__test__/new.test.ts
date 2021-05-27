import request from 'supertest';
import {app} from '../../app';

it('has a route handler listening to /api/tickets for post requests', async () => {
    const response  = await request(app)
    .post('/api/tickets')
    .send({});
    expect(response.status).not.toEqual(404);
    
});

it('can not be accessed if user is not signed in', async () => {
    const response  = await request(app)
   .post('/api/tickets')
   .send({})
   .expect(401);
});
