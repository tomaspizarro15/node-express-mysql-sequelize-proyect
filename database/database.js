const Sequelize = require('sequelize');

const database = new Sequelize('nodecourse' , 'root' , '15703728' , {
    dialect : 'myslq',
    host : 'localhost',
}) 

module.exports = database; 