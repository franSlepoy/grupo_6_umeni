module.exports = (sequelize, dataTypes) => {
   let alias = "Linea";
    let cols = {
          idLinea : {
           type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
          },
          lineascol : dataTypes.STRING(45)
        };
    let config = {
        tableName : "lineas",
        timestamp: false
    }
    const Linea = sequelize.define(alias, cols, config);
    Linea.associate = function(models) {
      Linea.hasMany(models.Vino, {
             as: "vino",
             foreignKey: "lineas_idLineas"
          })
        }
    return Linea
}