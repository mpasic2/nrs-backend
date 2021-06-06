const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');
const app = express();
const setup = require("./dbInit.js");
const bodyParser = require('body-parser');
const db = require('./database/db.js');
const { query } = require('express');

app.use(express.json());

db.sequelize.sync().then(function () {
    console.log("Tables created");
});


//GET zahtjevi za dobavljanje cijelih tabela

app.get('/GetProducts', function (req, res) {

    db.product.findAll().then(function (rez) {
        res.end(JSON.stringify(rez));
    });
});

app.get('/GetUsers', function (req, res) {

    db.user.findAll().then(function (rez) {
        res.end(JSON.stringify(rez));
    });
});

app.get('/GetEmployees', function (req, res) {

    db.employee.findAll().then(function (rez) {
        res.end(JSON.stringify(rez));
    });
});

app.get('/GetOrders', function (req, res) {

    db.order.findAll().then(function (rez) {
        res.end(JSON.stringify(rez));
    });
});

app.get('/GetBills', function (req, res) {

    db.bill.findAll().then(function (rez) {
        res.end(JSON.stringify(rez));
    });
});

app.get('/GetCategories', function (req, res) {

    db.category.findAll().then(function (rez) {
        res.end(JSON.stringify(rez));
    });
});

//GET zahtjevi za dobavljanje iz tabela po ID-u
app.get('/GetProducts/:id', function (req, res) {

    var idProduct = req.params.id;
    db.product.findOne({ where: { id: idProduct } }).then(function (product) {
        res.json(product);
    })
});

app.get('/GetUsers/:id', function (req, res) {

    var idUser = req.params.id;
    db.user.findOne({ where: { id: idUser } }).then(function (user) {
        res.json(user);
    })
});

app.get('/GetEmployees/:id', function (req, res) {

    var idEmployee = req.params.id;
    db.employee.findOne({ where: { id: idEmployee } }).then(function (employee) {
        res.json(employee);
    })
});

app.get('/GetOrders/:id', function (req, res) {

    var idOrder = req.params.id;
    db.order.findOne({ where: { id: idOrder } }).then(function (order) {
        res.json(order);
    })
});

app.get('/GetBills/:id', function (req, res) {

    var idBill = req.params.id;
    db.bill.findOne({ where: { id: idBill } }).then(function (bill) {
        res.json(bill);
    })
});

//Dobavljanje korisnika po usernameu
app.get('/GetUserByUsername',function(req,res){    
    
    const queryObject = url.query;
    var userName = queryObject['username'].toString();    
    db.user.findAll({where:{username:userName}}).then(function(rez){        
        res.end(JSON.stringify(rez));
    });     
});



//DELETE zahtjevi za brisanje cijelih tabela

app.delete('/DeleteProducts', function (req, res) {
    db.product.destroy({where:{}}).then(function (product) {
        res.end("Uspješno obrisani svi artikli!");
    })
});

app.delete('/DeleteUsers', function (req, res) {
    db.user.destroy({where:{}}).then(function (user) {
        res.end("Uspješno obrisani svi korisnici!");
    })
});

app.delete('/DeleteEmployees', function (req, res) {
    db.employee.destroy({where:{}}).then(function (employee) {
        res.end("Uspješno obrisani svi uposlenici!");
    })
});

app.delete('/DeleteOrders', function (req, res) {
    db.order.destroy({where:{}}).then(function (order) {
        res.end("Uspješno obrisane sve narudzbe!");
    })
});

app.delete('/DeleteBills', function (req, res) {
    db.product.destroy({where:{}}).then(function (bill) {
        res.end("Uspješno obrisani svi racuni!");
    })
});

app.delete('/DeleteCategories', function (req, res) {
    db.category.destroy({where:{}}).then(function (category) {
        res.end("Uspješno obrisane sve kategorije!");
    })
});

//DELETE zahtjevi za brisanje iz tabele po ID-u

app.delete('/DeleteProducts/:id', function (req, res) {
    var idProduct = req.params.id;
    db.product.destroy({ where: { id: idProduct } }).then(function (product) {
        res.end("Uspješno obrisan artikal!");
    })
});

app.delete('/DeleteUsers/:id', function (req, res) {
    var idUser = req.params.id;
    db.user.destroy({where:{ id: idUser }}).then(function (user) {
        res.end("Uspješno obrisan korisnik!");
    })
});

app.delete('/DeleteEmployees/:id', function (req, res) {
    var idEmployee = req.params.id;
    db.employee.destroy({where:{ id: idEmployee }}).then(function (employee) {
        res.end("Uspješno obrisan uposlenik!");
    })
});

app.delete('/DeleteOrders/:id', function (req, res) {
    var idOrder = req.params.id;
    db.order.destroy({where:{ id: idOrder }}).then(function (order) {
        res.end("Uspješno obrisana narudzba!");
    })
});

app.delete('/DeleteBill/:id', function (req, res) {
    var idBill = req.params.id;
    db.bill.destroy({where:{ id: idBill }}).then(function (bill) {
        res.end("Uspješno obrisana narudzba!");
    })
});

