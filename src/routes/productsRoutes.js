const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/productsControllers");

//mostrar productos
router.get("/", productsControllers.products);
// formulario crear un producto
router.get("/create", productsControllers.create);
//a donde se envia el producto creado
router.post("/create", productsControllers.store);
//Detalle de producto
router.get("/productdetails/:id", productsControllers.productDetails);
//editar un producto
router.get("/edit/:id", productsControllers.edit);
router.put("/:id", productsControllers.update);
//Eliminar un producto
router.delete("/delete/:id", productsControllers.destroy);


module.exports = router;