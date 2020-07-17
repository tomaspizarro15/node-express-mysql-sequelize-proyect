const path = require('path')

const express = require('express');
const parser = require('body-parser');
const bodyParser = require('body-parser');

const database = require('./database/database.js');

const Product = require('./models/products');
const User = require('./models/user');

const mainRoute = require('./routes/main');
const shopRoute = require('./routes/shop');
const adminRoute = require('./routes/admin');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public'))) //give node access to some folder

app.use('/admin', adminRoute)
app.use(mainRoute)
app.use(shopRoute)
app.use((req, res, next) => {

    User.findByPk(1).then(user => {
        req.user = user;
    });
    next();

})

Product.belongsTo(User, { contraints: true, onDelete: 'CASCADE' });           //Relacion de Hijo a Padre
User.hasMany(Product);                                                         //Relacion de Padre a Hijo



database.sync()

    .then(result => {
       return  User.findByPk(1)
    })
    .then(user  => {
        if(!user){
            console.log('User unexisting')
            User.create({username : 'tomasito' , email: 'test01@test.com'})
        }
        return user
    })
    .then(user => {
        console.log(user);
        app.listen(3000); 
    })
    .catch(err => console.log(err));