const supertest = require('supertest');
const assert = require('assert');
const app = require('../app');

describe('GET /api/posts/:postId', () => {
    context('when given a valid postId', () => {
        it('it should have a status of 200', function (done) {
            supertest(app)
                .get(`/api/posts/1`)
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    console.log(res.json)
                    if (err) {
                        done(err);
                    } else {
                        done();
                    }
                })
        })

    })
    context('when given an invalid postId', () => {

    })
})
