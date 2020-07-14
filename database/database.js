const Sequelize = require('sequelize');

const database = new Sequelize('nodecourse' , 'root' , '15703728' , {
    dialect : 'mysql',
    host : 'localhost',
}) 

module.exports = database; 