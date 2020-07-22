const Users = require('../models/user');
const User = require('../models/user');
const Cart = require('../models/cart');

exports.getAllUsers = (req, res, next) => {

    Users.findAll().then((users) => {
        res.render('user/add-user', {
            pageTitle: "Users",
            path : 'add-user',
            users: users,
        })
    })
}
exports.getCreateUser = (req,res,next) => {

    res.render('user/add-user', {
        pageTitle: "Users",
        path : 'add-user',
    })
}
exports.postCreateUser = (req, res, next) => {
    console.log("USER INPUT DATA:" ,req.body.username, req.body.email, req.body.password)
    Users.create(
        {
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
        }
    ).then(user => {
        console.log("User created:::::>", user)
        Cart.create()
        .then( cart => {
            return cart 
        })

    })
    .then(cart => {
        console.log(cart)
        res.redirect('/')
    })  
    .catch(err => {
        console.log("Something failed creating user::::::>" , err)
    })
}
exports.postLogin = (req,res,next) => {

    console.log( "Incoming username:", req.body.username , "Incoming password:", req.body.password )

    User.findAll()
    .then( (users) => { res.redirect('/'); console.log( "Found this users: ", users)} )
    .catch( err => {
        console.log("Incorrect Data")
        res.redirect('/login')
    })

}
exports.getLogin = (req,res,next) => {
    res.render('user/login', {
        path : '/login', 
        pageTitle : 'Log In',
    })
}