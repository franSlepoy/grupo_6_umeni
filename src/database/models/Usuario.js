module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario"
    let cols = {
        idUsuarios:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING
        },
        apellido:{
            type: dataTypes.INTEGER
        },
        email:{
            type: dataTypes.INTEGER
        },
        contrasenia:{
            type: dataTypes.INTEGER
        },
        avatar:{
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName : "usuarios",
        timestamps : false
    }
    
    const Usuario = sequelize.define(alias, cols, config);

    return Usuario
}