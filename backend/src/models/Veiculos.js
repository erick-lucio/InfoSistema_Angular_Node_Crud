const { Model, DataTypes } = require('sequelize');
//id, placa, chassi, renavam, modelo, marca, ano
class Veiculos extends Model {
  static init(sequelize) {
    super.init({
      placa:DataTypes.STRING,
      chassi:DataTypes.STRING,
      renavam:DataTypes.STRING,
      modelo:DataTypes.INTEGER,
      marca:DataTypes.BOOLEAN,
      ano:DataTypes.INTEGER,
     
    }, {
      sequelize,
      modelName: 'veiculos',
      freezeTableName: true,
    })
  };
  
  
 
}

module.exports = Veiculos;