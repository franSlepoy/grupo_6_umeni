//const { Op } = require("sequelize");
const db = require("../database/models");
const Op = db.Sequelize.Op;

module.exports = {
    list: async (req,res) => {
        const users = await db.Usuario.findAll({
            attributes: {exclude: ['contrasenia']}
        });
        res.json({
            total: users.length ,
            data: users ,
            status: 200
        })
     
    },
    show: async (req,res) => {
        const users = await db.Usuario.findByPk(req.params.id);
        res.json({
            
            data: users,
            status: 200
        })

    }
}