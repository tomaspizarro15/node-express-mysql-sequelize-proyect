const Products = require('../models/products');

exports.getShop = (req,res,next) => {
    Products.findAll()
    .then(products => {
        console.log("Products Bingred from Database :::::::>" , products)
        res.render('shop/shop' ,{
        products : products,
        pageTitle : 'Shop',
        permition : 'all',
    })
    }).catch( error => console.log(error))
}
