
import request from 'supertest';
import {app} from '../../app';

it('returns a 201 on succesful signup', async () => {
    return request(app)
      .post('/api/users/signup')
      .send({
          email: 'test@test.com',
          password: 'password'
      })
    .expect(201);
});

it('returns a 400 with a invalid email', async () => {
    return request(app)
      .post('/api/users/signup')
      .send({
          email: 'tesnfdnfndfnf',
          password: 'password'
      })
      .expect(400);
});

it('returns a 400 with a invalid password', async () => {
    return request(app)
      .post('/api/users/signup')
      .send({
          email: 'tesnfdnfndfnf',
          password: 'p'
      })
      .expect(400);
});

it('it disallows same email ', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
          email: 'test@test.com',
          password: 'password'
      })
      .expect(201);

      await request(app)
      .post('/api/users/signup')
      .send({
          email: 'test@test.com',
          password: 'password'
      })
      .expect(400);  
});

it('sets a cookie  on succesful signup', async () => {
    const response =  request(app)
      .post('/api/users/signup')
      .send({
          email: 'test@test.com',
          password: 'password'
      })
      .expect(201);

    expect(response.get('Set-Cookie')).toBeDefined();

});