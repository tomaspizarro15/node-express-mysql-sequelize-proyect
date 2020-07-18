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
    })
}
exports.getAddProduct = (req, res, next) => {
  Products.findAll().then(products => {
    res.render('admin/add-product', {
        path: 'admin/add-product',
        pageTitle: 'Add Product',
        products : products,
    })
  }).catch(err => console.log(err))
}

exports.postAddProduct = (req, res, next) => {   
    Products.create({
        title: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    })
    .then((product) => {
        console.log("Product created", product);
        res.redirect('/shop');
    })
    .catch(err => console.log(err));
}