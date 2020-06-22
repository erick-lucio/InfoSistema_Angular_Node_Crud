const express = require('express');

const VeiculoController = require('./controllers/VeiculoController');

const routes = express.Router();

function check_autentication(){  
  if(true){
    next();
  }else{
    res.status(500).send("Error Autentication")
  }
}
//crud
routes.get('/veiculos', function (req, res, next) {
    //check_autentication()
    next();
},VeiculoController.getRoute);
//
//RETORNA um usuario
routes.post('/veiculos', function (req, res, next) {
   //check_autentication()

  next();
},VeiculoController.postRoute);//UserController.returnAllUsers);
//
//Adicionar Usuario
routes.delete('/veiculos', function (req, res, next) {
  //check_autentication()
  next();
},VeiculoController.deleteRoute);
//testes
routes.put('/veiculos', function (req, res, next) {
  //check_autentication()
  next();
},VeiculoController.putRoute);

module.exports = routes;