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
		let idProd = req.params.id;
		const selectedProduct = products.find((product) => product.id == idProd)
		return res.render(path.resolve(__dirname, "../views/products/productDetails"),{selectedProduct})},

	// Create - Form to create
	create: (req, res) => {
		return res.render(path.resolve(__dirname, "../views/products/create"))
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let ultimaObra = products.pop();
		products.push(ultimaObra)
		let nuevaObra = {
			id: ultimaObra.id + 1 ,
    nombre_artista: req.body.nombre_artista ,
    apellido_artista: req.body.apellido_artista ,
    titulo_obra: req.body.titulo_obra,
    categoria: req.body.categoria ,
    imagen: req.body.filname ,
    precio: req.body.precio,
	}
	products.push(nuevaObra);
	let nuevaObraGuardar = JSON.stringify(products,null,2);
	fs.writeFileSync(path.resolve(__dirname, "../data/productos.json"), nuevaObraGuardar);
	
	res.redirect("/products");
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
		return res.redirect("/products");
	}

}

function getProductList(path) {
	return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

function eliminarProducto(id) {
	let products = getProductList(productsFilePath);

	products = products.filter( product => product.id != id);

	fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
}

module.exports = productsControllers;