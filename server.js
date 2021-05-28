const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');
const app = express();
const setup = require("./dbInit.js");

const db = require('./database/db.js');
const { query } = require('express');
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
