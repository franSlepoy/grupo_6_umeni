//const { Op } = require("sequelize");
const db = require("../database/models");
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');

module.exports = {
    list: async (req,res) => {
        const vinos = await db.Vino.findAll();
        const cepas = await db.Cepa.findAll();
        const vinosFiltro = await Sequelize.Op.query("SELECT vino, COUNT (*) AS vinoPorCepa FROM `vinos` GROUP BY `cepas`", { type: QueryTypes.SELECT });
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