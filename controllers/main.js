const Products = require('../models/products');
const User = require('../models/user');

module.exports.getMainPage = (req, res, next) => {
  User.findAll()
  .then( data => {
    req.user = data.dataValues; 
    console.log("USER:::::>",req.user)
  })
  .then( (user) => {res.render('index' ,{
      pageTitle : "main",
      user : user
  })})
  .catch( err => console.log(err))
};
