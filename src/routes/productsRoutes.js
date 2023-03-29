const express = require("express");
const router = express.Router();
const path = require("path");
const productsControllers = require("../controllers/productsControllers");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../Public/images"));
    },
    filename: function (req, file, cb) {
      cb(null, "obra" + Date.now()+path.extname(file.originalname))
    }
  })

  const upload = multer({ storage: storage })
//mostrar productos
router.get("/", productsControllers.products);
// formulario crear un producto
router.get("/create", productsControllers.create);
//a donde se envia el producto creado
router.post("/create", upload.single("imagen"),  productsControllers.store);
//Detalle de producto
router.get("/productdetails/:id", productsControllers.productDetails);
//editar un producto
router.get("/edit/:id", productsControllers.edit);
router.put("/edit/:id", upload.single("imagen"), productsControllers.update);
//Eliminar un producto
router.delete("/delete/:id", productsControllers.destroy);


module.exports = router;