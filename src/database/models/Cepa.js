module.exports = (sequelize, dataTypes) => {
    let alias = "Cepa"
    let cols = {
        idCepa:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCepa:{
            type: dataTypes.STRING
        },
        
    }
    let config = {
        tableName : "cepas",
        timestamps : false
    }
    
    const Usuario = sequelize.define(alias, cols, config);

    return Usuario
}