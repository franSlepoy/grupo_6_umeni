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

//const storage = multer.diskStorage({
//    destination: (req,file, cb) => {
//                const ruta = path.join(__dirname, "../../public/images");
//               cb(null, ruta)
//    },
//    filename: (req, file, cb) =>{
//      const newFilname = "img" + Date.now() + path.extname(file.originalname);
//      cb(null, newFilname)
//    }
//  })
  
//  const upload = multer({storage})





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
router.put("/:id", productsControllers.update);
//Eliminar un producto
router.delete("/delete/:id", productsControllers.destroy);


module.exports = router;