//const { Op } = require("sequelize");
const db = require("../database/models");
const Op = db.Sequelize.Op;

module.exports = {
    list: async (req,res) => {
        const vinos = await db.Vino.findAll();
        res.json({
            total: vinos.length ,
            data: vinos ,
            status: 200


        })
     
    },
    show: async (req,res) => {
        const vinos = await db.Vino.findByPk(req.params.id);
        res.json({
            
            data: vinos,
            status: 200
        })

    }
}