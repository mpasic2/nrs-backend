process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.should();
const db = require('./database/db.js');
const server = require('./server.js');
let expect = chai.expect;


describe('/GET useri', () => {
    it('Prikaz svih usera', (done) => {
      chai.request(server)
        .get('/GetUsers')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(err).to.be.null;
          expect(res).to.be.a.string;
          done();
        });
    });
  });

  describe('/GET products', () => {
    it('Prikaz svih proizvoda', (done) => {
      chai.request(server)
        .get('/GetProducts')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(err).to.be.null;
          expect(res).to.be.a.toString('string');          
          done();
        });
    });
  });

  describe('/GET orders', () => {
    it('Prikaz svih narudzbi', (done) => {
      chai.request(server)
        .get('/GetOrders')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(err).to.be.null;
          expect(res).to.be.a.toString('string');          
          done();
        });
    });
  });

  describe('/GET bills', () => {
    it('Prikaz svih racuna', (done) => {
      chai.request(server)
        .get('/GetBills')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(err).to.be.null;
          expect(res).to.be.a.toString('string');          
          done();
        });
    });
  });

  //komentar test