const express = require('express'); 
const shop = require('../controllers/shop')

const route = express.Router(); 


route.get('/shop' , shop.getShop);


module.exports = route; 