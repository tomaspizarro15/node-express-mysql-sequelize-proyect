const express = require('express');
const user = require('../controllers/users');

const route = express.Router(); 


route.get('/add-user' , user.getCreateUser);


module.exports = route;