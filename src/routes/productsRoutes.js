const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/productsControllers");

//mostrar productos
router.get("/products", productsControllers.products);
// formulario crear un producto
router.get("/products/create", productsControllers.create);
//a donde se envia el producto
router.post("/products", productsControllers.store);
//Detalle de producto
router.get("/products/:id/", productsControllers.detail);
//editar un producto
router.get("/products/:id/edit", productsControllers.edit);
router.put("/:id", productsControllers.update);
//Eliminar un producto
router.delete("/products/:id", productsControllers.destroy);


module.exports = router;