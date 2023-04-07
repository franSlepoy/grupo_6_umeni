module.exports = (sequelize, dataTypes) => {
    let alias = "IntPedidoVinos"
    let cols = {
        idIntPedidoVinos:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        vino_idVino:{
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName : "intPedidosVinos",
        timestamps : false
    }
    
    const IntPedidoVinos = sequelize.define(alias, cols, config);

    return IntPedidoVinos
}