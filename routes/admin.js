const express = require('express');
const admin = require('../controllers/admin');

const route = express.Router();

route.get('/add-product' , admin.getAddProduct);

route.post('/add-product' , admin.postAddProduct);


module.exports = route;