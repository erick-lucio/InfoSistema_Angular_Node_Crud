const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();


require('./src/database');

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(routes);


const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});


/*


    Criar projeto backend utilizando (NodeJs)
    Criar crud de veículos com os seguintes atributos (id, placa, chassi, renavam, modelo, marca, ano). Obs.: Os dados podem ser salvos em arquivos
    Criar teste unitários utilizando Mocha (Node) para cada uma das operações (create, read, update, delete)
    Criar recursos rest para acesso aos dados dos veículos
    Criar projeto front-end utilizando a tecnologia Angular 5+
    Criar lista de veiculos. Obs.: os dados deverão ser recuperados dos recursos rest definidos na aplicação backend
    Disponibilizar projeto no github 
*/
module.exports = app;