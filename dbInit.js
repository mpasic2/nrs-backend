const db = require('./database/db.js');


async function sync() {
    await db.sequelize.query("SET FOREIGN_KEY_CHECKS=0;");
    await db.sequelize.sync({force: true});
    await db.sequelize.query("SET FOREIGN_KEY_CHECKS=1;");
}

function synchronization(){ 
    sync()
        .then(function(){
        initialization()
            .then(function(){
                console.log("Gotovo kreiranje tabela i ubacivanje pocetnih podataka!");
        });
    });
}

function initialization() {

    var userPromise=[ 
        db.user.create(
        {
            firstName: 'admin',
            lastName: 'admin',
            username: 'admin',
            password: '123',
            email: 'admin@gmail.com',
            phone: '062062062',
            address: 'Nespostojeca 13',
            birthDate: '1999-01-01'
        }),
        db.user.create(
            {
                firstName: 'Mustafa',
                lastName: 'Pasic',
                username: 'mpasic2',
                password: '12345',
                email: 'mpasic@gmail.com',
                phone: '062062060',
                address: 'Aska Borica 13',
                birthDate: '1999-02-12'
            }),
            db.user.create(
                {
                    firstName: 'Mirnes',
                    lastName: 'Patkovic',
                    username: 'mpatkovic1',
                    password: '12345',
                    email: 'mpatkovic1@gmail.com',
                    phone: '062290610',
                    address: 'Huseta Fatkica 1',
                    birthDate: '1999-03-09'
                }),
                db.user.create(
                    {
                        firstName: 'Berina',
                        lastName: 'Cocalic',
                        username: 'bcocalic1',
                        password: '12345',
                        email: 'bcocalic1@gmail.com',
                        phone: '062289110',
                        address: 'Fra Grge Martica 7',
                        birthDate: '1998-05-09'
                    })
    ];

    return new Promise((resolve, reject) => {
        const promises = Promise.all(userPromise).then(() => {
            db.user.findAll().then(elements => {
                
                
                promises.then(() => {
                    var employeePromise = [
                        db.employee.create({
                            employeeId: 1,
                            userId: 1,
                            managerId: 1,
                            hireDate: '2010-01-01',
                            jobTitle: 'kasir',
                            role: 1
                        }),
                        db.employee.create({
                            employeeId: 2,
                            userId: 2,
                            managerId: null,
                            hireDate: '2010-01-01',
                            jobTitle: 'menadzer',
                            role: 2
                        }),
                        db.employee.create({
                            employeeId: 3,
                            userId: 3,
                            managerId: 1,
                            hireDate: '2010-01-01',
                            jobTitle: 'skladistar',
                            role: 3
                        }),
                        db.employee.create({
                            employeeId: 4,
                            userId: 4,
                            managerId: null,
                            hireDate: '2010-01-01',
                            jobTitle: 'menadzer',
                            role: 2
                        })
                    ];
                    return Promise.all(employeePromise)
                })
                .then(() => {
                        var categoryPromise = [
                            db.category.create({
                                name: 'Hrana'}),
                            db.category.create({
                                name: 'Pice'}),
                            db.category.create({
                                name: 'Tehnika'}),
                            db.category.create({
                                name: 'Igracke'}),
                            db.category.create({
                                name: 'Alat'})  

                        ];
                        return Promise.all(categoryPromise)
                    })

                    .then(() => {
                        var orderPromise = [
                            db.order.create({
                                employerId: 1,
                                paymentType: 2,
                                date: '2021-06-08',
                                status: 'Zavrseno'

                            }),
                            db.order.create({
                                employerId: 1,
                                paymentType: 1,
                                date: '2021-06-07',
                                status: 'Zavrseno'
                            }) 

                        ];
                        return Promise.all(orderPromise)
                    })


                    .then(() => {
                        var billPromise = [
                            db.bill.create({
                                orderId: 1,
                                total: 20,
                                fiscalNumber: 1233213

                            }),
                            db.bill.create({
                                orderId: 2,
                                total: 35,
                                fiscalNumber: 3214542
                                
                            }) 

                        ];
                        return Promise.all(billPromise)
                    })
                    
                    
                    .then(()=> {
                        db.category.findAll().then(() => {
                                var productPromise = [ 
                                    db.product.create({
                                        name: "Milka velika",
                                        quantity: 100,
                                        price: 5,
                                        categoryId: 1,
                                        discount: 0,
                                        barCode: '778894807042'
                                    }),
                                    db.product.create({
                                        name: "Sarajevski kiseljak",
                                        quantity: 50,
                                        price: 1,
                                        categoryId: 2,
                                        discount: 0,
                                        barCode: '854254324315'
                                    }),
                                    db.product.create({
                                        name: 'Bojler 80l',
                                        quantity: 5,
                                        price: 250,
                                        categoryId: 3,
                                        discount: 0,
                                        barCode: '5414849072275'
                                    }),
                                    db.product.create({
                                        name: 'Cekic zidarski',
                                        quantity: 50,
                                        price: 17,
                                        categoryId: 5,
                                        discount: 0,
                                        barCode: '6925582113617'
                                    }),
                                    db.product.create({
                                        name: 'RC helikopter',
                                        quantity: 15,
                                        price: 20,
                                        categoryId: 4,
                                        discount: 0,
                                        barCode: '8718858360147'
                                    })

                                ];
                                return Promise.all(productPromise).then(all => resolve(all))
                            })
                            
                        })

                    .catch(reason => reject(reason));
            })
        });
    });
}

exports.synchronization = synchronization;