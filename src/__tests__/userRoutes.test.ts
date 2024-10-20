import request from 'supertest';
import app from '../app';

describe('User API', () => {
  let createdUserId: string;

  it('should get an empty list of users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });

  it('should create a new user', async () => {
    const newUser = { username: 'Jane Doe', age: 28, hobbies: ['reading'] };
    const res = await request(app)
      .post('/api/users')
      .send(newUser);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.username).toEqual('Jane Doe');
    expect(res.body.age).toEqual(28);
    expect(res.body.hobbies).toEqual(['reading']);

    // Store created user ID for use in subsequent tests
    createdUserId = res.body.id;
  });

  it('should get the created user by ID', async () => {
    const res = await request(app).get(`/api/users/${createdUserId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', createdUserId);
    expect(res.body.username).toEqual('Jane Doe');
    expect(res.body.age).toEqual(28);
    expect(res.body.hobbies).toEqual(['reading']);
  });

  it('should update the created user', async () => {
    const updatedUser = { username: 'Jane Doe', age: 29, hobbies: ['reading', 'writing'] };
    const res = await request(app)
      .put(`/api/users/${createdUserId}`)
      .send(updatedUser);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', createdUserId);
    expect(res.body.username).toEqual('Jane Doe');
    expect(res.body.age).toEqual(29);
    expect(res.body.hobbies).toEqual(['reading', 'writing']);
  });

  it('should delete the created user', async () => {
    const res = await request(app).delete(`/api/users/${createdUserId}`);
    expect(res.statusCode).toEqual(204);
  });

  it('should return 404 for non-existing user', async () => {
    const res = await request(app).get('/api/users/invalid-id');
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('message', 'User not found');
  });
});