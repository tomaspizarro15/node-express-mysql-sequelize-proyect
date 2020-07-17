const Products = require('../models/products');
const User = require('../models/user');

exports.getAdminProducts = (req, res, next) => {

    User.createProduct.then(products => {

        if (products.length === 0) {
            console.log('no products available')
        }
        res.render('admin/products', {
            path: '/admin/product',
            pageTitle: 'Admin Products',
            products: products
        }).catch(e => console.log(e))
    }
    )
}

exports.getAddProduct = (req,res,next) => {

    res.render('admin/add-product' , {
        path : 'admin/add-product',
        pageTitle : 'Add Product',
    })

}