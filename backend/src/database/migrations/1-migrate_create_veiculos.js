'use strict';
//id, placa, chassi, renavam, modelo, marca, ano
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('veiculos', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      } ,
      placa:{
        type:Sequelize.STRING,
        allowNull:false
      },
      chassi:{
        type:Sequelize.STRING,
        allowNull:false
      },
      renavam:{
        type:Sequelize.STRING,
        allowNull:false
      },
      modelo:{
        type:Sequelize.STRING,
        allowNull:false
      },
      marca:{
        type:Sequelize.STRING,
        allowNull:false
      },
      ano:{
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue:Sequelize.fn('now')
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue:Sequelize.fn('now')
      }


    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('estado');
  }
};
