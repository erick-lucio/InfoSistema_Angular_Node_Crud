const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Veiculos = require('../models/Veiculos');


const connection = new Sequelize(dbConfig);

Veiculos.init(connection);



module.exports = connection;