//const { Op } = require("sequelize");
const db = require("../database/models");
const Op = db.Sequelize.Op;

module.exports = {
    list: async (req,res) => {
        const vinos = await db.Vino.findAll();
        res.json(vinos)
     
    }
}