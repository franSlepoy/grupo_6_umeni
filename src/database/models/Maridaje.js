module.exports = (sequelize, dataTypes) => {
    let alias = "Maridaje"
    let cols = {
        idmaridaje:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        maridaje:{
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName : "maridaje",
        timestamps : false
    }
    
    const Maridaje = sequelize.define(alias, cols, config);
    Maridaje.associate = function(models) {
    Maridaje.hasMany(models.Vino, {
           as: "vino",
           foreignKey: "maridaje_idmaridaje"
        })
   
   
      
        
      }
    return Maridaje
}