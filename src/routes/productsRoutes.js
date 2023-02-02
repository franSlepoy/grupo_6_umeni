const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/productsControllers");

router.get("/products", productsControllers.listaProductos);

module.exports = router;