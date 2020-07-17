const express = require('express');
const user = require('../controllers/users');

const route = express.Router(); 

route.get('/add-user' , user.getCreateUser);
route.post('/add-user' , user.postCreateUser)

module.exports = route;