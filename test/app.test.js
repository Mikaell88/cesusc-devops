const request = require('supertest');
const app = require('./src/app.js');

describe('GET /', () => {
  it('should return the index.html file', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
   
  });
});