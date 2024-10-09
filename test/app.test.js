import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../src/app.js';  // Supondo que você tenha um arquivo app.js que exporta a aplicação Express

const { expect } = chai;
chai.use(chaiHttp);

describe('GET /', () => {
  it('should return Hello World!', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World!');
        done();
      });
  });
});
