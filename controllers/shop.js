const Products = require('../models/products');

exports.getShop = (req,res,next) => {
    res.render('shop/shop' ,{
        products : null,
        pageTitle : 'Shop',
        permition : 'all',
    })
}
