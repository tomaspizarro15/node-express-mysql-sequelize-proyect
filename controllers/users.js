const Users = require('../models/user');


exports.postAddUser = (req, res, next) => {

}
exports.getAllUsers = (req, res, next) => {

    Users.findAll().then(() => {
        res.render('/users', {
            pageTitle: "Users",
            
        })
    }

    )

}