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
        
    }
};
module.exports = vinosController