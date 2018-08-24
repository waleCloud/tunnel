import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../index';
import users from '../mock/users';

import models from '../../app/models';

chai.use(chaiHttp);
chai.should();

describe('Test user endpoints', () => {
    it('User should signup email, username & password', (done) => {
        chai.request(app)
        .post('/api/user/new')
        .type('form')
        .send({
            _method: 'post',
            email: users.user1.email,
            username: users.user1.username,
            password: users.user1.password,
        })
        .end((err, res) => {
            if (err) done(err);
            expect(res.status).to.equal(201);
            res.body.should.have.property('data');
            res.body.should.have.property('message', 'user created succesfully');
            res.body.should.have.property('auth', true);
        });
        done();
    });

    it('User should be able to login with email & password', (done) => {
        chai.request(app)
        .post('/api/user/login')
        .type('form')
        .send({
            _method: 'post',
            email: users.user1.email,
            password: users.user1.password,
        })
        .end((err, res) => {
            if (err) done(err);
            expect(res.status).to.equal(200);
            res.body.should.have.property('token');
            res.body.should.have.property('auth', true);
        });
        done();
    });

    it('User should be able to login with username & password', (done) => {
        chai.request(app)
        .post('/api/user/login')
        .type('form')
        .send({
            _method: 'post',
            email: users.user1.username,
            password: users.user1.password,
        })
        .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(200);
        res.body.should.have.property('token');
        res.body.should.have.property('auth', true);
        });
        done();
    });
            
    it('Should Get a sinlge user profile', (done) => {
        chai.request(app)
        .get('/api/user/1')
        .end((err, res) => {
            if (err) done(err);
            expect(res.status).to.equal(200);
            expect(res.body.data).to.be.an('object');
        });
        done();
    });
});
