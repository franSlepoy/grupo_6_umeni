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
    
    const Cepa = sequelize.define(alias, cols, config);
    Cepa.associate = function(models) {
        Cepa.hasMany(models.Vino,{
           as: "vinos",
           foreignKey: "cepas_idCepa"
        })
    }

    return Cepa
}