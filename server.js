const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database/db.js');
const { query } = require('express');
const { stringify } = require('querystring');

app.use(express.json());

db.sequelize.sync().then(function () {
    console.log("Tables created - uredu je!");
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

app.get('/GetOrderItems', function (req, res) {

    db.orderItem.findAll().then(function (rez) {
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

app.get('/GetOrderItemsOrderID/:id', function (req, res) {
    var idOI = req.params.id;
    db.orderItem.findAll({ where: { orderId: idOI } }).then(function (rez) {
        res.end(JSON.stringify(rez));
    });
});

app.get('/GetOrderItemsProductID/:id', function (req, res) {
    var idOI = req.params.id;
    db.orderItem.findAll({ where: { productId: idOI } }).then(function (rez) {
        res.end(JSON.stringify(rez));
    });
});


//Dobavljanje korisnika po usernameu
app.get('/GetUserByUsername',function(req,res){    
    
    const queryObject = url.query;
    var userName = queryObject['username'].toString();    
    db.user.findOne({where:{username:userName}}).then(function(rez){        
        res.end(JSON.stringify(rez));
    });     
});

//Dobavljanje zaposlenika po role-u

app.get('/GetEmployeesByRole/:role',function(req,res){    
    
    var roleEmployee = req.params.role;
    db.employee.findAll({ where: { role: roleEmployee } }).then(function (employee) {
        res.json(employee);
    })    
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

app.delete('/DeleteOrderItems', function (req, res) {
    db.orderItem.destroy({where:{}}).then(function (orderitem) {
        res.end("Uspješno obrisani svi artikli narudžbi!");
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


function validirajUsera(ime1 = '', prezime1 = '', username1 = '', password1 = '', email1 = '', telefon1 = '', adresa1 = '', datum1)
{
    if(ime1 == null || prezime1 == null || email1 == null || telefon1 == null || adresa1 == null || username1 == null || password1 == null)
    {
        console.log("Neispravni podaci!");
        return false;
    }
    if (!(typeof ime1 == 'string') || !(typeof prezime1 == 'string') || ime1.length == 0 || prezime1.length == 0 ||
        !(typeof email1 == 'string') || !(typeof telefon1 == 'string') || email1.length == 0 || telefon1.length == 0 ||
        !(typeof username1 == 'string') || !(typeof password1 == 'string') || username1.length == 0 || password1.length == 0 ||
        !(typeof adresa1 == 'string') || adresa1.length == 0)
    {
        console.log("Neispravni podaci1!");
        return false;
    }

    var parsedDate = Date.parse(datum1);

    if (!(isNaN(datum1) && !isNaN(parsedDate))) {
        console.log("Neispravan datum rođenja!");
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
                
                if (validirajProizvod(ime, kolicina, cijena, kategorija, popust, barKod) == false)
                {
                    res.status(400).send("Neispravni podaci za dodavanje proizvoda!");  
                    return;
                }
                    res.writeHead(200);
                    db.product.create({name: ime, quantity: kolicina, price: cijena, categoryId: kategorija, discount: popust, barCode: barKod}).then(function (product) {
                        res.end("Uspješno dodan artikal!");
                    });               
                 
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

app.post('/AddUser', function (req, res) {
    
    var tijeloZahtjeva = '';
    req.on('data',function(data){
        tijeloZahtjeva+=data;
    });

    req.on('end',function(){  
        var zahtjev = new url.URLSearchParams(tijeloZahtjeva);

        var ime = zahtjev.get('firstName'); 
        var prezime = zahtjev.get('lastName'); 
        var korisnicko = zahtjev.get('username'); 
        var lozinka = zahtjev.get('password');
        var emailU = zahtjev.get('email'); 
        var telefon = zahtjev.get('phone'); 
        var adresa = zahtjev.get('address'); 
        var datum = zahtjev.get('birthDate'); 

        if (validirajUsera(ime, prezime, korisnicko, lozinka, emailU, telefon, adresa, datum) == false)
        {
            res.status(400).send("Neispravni podaci za dodavanje korisnika!");  
            return;
        }
        res.writeHead(200);

        db.user.create({firstName: ime, lastName: prezime, username: korisnicko, password: lozinka, email: emailU, phone: telefon, address: adresa, birthDate: datum}).then(function (user) {
            res.end("Uspješno dodan korisnik!");
        })
        return;
    });    
});

app.post('/AddOrder', function (req, res) {

    var tijeloZahtjeva = '';
    req.on('data',function(data){
        tijeloZahtjeva+=data;
    });

    req.on('end',function(){  
        var zahtjev = new url.URLSearchParams(tijeloZahtjeva);
        var kasir = parseInt(zahtjev.get('employeeId'));   
        var placanje = parseInt(zahtjev.get('paymentType'));   
        var datum = zahtjev.get('datetime');   
        var status = zahtjev.get('status');
        
        res.writeHead(200);
        db.order.create({employeeId: kasir, paymentType: placanje, date: datum, status: status}).then(function (orderitem) {
            res.end("Uspješno kreirana narudzba");
        })
    });  
});

app.post('/AddOrderItem', function (req, res) {

    var tijeloZahtjeva = '';
    req.on('data',function(data){
        tijeloZahtjeva+=data;
    });

    req.on('end',function(){  
        var zahtjev = new url.URLSearchParams(tijeloZahtjeva);
        var narudzba = parseInt(zahtjev.get('orderId'));   
        var proizvod = parseInt(zahtjev.get('productId'));   
        var kolicina = parseInt(zahtjev.get('quantity'));   
        
        if (narudzba == null || proizvod == null || kolicina == null || kolicina <= 0)
        {
            res.status(400).send("Neispravni podaci za dodavanje proizvoda u narudzbu!");  
            return;
        }
        res.writeHead(200);
        db.orderItem.create({orderId: narudzba, productId: proizvod, quantity: kolicina}).then(function (orderitem) {
            res.end("Proizvod uspješno dodan na narudzbu!");
        })
    });  
});

app.post('/AddBill', function (req, res) {

    var tijeloZahtjeva = '';
    req.on('data',function(data){
        tijeloZahtjeva+=data;
    });

    req.on('end',function(){  
        var zahtjev = new url.URLSearchParams(tijeloZahtjeva);
        var brojNarudzbe = parseInt(zahtjev.get('orderId')); 
        var cijena = parseFloat(zahtjev.get('total')); 
        var fiskalniBroj = parseInt(zahtjev.get('fiscalNumber'));
        
        if (brojNarudzbe == null || cijena == null || fiskalniBroj == null || brojNarudzbe <= 0 || cijena <= 0 || fiskalniBroj <= 0)
        {
            res.status(400).send("Neispravni podaci za dodavanje racuna!");  
            return;
        }

        res.writeHead(200);
        db.bill.create({orderId: brojNarudzbe, total: cijena, fiscalNumber: fiskalniBroj}).then(function (bill) {
            res.end("Uspješno dodan račun!");
        })
    });  
});

app.post('/AddEmployee', function (req, res) {

    
    var tijeloZahtjeva = '';
    req.on('data',function(data){
        tijeloZahtjeva+=data;
    });

    req.on('end',function(){  
        var zahtjev = new url.URLSearchParams(tijeloZahtjeva);

        var userId = parseInt(zahtjev.get('userId')); 
        var managerId = parseInt(zahtjev.get('managerId')); 
        var datumZaposlenja = zahtjev.get('hireDate'); 
        var jobTitle = zahtjev.get('jobTitle');
        var role = parseInt(zahtjev.get('email')); 

        if (userId == null || managerId == null || datumZaposlenja == null || jobTitle == null || role == 0)
        {
            res.status(400).send("Neispravni podaci za dodavanje uposlenika!");  
            return;
        }


    db.employee.create({userId: userId, managerId: managerId, hireDate: datumZaposlenja, jobTitle: jobTitle, role: role}).then(function (employee) {
        res.end("Uspješno dodan zaposlenik!");
    })
}); 
});



//PUT ZAHTJEVI

app.put('/UpdateProduct/:id', function (req, res) {
    
    var tijeloZahtjeva = '';
    req.on('data',function(data){
        tijeloZahtjeva+=data;
    });

    req.on('end',function(){  
        var zahtjev = new url.URLSearchParams(tijeloZahtjeva);

        var idProduct = req.params.id;

        var ime = zahtjev.get('name'); 
        var kolicina = parseInt(zahtjev.get('quantity')); 
        var cijena = parseFloat(zahtjev.get('price')); 
        var kategorija = parseInt(zahtjev.get('categoryId'));
        var popust = parseFloat(zahtjev.get('discount'));
        var barKod = zahtjev.get('barCode');
        
        res.writeHead(200);

        if (ime != null)
        {            
            db.product.update({name: ime}, {where:{id:idProduct}});
        }

        if (kolicina != null)
        {            
            db.product.update({quantity: kolicina}, {where:{id:idProduct}});
        }

        if (cijena != null && cijena > 0)
        {            
            db.product.update({price: cijena}, {where:{id:idProduct}});
        }

        if (kategorija != null && kategorija > 0)
        {            
            db.product.update({categoryId: kategorija}, {where:{id:idProduct}});
        }

        if (popust != null && popust >= 0)
        {            
            db.product.update({discount: popust}, {where:{id:idProduct}});
        }

        if (barKod != null && popust > 0)
        {            
            db.product.update({barCode: barKod}, {where:{id:idProduct}});
        }

        res.end('Uspjesno azuriran proizvod!');
        return;
    });    
});

app.put('/UpdateCategory/:id', function (req, res) {
    
    var tijeloZahtjeva = '';
    req.on('data',function(data){
        tijeloZahtjeva+=data;
    });

    req.on('end',function(){  
        var zahtjev = new url.URLSearchParams(tijeloZahtjeva);
        var idCat = req.params.id;

        var ime = zahtjev.get('name'); 
        
        res.writeHead(200);

        if (ime != null)
        {            
            db.category.update({name: ime}, {where:{id:idCat}});
        }

        res.end('Uspjesno azurirana kategorija!');
        return;
    });    
});

app.put('/UpdateBill/:id', function (req, res) {
    
    var tijeloZahtjeva = '';
    req.on('data',function(data){
        tijeloZahtjeva+=data;
    });

    req.on('end',function(){  
        var zahtjev = new url.URLSearchParams(tijeloZahtjeva);
        var idBill = req.params.id;

        var orderId = parseInt(zahtjev.get('orderId')); 
        var total = parseFloat(zahtjev.get('total')); 
        var fiscalNumber = parseInt(zahtjev.get('fiscalNumber')); 
        
        res.writeHead(200);

        if (orderId != null && orderId >= 0)
        {            
            db.bill.update({orderId: orderId}, {where:{id:idBill}});
        }
        if (total != null && total > 0)
        {            
            db.bill.update({total: total}, {where:{id:idBill}});
        }
        if (fiscalNumber != null && fiscalNumber > 0)
        {            
            db.bill.update({fiscalNumber: fiscalNumber}, {where:{id:idBill}});
        }


        res.end('Uspjesno azurirana kategorija!');
        return;
    });    
});

app.put('/UpdateEmployee/:id', function (req, res) {
    
    var tijeloZahtjeva = '';
    req.on('data',function(data){
        tijeloZahtjeva+=data;
    });

    req.on('end',function(){  
        var zahtjev = new url.URLSearchParams(tijeloZahtjeva);
        var idEmployee = req.params.id;

        var userId = parseInt(zahtjev.get('userId')); 
        var managerId = parseInt(zahtjev.get('managerId'));
        var role = parseInt(zahtjev.get('role')); 
        var jobTitle = zahtjev.get('jobTitle'); 
        var hireDate = zahtjev.get('hireDate');

        res.writeHead(200);

        if (userId != null && userId > 0)
        {            
            db.employee.update({orderId: orderId}, {where:{id:idEmployee}});
        }
        if (managerId != null && managerId > 0)
        {            
            db.employee.update({managerId: managerId}, {where:{id:idEmployee}});
        }
        if (role != null && role > 0)
        {            
            db.employee.update({role: role}, {where:{id:idEmployee}});
        }

        if (jobTitle != null)
        {            
            db.employee.update({jobTitle: jobTitle}, {where:{id:idEmployee}});
        }

        if (hireDate != null)
        {            
            db.employee.update({hireDate: hireDate}, {where:{id:idEmployee}});
        }

        res.end('Uspjesno azuriran uposlenik!');
        return;
    });    
});

app.put('/UpdateUser/:id', function (req, res) {
    
    var tijeloZahtjeva = '';
    req.on('data',function(data){
        tijeloZahtjeva+=data;
    });

    req.on('end',function(){  
        var zahtjev = new url.URLSearchParams(tijeloZahtjeva);
        var idUser = req.params.id;
      
        var ime = zahtjev.get('firstName'); 
        var prezime = zahtjev.get('lastName'); 
        var korisnicko = zahtjev.get('username'); 
        var lozinka = zahtjev.get('password');
        var emailU = zahtjev.get('email'); 
        var telefon = zahtjev.get('phone'); 
        var adresa = zahtjev.get('address'); 
        var datum = zahtjev.get('birthDate'); 

        res.writeHead(200);

        if (ime != null)
        {            
            db.user.update({firstName: ime}, {where:{id:idUser}});
        }

        if (prezime != null)
        {            
            db.user.update({lastName: prezime}, {where:{id:idUser}});
        }

        if (korisnicko != null)
        {            
            db.user.update({username: korisnicko}, {where:{id:idUser}});
        }

        if (lozinka != null)
        {            
            db.user.update({password: lozinka}, {where:{id:idUser}});
        }

        if (emailU != null)
        {            
            db.user.update({email: emailU}, {where:{id:idUser}});
        }

        if (telefon != null)
        {            
            db.user.update({phone: telefon}, {where:{id:idUser}});
        }

        if (adresa != null)
        {            
            db.user.update({address: adresa}, {where:{id:idUser}});
        }

        if (datum != null)
        {            
            db.user.update({hireDate: datum}, {where:{id:idUser}});
        }
        





        res.end('Uspjesno azuriran uposlenik!');
        return;
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
    console.log("Baza kreirana i popunjena - kad ovo ispise uredu je!");
});

module.exports = server