const express = require('express'); 
const shop = require('../controllers/shop')

const route = express.Router(); 


route.get('/shop' , shop.getShop); // el primer argumento es DONDE se ejecuta esa consulta


module.exports = route; 