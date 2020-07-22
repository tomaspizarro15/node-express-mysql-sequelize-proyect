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
    first_name:{
        type : Sequelize.STRING,
        allowNull : false,
    },
    last_name:{
        type : Sequelize.STRING,
        allowNull : false,
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true, 
    },
    password : {
        type : Sequelize.CHAR,
        allowNull : false,
    }

}, {timestamps : false})


module.exports = User; 