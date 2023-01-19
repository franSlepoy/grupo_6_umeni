const path = require("path");
const mainControllers = {
    index: (req,res) => res.sendFile(path.resolve(__dirname, "../views/home.ejs")),
    login: (req,res) => res.sendFile(path.resolve(__dirname, "../views/login.ejs")),
    register: (req,res) => res.sendFile(path.resolve(__dirname, "../views/register.ejs")),
    productDetails: (req,res) => res.sendFile(path.resolve(__dirname, "../views/productDetails.ejs")),
    cart: (req,res) => res.sendFile(path.resolve(__dirname, "../views/cart.ejs"))
}

module.exports = mainControllers;