const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/productsControllers");

//mostrar productos
router.get("/", productsControllers.products);
// formulario crear un producto
router.get("/create", productsControllers.create);
//a donde se envia el producto
router.post("/", productsControllers.store);
//Detalle de producto
router.get("/:id/", productsControllers.detail);
//editar un producto
router.get("/:id/edit", productsControllers.edit);
router.put("/:id", productsControllers.update);
//Eliminar un producto
router.delete("/:id", productsControllers.destroy);


module.exports = router;