const Products = require('../models/products');

exports.getShop = (req,res,next) => {
    Products.findAll().then( (products) => {
        res.render('shop/shop',{
            products : products, 
            pageTitle : 'Shop',
        }) 
    })
}
