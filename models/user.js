const Sequelize = require('sequelize');
const database = require('../database/database');

const User = database.define('users' , {

    id : {
        primaryKey : true,
        autoIncrement : true, 
        type : Sequelize.INTEGER,
        allowNull : false,
    },
    username : {
        primaryKey : true,
        type : Sequelize.STRING,
        allowNull : false,
        unique : true, 
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true, 
    }

}, {timestamps : false})


module.exports = User; 