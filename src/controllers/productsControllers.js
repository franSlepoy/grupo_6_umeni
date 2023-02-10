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
	detail: (req, res) => {
		
	},

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
		//res.send(obra)
		res.redirect("/home")
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}

}


module.exports = productsControllers;