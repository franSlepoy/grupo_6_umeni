const path = require ('path');
const { body } = require('express-validator');

module.exports = [
    body("nombre").notEmpty().withMessage("Tenés que escribir un nombre de vino"),
    body("descripcion").notEmpty().withMessage("Tenés que escribir una descripción"),
    body("precio").notEmpty().withMessage("Tenés que escribir un precio"),
    body("anio").notEmpty().withMessage("Tenés que escribir un año"),
    body("bodega").notEmpty().withMessage("Tenés que seleccionar una bodega"),
    body("linea").notEmpty().withMessage("Tenés que seleccionar una linea"),
    body("cepa").notEmpty().withMessage("Tenés que seleccionar una cepa"),
    body("maridaje").notEmpty().withMessage("Tenés que seleccionar un maridaje"),
    body("potencialGuardado").notEmpty().withMessage("Tenés que escribir un potencial de guardado"),
    body("volumen").notEmpty().withMessage("Tenés que escribir un volumen"),
    body("imagen").custom((value, {req})=>{
      let file = req.file;
      let acceptedExtensions = ['.jpg','.jpeg', '.png', '.gif'];
      if (!file) {
          throw new Error ('Tienes que subir una imagen');
      } else {
          let fileExtension = path.extname(file.originalname);
          if (!acceptedExtensions.includes(fileExtension)) {
              throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
          }
      }
      
      return true;
  })
 
]
