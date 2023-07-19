const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');

const {
  describe, beforeEach, afterEach, it,
} = mocha;
const { messageMock } = require('../mocks/messageMock');
const { Messages } = require('../../src/models');
const app = require('../../src/app');

chai.use(chaiHttp);

describe('Testing Endpoint message', () => {
  const { expect } = chai;
  beforeEach(() => {
    sinon.stub(Messages, 'create').resolves(messageMock);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Testing POST /message to create a file', async () => {
    const userId = 1;
    const fileName = 'file';
    const fileContent = Buffer.from('testing file', 'utf8');

    const response = await chai
      .request(app)
      .post('/message')
      .attach('file', fileContent, fileName)
      .field('userId', userId)
      .buffer(false);

    expect(response).to.have.status(200);
    expect(response.body).to.deep.equal(messageMock);
  });

  it('Testing POST /message ocurr an error without file', async () => {
    const userId = 1;
    const fileName = 'file';
    const response = await chai.request(app)
      .post('/message')
      .field('userId', userId)
      .field('fileName', fileName);

    expect(response).to.have.status(404);
  });
});
