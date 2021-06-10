process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.should();
const db = require('./database/db.js');
const server = require('./server.js');
let expect = chai.expect;


/*************TESTIRANJE ZA TABELU BILL */
describe('/GET BILLS', () => {
  it('Prikaz svih računa', (done) => {
    chai.request(server)
      .get('/GetBills')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.a.string;
        done();
      });
  });
});

describe('/GET BILLS', () => {
  it('Prikaz računa po ID-u', (done) => {
    chai.request(server)
      .get('/GetBills/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.a.string;
        done();
      });
  });
});

describe('/GET BILLS', () => {
  it('Prikaz svih računa', (done) => {
    chai.request(server)
      .get('/GetBillsJSON')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});

describe('/GET BILLS', () => {
  it('Prikaz računa po ID-u', (done) => {
    chai.request(server)
      .get('/GetBillsJSON/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});


/*************TESTIRANJE ZA TABELU CATEGORY */
describe('/GET CATEGORIES', () => {
  it('Prikaz svih kategorija', (done) => {
    chai.request(server)
      .get('/GetCategories')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.a.string;
        done();
      });
  });
});

describe('/GET CATEGORIES', () => {
  it('Prikaz svih kategorija', (done) => {
    chai.request(server)
      .get('/GetCategoriesJSON')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});

/*************TESTIRANJE ZA TABELU EMPLOYEE */
describe('/GET EMPLOYEES', () => {
  it('Prikaz svih zaposlenika', (done) => {
    chai.request(server)
      .get('/GetEmployees')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.a.string;
        done();
      });
  });
});

describe('/GET EMPLOYEES', () => {
  it('Prikaz zaposlenika po ID-u', (done) => {
    chai.request(server)
      .get('/GetEmployees/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.a.string;
        done();
      });
  });
});

describe('/GET EMPLOYEES', () => {
  it('Prikaz svih zaposlenika', (done) => {
    chai.request(server)
      .get('/GetEmployeesJSON')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});

describe('/GET EMPLOYEES', () => {
  it('Prikaz zaposlenika po ID-u', (done) => {
    chai.request(server)
      .get('/GetEmployeesJSON/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});

describe('/GET EMPLOYEES', () => {
  it('Prikaz zaposlenika po ulozi - poslu', (done) => {
    chai.request(server)
      .get('/GetEmployeesByRole/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.a.string;
        done();
      });
  });
});

describe('/GET EMPLOYEES', () => {
  it('Prikaz zaposlenika po ulozi - poslu', (done) => {
    chai.request(server)
      .get('/GetEmployeesByRoleJSON/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});


/*************TESTIRANJE ZA TABELU ORDER */
describe('/GET ORDERS', () => {
  it('Prikaz svih narudžbi', (done) => {
    chai.request(server)
      .get('/GetOrders')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.a.string;
        done();
      });
  });
});

describe('/GET ORDERS', () => {
  it('Prikaz narudžbe po ID-u', (done) => {
    chai.request(server)
      .get('/GetOrders/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.a.string;
        done();
      });
  });
});

describe('/GET ORDERS', () => {
  it('Prikaz svih narudžbi', (done) => {
    chai.request(server)
      .get('/GetOrdersJSON')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});

describe('/GET ORDERS', () => {
  it('Prikaz narudžbe po ID-u', (done) => {
    chai.request(server)
      .get('/GetOrdersJSON/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});


/*************TESTIRANJE ZA TABELU ORDERITEM */
describe('/GET ORDER ITEMS', () => {
  it('Prikaz svih stavki svih narudžbi', (done) => {
    chai.request(server)
      .get('/GetOrderItems')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.a.string;
        done();
      });
  });
});

describe('/GET ORDER ITEMS BY ORDER ID', () => {
  it('Prikaz stavki narudžbe po ID-u narudžbe', (done) => {
    chai.request(server)
      .get('/GetOrderItemsOrderID/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.a.string;
        done();
      });
  });
});

describe('/GET ORDER ITEMS BY PRODUCT ID', () => {
  it('Prikaz stavki narudžbe po ID-u proizvoda', (done) => {
    chai.request(server)
      .get('/GetOrderItemsProductID/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.a.string;
        done();
      });
  });
});

describe('/GET ORDER ITEMS', () => {
  it('Prikaz svih stavki svih narudžbi', (done) => {
    chai.request(server)
      .get('/GetOrderItemsJSON')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});

describe('/GET ORDER ITEMS BY ORDER ID', () => {
  it('Prikaz stavki narudžbe po ID-u narudžbe', (done) => {
    chai.request(server)
      .get('/GetOrderItemsOrderIDJSON/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});

describe('/GET ORDER ITEMS BY PRODUCT ID', () => {
  it('Prikaz stavki narudžbe po ID-u proizvoda', (done) => {
    chai.request(server)
      .get('/GetOrderItemsProductIDJSON/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});

/*************TESTIRANJE ZA TABELU PRODUCT */

describe('/GET PRODUCTS', () => {
  it('Prikaz svih proizvoda', (done) => {
    chai.request(server)
      .get('/GetProducts')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.a.string;
        done();
      });
  });
});

describe('/GET PRODUCTS BY ID', () => {
  it('Prikaz proizvoda po ID-u', (done) => {
    chai.request(server)
      .get('/GetProducts/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.a.string;
        done();
      });
  });
});

describe('/GET PRODUCTS', () => {
  it('Prikaz svih proizvoda', (done) => {
    chai.request(server)
      .get('/GetProductsJSON')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});

describe('/GET PRODUCTS BY ID', () => {
  it('Prikaz proizvoda po ID-u', (done) => {
    chai.request(server)
      .get('/GetProductsJSON/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});

/*************TESTIRANJE ZA TABELU USER */

describe('/GET USERS', () => {
  it('Prikaz svih korisnika', (done) => {
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

describe('/GET USERS BY ID', () => {
  it('Prikaz korisnika po ID-u', (done) => {
    chai.request(server)
      .get('/GetUsers/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.a.string;
        done();
      });
  });
});

describe('/GET USERS', () => {
  it('Prikaz svih korisnika', (done) => {
    chai.request(server)
      .get('/GetUsersJSON')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});

describe('/GET USERS BY ID', () => {
  it('Prikaz korisnika po ID-u', (done) => {
    chai.request(server)
      .get('/GetUsersJSON/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});



/*


describe('/GET PRODUCTS BY CATEGORY', () => {
  it('Prikaz proizvoda po kategoriji', (done) => {
    chai.request(server)
      .get('/GetProductsByCategory')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.a.string;
        done();
      });
  });
});







describe('/GET PRODUCTS BY CATEGORY', () => {
  it('Prikaz proizvoda po kategoriji', (done) => {
    chai.request(server)
      .get('/GetProductsByCategoryJSON/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});

*/

/*



//Dobavljanje proizvoda po kategorji
app.get('/GetProductsByCategory',function(req,res){        
    const queryObject = url.query;
    var kategorija = queryObject['category'].toString();   

    db.product.findAll({where:{category:kategorija}}).then(function (rez) {
        res.end(JSON.stringify(rez));
    });    
});


//Dobavljanje proizvoda po kategorji
app.get('/GetProductsByCategoryJSON',function(req,res){        
    const queryObject = url.query;
    var kategorija = queryObject['category'].toString();
    db.product.findAll({where:{categoryId:kategorija}}).then(function (rez) {
        res.json(rez);
    });    
});

*/















/*
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
  });*/

  //komentar test