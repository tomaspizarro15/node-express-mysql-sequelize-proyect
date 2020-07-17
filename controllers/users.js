const Users = require('../models/user');


exports.postAddUser = (req, res, next) => {

}
exports.getAllUsers = (req, res, next) => {

    Users.findAll().then((users) => {
        res.render('user/add-user', {
            pageTitle: "Users",
            path : 'add-user',
            users: users,
        })
    }

    )

}

exports.getCreateUser = (req,res,next) => {

    res.render('user/add-user', {
        pageTitle: "Users",
        path : 'add-user',
    })
}