const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');

const {
  describe, beforeEach, afterEach, it,
} = mocha;

const app = require('../../src/app');

const { userMock, findUserByPk } = require('../mocks/userMock');
const { Users } = require('../../src/models');

chai.use(chaiHttp);

describe('Testing Endpoints user/login', () => {
  beforeEach(() => {
    sinon.stub(Users, 'findByPk').resolves(findUserByPk);
    sinon.stub(Users, 'create').resolves(userMock);
  });

  const { expect } = chai;
  let chaiHttpResponse;

  afterEach(() => {
    sinon.restore();
  });

  it('Testing password validation', async () => {
    chaiHttpResponse = await chai.request(app).post('/user').send({
      name: 'user',
      email: 'user@email.com',
      password: 'abc13',
    });
    expect(chaiHttpResponse.error.text).to.be.eq('{"message":"\\"password\\" length must be at least 6 characters long"}');
  });

  it('Testing email validation', async () => {
    chaiHttpResponse = await chai.request(app).post('/user').send({
      name: 'user',
      email: 'useremail.com',
      password: 'abc123',
    });
    expect(chaiHttpResponse.error.text).to.be.eq('{"message":"\\"email\\" must be a valid email"}');
  });

  it('Test create user route', async () => {
    chaiHttpResponse = await chai.request(app).post('/user').send({
      name: 'user',
      email: 'user@email.com',
      password: 'abc123',
    });
    expect(chaiHttpResponse.status).to.be.eq(201);
  });

  it('Test Login Route', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'user@email.com',
      password: 'abc123',
    });

    expect(chaiHttpResponse.status).to.be.eq(200);
  });

  it('Test Login Route using a invalid  user', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'xablau@email.com',
      password: 'abc123',
    });

    expect(chaiHttpResponse.status).to.be.eq(404);
  });
});
