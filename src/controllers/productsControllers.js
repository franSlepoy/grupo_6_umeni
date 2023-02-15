const { response } = require("express");
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productos.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))

const productsControllers = {
    //Mostrar productos
    products: (req,res) => {
        
        return res.render(path.resolve(__dirname, "../views/products/products"), {products})
    },
    
	// Detail - Detail from one product
	productDetails: (req,res) => {
		idProd = req.params.id
		const selectedProduct = products.find(product=>product.id == idProd)
		res.render(path.resolve(__dirname, "../views/products/productDetails"),{selectedProduct: selectedProduct})},

	// Create - Form to create
	create: (req, res) => {
		return res.render(path.resolve(__dirname, "../views/products/create"))
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let obra = {
			titulo: req.body.titulo_obra ,
			nombreArtista: req.body.nombre_artista,
			imagen: req.body.imagen
        }
		console.log(obra)
		//res.send(obra)
		res.redirect("/products")
	},

	// Update - Form to edit
	edit: (req, res) => {
		const id = req.params.id;
		const product = products.find(product => product.id == id);
		return res.render("edit", { product });
	},
	// Update - Method to update
	update: (req, res) => {
		const id = req.params.id;
		
		const product = {
			id,
			...req.body,
			image: req.file?.filename ? req.file.filename : "imagen.png"
		}
		guardarProducto(product)
		return res.redirect("/products");
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		eliminarProducto(req.params.id);
		return res.redirect("/productdetails");
	}

}

function eliminarProducto(id) {
	let products = getProductList(productsFilePath);

	products = products.filter( product => product.id != id);

	fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
}

module.exports = productsControllers;