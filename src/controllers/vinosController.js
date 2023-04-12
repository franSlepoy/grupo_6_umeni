let db = require("../database/models")
const path = require("path");
const Cepa = require("../database/models/Cepa");

let vinosController = {
    list: function(req,res){
     db.Vino.findAll()
       // {
       //include : [{associaton: "bodegas"}]
       //})
       .then(function(vinos){
       res.render(path.resolve(__dirname, "../views/listadoDeVinos"), {vinos:vinos})
       })
    },
    add: function(req,res){
        res.render(path.resolve(__dirname, "../views/crearVinoForm"));
    },
    create: function(req,res){
        db.Vino.create({
            nombre: req.body.nombre, 
            anio: req.body.anio, 
            cepas_idCepa: req.body.cepas_idCepa,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            lineas_idLineas: req.body.lineas_idLineas,
            maridaje_idmaridaje: req.body.maridaje_idmaridaje,
            nombreBodega_idBodega: req.body.nombreBodega_idBodega,
            potencialGuardado: req.body.potencialGuardado,
            precio: req.body.precio,
            volumen: req.body.volumen
        });
         res.redirect(path.resolve(__dirname, "../views/listadoDeVinos"));
    },
    delete: function(req,res){
        db.Vino.destroy({
            where: {
                id: req.params.id 
            }
        })
        res.redirect(path.resolve(__dirname, "../views/listadoDeVinos"), {vinos:vinos})
    },
    detail: function(req,res){
        db.Vino.findByPk(req.params.id)
        .then(function(vinos){
            res.render(path.resolve(__dirname, "../views/detalleVino"), {vinos:vinos})
        })
    },
    edit: (req,res) => {
       db.Vino.findByPk(req.params.id)
       .then(function(vino){
        res.render(path.resolve(__dirname, "../views/editarVinoForm"), {vino:vino})
       })
    },
    update: (req,res) =>{
        db.Vino.update({
            nombre: req.body.nombre, 
            anio: req.body.anio, 
            cepas_idCepa: req.body.cepas_idCepa,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            lineas_idLineas: req.body.lineas_idLineas,
            maridaje_idmaridaje: req.body.maridaje_idmaridaje,
            nombreBodega_idBodega: req.body.nombreBodega_idBodega,
            potencialGuardado: req.body.potencialGuardado,
            precio: req.body.precio,
            volumen: req.body.volumen
        }, {
            where : {
                id: req.params.id
            }
        })
        res.redirect(path.resolve(__dirname, "../views/editarVinoForm") + req.params.id);
    },
    cepasList: (req,res) =>{
        db.Cepa.findAll()
        .then(function(cepas){
            res.render(path.resolve(__dirname, "../views/listadoPorCepas"), {cepas:cepas})
             //return  res.json({vinos:vinos});
             })
    }

};
module.exports = vinosController