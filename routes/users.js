const express = require('express');
const user = require('../controllers/users');

const route = express.Router(); 

route.get('/add-user' , user.getCreateUser);
route.post('/add-user' , user.postCreateUser)

route.get('/login',user.getLogin);
route.post('/login',user.postLogin);

module.exports = route;                                                                                 