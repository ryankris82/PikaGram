const assert = require('assert');
const test = require('tape');
const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');
const { expect } = require('chai');

const userCredentials = {
    email: 'demo@gmail.com',
    password: 'password'
}

const authenticatedUser = request.agent(app);

before(function (done) {
    authenticatedUser
        .post('/api/users/token')
        .send(userCredentials)
        .expect(200)
        .end(function (err, res) {
            done();
        });
})

describe('GET /api/posts/:postId', () => {
    describe('When given a valid post', () => {
        it('should return a status of 200 and Content-Type of JSON', async () => {
            const res = await request(app)
                .get('/api/posts/1')
                .expect('Content-Type', /json/)
                .expect(200)
                .end
        })
    })
    describe('When given an invalid post', () => {
        it('should return a status of 500', async () => {
            const res = await request(app)
                .get('api/posts/34242')
                .expect(500)
                .end
        })
    })
})

// describe('POST /api/posts', () => {
//     describe('When given valid data', () => {
//         it('should return a status of 200', async() => {
//             const res = await request(app)
//             .post('/api/posts')
//             .set('Authorization', token)
//             .send({
//                 caption:
//             })
//         })
//     })
// })
//Bearer ${token}
describe('PUT /posts/:postId', () => {
    describe('When given valid data', () => {
        it('should return a status of 200', async () => {
            const res = await request(app)
                .put('api/posts/1')
                // .set('Authorization', `abbddfa`)
                .send({
                    caption: 'This is a new caption'
                })
                .expect(200)
                .end
        })
    })
})
