const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/productsControllers");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, "../../public/images")) 
    },
    filename: (req, file, cb) => {
        // let fileName=`${Date.now()}_img${path.extname(file.originalname)}`
        // cb(null, filename)
        //let extArray = file.mimetype.split("/");
        //let extension = extArray[extArray.length - 1];
        //cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
        cb(null, "obra" + Date.now()+path.extname(file.originalname) )
        }
})

const uploadFile = multer({ storage });





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