const http = require('http');
const fs = require('fs');
const url = require('url'); 
const express = require('express');
const app = express();


const db = require('./database/db.js');
db.sequelize.sync().then(function(){
    console.log("Tables creted");
    
});

app.post('/',function(req,res){
    res.end("Dobrodošli na backend TIMA 4");
});

app.get('/',function(req,res){
    res.end("Dobrodošli na backend TIMA 4");
});

app.listen(1000);
