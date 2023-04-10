let db = require("../database/models")
const path = require("path");

let vinosController = {
    list: function(req,res){
       db.Vino.findAll()
       .then(function(vinos){
        res.render(path.resolve(__dirname, "../views/listadoDeVinos"), {vinos:vinos})
       })
    },
    add: function(req,res){
        
    },
    create: function(req,res){
        
    },
    delete: function(req,res){
        
    },
    detail: function(req,res){
        db.Vino.findByPk(req.params.id)
        .then(function(vinos){
            res.render(path.resolve(__dirname, "../views/detalleVino"), {vinos:vinos})
        })
    }
};
module.exports = vinosController