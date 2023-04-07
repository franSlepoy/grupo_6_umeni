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
        tableName : "usuarios",
        timestamps : false
    }
    
    const Usuario = sequelize.define(alias, cols, config);

    return Usuario
}