const Sequelize = require('sequelize');
const database = require('../database/database');

const Products = database.define('products' ,{ 
    id : {
        primaryKey : true, 
        type : Sequelize.INTEGER,
        allowNull : false, 
        autoIncrement : true, 
    },
    title : {
        type : Sequelize.STRING,
        allowNull : false, 
    },
    price : {
        type : Sequelize.INTEGER,
        allowNull : false, 
    },
    description : {
        type : Sequelize.STRING,
        allowNull : false, 
    }
}, {timestamps : false, })

module.exports = Products; 