let db = require("../database/models")
const path = require("path");
const { where } = require("sequelize");
const { validationResult } = require("express-validator")


let vinosController = {
    list: function(req,res){
     db.Vino.findAll(
        {
       include : [
        {association: "cepas"},
        {association: "bodegas"}
    ]
       })
       .then(function(vinos){
       res.render(path.resolve(__dirname, "../views/listadoDeVinos"), {vinos:vinos})
       })
    },
    add: async function(req,res){
        const vinos = await db.Vino.findAll();
        const cepas = await db.Cepa.findAll();
        const bodegas = await db.Bodega.findAll();
        const lineas = await db.Linea.findAll();
        const maridaje = await db.Maridaje.findAll();
          
        //return res.json(maridaje)
         res.render(path.resolve(__dirname, "../views/crearVinoForm"), 
        {vinos:vinos, cepas:cepas,bodegas:bodegas, lineas:lineas, 
        maridaje:maridaje});
    },

    create:  async  function(req,res){
        const vinos = await db.Vino.findAll();
        const cepas = await db.Cepa.findAll();
        const bodegas = await db.Bodega.findAll();
        const lineas = await db.Linea.findAll();
        const maridaje = await db.Maridaje.findAll();
        
        const resultValidation = validationResult(req); 
        
        if (resultValidation.errors.length > 0) {
            return res.render (path.resolve(__dirname, "../views/crearVinoForm"), 
            {vinos:vinos, cepas:cepas,bodegas:bodegas, lineas:lineas, 
                maridaje:maridaje,  
             errors:resultValidation.mapped(),
                oldData: req.body
            });
        }
            db.Vino.create({
            nombre: req.body.nombre, 
            anio: req.body.anio, 
            cepas_idCepa: req.body.cepa,
            descripcion: req.body.descripcion,
            imagen: req.file.filename,
            lineas_idLineas: req.body.linea,
            maridaje_idmaridaje: req.body.maridaje,
            nombreBodega_idBodega: req.body.bodega,
            potencialGuardado: req.body.potencialGuardado,
            precio: req.body.precio,
            volumen: req.body.volumen
        });
          return res.redirect("/vinos"); 
    },
    delete: async function(req,res){
        const id = req.params.id;
        const vino = await db.Vino.findByPk(id);               
        return res.render(path.resolve(__dirname,"../views/delete"), {vino}); 
    },
    destroy: async (req, res) =>{
       const idVino = req.params.id;
       await db.Vino.destroy({where: {idVino}});
       return res.redirect("/vinos");

    },
    detail: function(req,res){
        db.Vino.findByPk(req.params.id , {
            include : [
             {association: "cepas"},
             {association: "bodegas"},
             {association: "maridaje"},
             {association: "lineas"},

         ]
         } )
        .then(function(vinos){
            res.render(path.resolve(__dirname, "../views/detalleVino"), {vinos:vinos})
        })
    },
    edit: async (req,res) => {
       const id = req.params.id;
       const vino = await db.Vino.findByPk(id);
       const cepas = await db.Cepa.findAll();
       const bodegas = await db.Bodega.findAll();
       const lineas = await db.Linea.findAll();
       const maridaje = await db.Maridaje.findAll();
       return res.render(path.resolve(__dirname, "../views/editarVinoForm"), 
        {vino:vino, cepas:cepas,bodegas:bodegas, lineas:lineas, 
        maridaje:maridaje});
    },
    update: async (req,res) =>{
        const id = req.params.id;
        await db.Vino.update({
            ...req.body
        }, {
            where : {
                id
            }
        })
        return res.redirect(path.resolve(__dirname, "../views/editarVinoForm"));
    },
    cepasList: (req,res) =>{
        db.Cepa.findAll()
        .then(function(cepas){
            res.render(path.resolve(__dirname, "../views/listadoPorCepas"), {cepas:cepas})
             
             })
    },
    tintosList: (req,res) =>{
    res.render(path.resolve(__dirname, "../views/tintos"))
    },
    blancosList: (req,res) =>{
        res.render(path.resolve(__dirname, "../views/blancos"))
    },
    espumantesList: (req,res) =>{
        res.render(path.resolve(__dirname, "../views/espumantes"))
    },
    especialesList: (req,res) =>{
        res.render(path.resolve(__dirname, "../views/especiales"))
    }            

};
module.exports = vinosController