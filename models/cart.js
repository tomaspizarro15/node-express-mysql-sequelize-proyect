const database = require('../database/database'); 
const Sequelize = require('sequelize');

const Cart  = database.define('cart' , {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false, 
        primaryKey : true,
    },
    products : {
        type : Sequelize.STRING, 
        allowNull : true, 
    },
    price : {
        type: Sequelize.INTEGER,
        allowNull : true, 
        defaultValue : 0,
    },
    qty: {
        type: Sequelize.INTEGER,
        allowNull : true, 
        defaultValue : 0,
    },
}, {timestamps : true})

module.exports = Cart; 