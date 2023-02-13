const path = require("path");
const mainControllers = {
    index: (req,res) => res.render(path.resolve(__dirname, "../views/home")),
    login: (req,res) => res.render(path.resolve(__dirname, "../views/users/login")),
    register: (req,res) => res.render(path.resolve(__dirname, "../views/users/register")),
<<<<<<< HEAD
    //productDetails: (req,res) => res.render(path.resolve(__dirname, "../views/products/productDetails")),
=======
    productDetails: (req,res) => res.render(path.resolve(__dirname, "../views/products/productDetails")),
>>>>>>> 6f90a39a738ee748408f829d758f1cbf77f23f90
    cart: (req,res) => res.render(path.resolve(__dirname, "../views/products/cart")),
    //create: (req,res) => res.render(path.resolve(__dirname, "../views/products/create")),
    edit: (req,res) => res.render(path.resolve(__dirname, "../views/products/edit")),
    test: (req,res) => res.render(path.resolve(__dirname, "../views/test"))
}


module.exports = mainControllers;