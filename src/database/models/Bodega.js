module.exports = (sequelize, dataTypes) => {
    let alias = "Bodega"
    let cols = {
        idBodega:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bodegaNombre:{
            type: dataTypes.STRING
        }
        
    }
    let config = {
        tableName : "bodegas",
        timestamps : false
    }
    
    const Bodega = sequelize.define(alias, cols, config);
    Bodega.associate = function(models) {
        Bodega.hasMany(models.Vino, {
           as: "vinos",
           foreignKey: "nombreBodega_idBodega"
        });
    }
  
    return Bodega;
}