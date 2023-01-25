const path = require("path");
const mainControllers = {
    index: (req,res) => res.render(path.resolve(__dirname, "../views/home")),
    login: (req,res) => res.render(path.resolve(__dirname, "../views/login")),
    register: (req,res) => res.render(path.resolve(__dirname, "../views/register")),
    productDetails: (req,res) => res.render(path.resolve(__dirname, "../views/productDetails")),
    cart: (req,res) => res.render(path.resolve(__dirname, "../views/cart"))
}

module.exports = mainControllers;