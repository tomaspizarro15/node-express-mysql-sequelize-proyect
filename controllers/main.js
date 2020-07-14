const Products = require('../models/products');

module.exports.mainController = (req, res, next) => {
    res.render('index',{
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false
    });
  };
  