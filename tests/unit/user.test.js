const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');

const {
  describe, beforeEach, afterEach, it,
} = mocha;

const app = require('../../src/app');

const { userMock, findByPk } = require('../mocks/userMock');
const { Users } = require('../../src/models');

chai.use(chaiHttp);

describe('Testing Endpoint User', () => {
  beforeEach(() => {
    sinon.stub(Users, 'findByPk').resolves(findByPk);
    sinon.stub(Users, 'create').resolves(userMock);
  });

  const { expect } = chai;
  let chaiHttpResponse;

  afterEach(() => {
    sinon.restore();
  });

  it('Return must be an error', async () => {
    chaiHttpResponse = await chai.request(app).post('/user').send({
      name: 'user',
      email: 'useremail.com',
      password: 'abc13',
    });
    expect(chaiHttpResponse.status).to.be.eq(400);
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
});
