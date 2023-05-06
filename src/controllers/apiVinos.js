//const { Op } = require("sequelize");
const db = require("../database/models");
const Op = db.Sequelize.Op;

//SELECT * FROM `vinos` WHERE cepas_idCepa = 1

module.exports = {
    list: async (req,res) => {
        const vinos = await db.Vino.findAll();
        res.json({
            total: vinos.length ,
            data: vinos ,
            status: 200
        })     
    },

    cepaList: async(req,res) =>{
        const vinos = await db.Vino.findAll({
            attributes: [
              [db.Sequelize.fn('COUNT', db.Sequelize.col('idVino')), 'total_vinos'],
            ],
            where: {
                cepas_idCepa: req.params.cepas_idCepa
            }
          });
          res.json({
            data: vinos,
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