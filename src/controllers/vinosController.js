let db = require("../database/models")
const path = require("path");

let vinosController = {
    list: function(req,res){
       db.Cepa.findAll()
       .then(function(cepas){
        res.render(path.resolve(__dirname, "../views/listadoDeVinos"), {cepas:cepas})
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