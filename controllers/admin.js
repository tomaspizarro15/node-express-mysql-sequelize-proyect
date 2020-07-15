const Products = require('../models/products');

exports.getAdminProducts = (req, res, next) => {

    Products.findAll().then(products => {
        res.render('admin/products', {
            path: '/admin/product',
            pageTitle: 'Admin Products',
            products: products
        }).catch(e => console.log(e))
    }

    )

}