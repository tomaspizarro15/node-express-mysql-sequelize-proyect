const express = require('express');
const admin = require('../controllers/admin');

const route = express.Router();

route.get( '/products', admin.getAdminProducts);
route.get('/add-product' , admin.getAddProduct);


module.exports = route;