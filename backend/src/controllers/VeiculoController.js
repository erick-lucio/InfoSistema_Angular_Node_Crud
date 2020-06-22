
const { Op } = require("sequelize");

const Veiculos = require('../models/Veiculos.js');

module.exports = {
  async getRoute(req, res) {
        const veiculos = await Veiculos.findAll({
            attributes: ['id','placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano'],

      });
    res.status(200).send(veiculos);

  },
  async postRoute(req, res) {
    const {placa, chassi, renavam, modelo, marca, ano} = req.body;
    const insert_veiculos = await Veiculos.create({
          
          placa:placa,
          chassi:chassi,
          renavam:renavam,
          modelo:modelo,
          marca:marca,
          ano:ano
    })
    
    res.status(200).send("OK")
  },
  async putRoute(req, res) {
    const {id,placa, chassi, renavam, modelo, marca, ano} = req.body;
    
    const update_veiculos = await Veiculos.update({
      placa:placa,
      chassi:chassi,
      renavam:renavam,
      modelo:modelo,
      marca:marca,
      ano:ano
        
    },{
      where:{id:id}
    })
    res.status(200).send("OK")
  },
  async deleteRoute(req, res) {
    const {id} = req.body;
    
    const delete_veiculos = await Veiculos.destroy(   
      
    {where:
      {id:id}}
    )
    res.status(200).send("OK")
  },

};