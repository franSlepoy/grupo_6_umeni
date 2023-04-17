module.exports = (sequelize, dataTypes) => {
    let alias = "Vino"
    let cols = {
        idVino:{
            type: dataTypes.INTEGER,
           primaryKey: true,
            autoIncrement: true
        },
        nombreBodega_idBodega:{
           type: dataTypes.STRING
        },
        lineas_idLineas:{
           type: dataTypes.INTEGER
   },
       cepas_idCepa:{
            type: dataTypes.INTEGER
       },
        anio:{
           type: dataTypes.INTEGER
      },
      maridaje_idmaridaje :{
           type: dataTypes.INTEGER
       },
       potencialGuardado :{
           type: dataTypes.INTEGER
       },
       descripcion :{
          type: dataTypes.STRING
       },
       volumen:{
           type: dataTypes.INTEGER
       },
       precio :{
            type: dataTypes.INTEGER
       },
       nombre :{
        type: dataTypes.STRING
       },
       imagen : {
        type: dataTypes.STRING
       }
      

  }
  let config = {
      tableName : "vinos",
      timestamps : false
  }
   
  const Vino = sequelize.define(alias, cols, config);
   Vino.associate = function(models) {
     Vino.belongsTo(models.Cepa, {
        as: "cepas",
        foreignKey: "cepas_idCepa"
     })
     Vino.belongsTo(models.Bodega, {
        as: "bodegas",
        foreignKey: "nombreBodega_idBodega"
     }); 

   
     
   }
   return Vino
}