app.delete('/DeleteCategory/:id', function (req, res) {
    var idCategory = req.params.id;
    db.category.destroy({where:{ id: idCategory }}).then(function (category) {
        res.end("Uspješno obrisana kategorija!");
    })
});


//DELETE zahtjevi za brisanje iz tabele po drugim parametrima

//Brisanje korisnika po username-u
app.get('/DeleteUsers',function(req,res){    
    
    const queryObject = url.query;
    var userName = queryObject['username'].toString();    
    db.user.destroy({where:{username:userName}}).then(function(user){        
        res.end("Uspješno obrisan korisnik!");
    });
});

//Brisanje artikla po bar kodu
app.get('/DeleteProducts',function(req,res){    
    
    const queryObject = url.query;
    var barcode = queryObject['barcode'].toString();    
    db.product.destroy({where:{barCode:barcode}}).then(function(rez){        
        res.end("Uspješno obrisan artikal!");
    });
});

//POST zahtjevi za dodavanje u tabele

//Validacija zahtjeva za dodavanje


function validirajProizvod(ime1 ='', kolicina1, cijena1, kategorija1, popust1, barKod1 = '')
{
    //Provjeravamo da li su uopće poslane vrijednosti u query-ju
    if(ime1 == null || kolicina1 == null || cijena1 == null || kategorija1 == null || popust1 == null || barKod1 == null)
    {
        console.log("Neispravni podaci!");
        return false;
    }
    
    //Provjeravamo ispravnost unesenih numeričkih vrijednosti
    if (Number.isInteger(kolicina1) == false || kolicina1 < 0 || 
        !(typeof cijena1 == 'number') || !(typeof popust1 == 'number') ||
        Number.isInteger(kategorija1) == false)
        {
            console.log("Neispravni podaci!");
            return false;
        }
    if (!(typeof ime1 == 'string') || !(typeof barKod1 == 'string') || ime1.length == 0 || barKod1.length == 0)
    {
        console.log("Neispravni podaci!");
        return false;
    }

    console.log("Ispravna validacija podataka");
    return true;
}

app.post('/AddProduct', function (req, res) {
    
            var tijeloZahtjeva = '';
            req.on('data',function(data){
                tijeloZahtjeva+=data;
            });

            req.on('end',function(){  
                var zahtjev = new url.URLSearchParams(tijeloZahtjeva);
                var ime = zahtjev.get('name'); 
                var kolicina = parseInt(zahtjev.get('quantity')); 
                var cijena = parseFloat(zahtjev.get('price')); 
                var kategorija = parseInt(zahtjev.get('categoryId'));
                var popust = parseFloat(zahtjev.get('discount'));
                var barKod = zahtjev.get('barCode');
                var id = zahtjev.get('id');
                
                if (validirajProizvod(ime, kolicina, cijena, kategorija, popust, barKod) == false)
                {
                    res.status(400).send("Neispravni podaci za dodavanje proizvoda!");  
                    return;
                }
                res.writeHead(200);

                db.product.create({name: ime, quantity: kolicina, price: cijena, categoryId: kategorija, discount: popust, barCode: barKod}).then(function (product) {
                    res.end("Uspješno dodan artikal!");
                })
                return;
            });    
});

app.post('/AddCategory', function (req, res) {

    var tijeloZahtjeva = '';
    req.on('data',function(data){
        tijeloZahtjeva+=data;
    });

    req.on('end',function(){  
        var zahtjev = new url.URLSearchParams(tijeloZahtjeva);
        var ime = zahtjev.get('name');   
        
        if (ime == null || ime.length == 0)
        {
            res.status(400).send("Neispravni podaci za dodavanje kategorije!");  
            return;
        }
        res.writeHead(200);
        db.category.create({name: ime}).then(function (category) {
            res.end("Uspješno dodana kategorija!");
        })
    });  
});

/*

app.post('/AddUser', function (req, res) {
    db.user.create({where:{}}).then(function (user) {
        res.end("Uspješno dodan korisnik!");
    })
});

app.post('/AddEmployee', function (req, res) {
    db.employee.create({where:{}}).then(function (employee) {
        res.end("Uspješno dodan zaposlenik!");
    })
});

app.post('/AddOrder', function (req, res) {
    db.order.create({where:{}}).then(function (order) {
        res.end("Uspješno dodana narudžba!");
    })
});

app.post('/AddBill', function (req, res) {
    db.bill.create({where:{}}).then(function (bill) {
        res.end("Uspješno dodan račun!");
    })
});

*/

//PUT zahtjevi za mijenjanje parametara u tabelama






/****************************************************** */

app.post('/', function (req, res) {
    res.end("Dobrodošli na backend TIMA 4");
});

app.post('/api', function (req, res) {
    res.end("Dobrodošli na backend TIMA 4");
});

app.get('/', function (req, res) {
    res.end("Dobrodošli na backend TIMA 4");
});


var server = app.listen(1000, () => {
    setup.synchronization();
    console.log("Baza kreirana i popunjena");
});

module.exports = server
