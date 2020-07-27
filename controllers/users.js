const Users = require('../models/user');
const User = require('../models/user');
const Cart = require('../models/cart');

exports.getAllUsers = (req, res, next) => {

    Users.findAll().then((users) => {
        res.render('user/add-user', {
            pageTitle: "Users",
            path: 'add-user',
            users: users,
        })
    })
}
exports.getCreateUser = (req, res, next) => {

    res.render('user/add-user', {
        pageTitle: "Users",
        path: 'add-user',
    })
}
exports.postCreateUser = (req, res, next) => {
    console.log("USER INPUT DATA:", req.body.username, req.body.email, req.body.password)
    Users.create(
        {
            username: req.body.username,
            first_name: req.body.first,
            last_name: req.body.last,
            email: req.body.email,
            password: req.body.password,
        }
    ).then(user => {
        console.log(user);
        res.redirect('/')
    })
        .catch(err => {
            console.log("Something failed creating user::::::>", err)
        })
}
exports.getLogin = (req, res, next) => {
    res.render('user/login', {
        path: '/login',
        pageTitle: 'Log In',
    })
}
exports.postLogin = (req, res, next) => {
    const inputUsername = req.body.username;
    const inputPassword = req.body.password;

    console.log("Incoming data :>", inputUsername, inputPassword);
    User.findAll({ where: { username: inputUsername, password: inputPassword } })
        .then(user => {
            if(user !== []){
                req.user = user;
                res.redirect('/')
                console.log(user)
            }else {
                res.redirect('/login')
            }
        })
        .catch(err => {
            console.log(err)
        })
}