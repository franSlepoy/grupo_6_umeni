const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productos.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))

const productsControllers = {
    products: (req,res) => {
        return res.send("/products", {products})
        //return res.render("products")
    },
}


module.exports = productsControllers;