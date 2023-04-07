module.exports = (sequelize, dataTypes) => {
    let alias = "Pedido"
    let cols = {
        idPedido:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuarios_idUsuarios:{
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName : "pedidos",
        timestamps : false
    }
    
    const Pedido = sequelize.define(alias, cols, config);

    return Pedido
}