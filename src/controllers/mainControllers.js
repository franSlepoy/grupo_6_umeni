const path = require("path");
const mainControllers = {
    index: (req,res) => res.render(path.resolve(__dirname, "../views/home")),
    productDetails: (req,res) => res.render(path.resolve(__dirname, "../views/products/productDetails")),
    cart: (req,res) => res.render(path.resolve(__dirname, "../views/products/cart")),
    edit: (req,res) => res.render(path.resolve(__dirname, "../views/products/edit")),
    test: (req,res) => res.render(path.resolve(__dirname, "../views/test")),
}


module.exports = mainControllers;