const path = require("path");
const mainControllers = {
    index: (req,res) => res.render(path.resolve(__dirname, "../views/home")),
    menuMobile: (req,res) => res.render(path.resolve(__dirname, "../views/menuMobile")),
    cart: (req,res) => res.render(path.resolve(__dirname, "../views/cart")),
}


module.exports = mainControllers;