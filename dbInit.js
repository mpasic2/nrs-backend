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

    var userPromise=[ db.user.create(
        {
            firstName: 'admin',
            lastName: 'admin',
            username: 'admin',
            password: '123',
            email: 'admin@gmail.com',
            phone: '062062062',
            address: 'Nespostojeca 13',
            birthDate: '1999-01-01'
        })
    ];

    return new Promise((resolve, reject) => {
        const promises = Promise.all(userPromise).then(() => {
            db.user.findAll().then(elements => {
                const user = elements.find((el) => el.username === 'admin')
                
                promises.then(() => {
                    var employeePromise = [
                        db.employee.create({
                            userId: user.id,
                            managerId: null,
                            hireDate: '2010-01-01',
                            jobTitle: 'kasir',
                            rule: 1
                        })
                    ];
                    return Promise.all(employeePromise)
                })
                .then(() => {
                        var categoryPromise = [
                            db.category.create({
                                name: 'Hrana'}),
                            db.category.create({
                                name: 'Pice'})

                        ];
                        return Promise.all(categoryPromise)
                    })
                    
                    
                    .then(()=> {
                        db.category.findAll().then(() => {
                                var productPromise = [
                                    db.product.create({
                                        name: 'Milka velka',
                                        quantity: 100,
                                        price: 5,
                                        categoryId: 1,
                                        discount: 0,
                                        barCode: '778894807042'
                                    }),
                                    db.product.create({
                                        name: 'Sarajevski kiseljak',
                                        quantity: 50,
                                        price: 1,
                                        description: 'okus sumsko voce',
                                        categoryId: 1,
                                        discount: 0,
                                        barCode: '854254324315'
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