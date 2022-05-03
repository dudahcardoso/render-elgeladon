require("dotenv").config();

const express = require('express'); //importar o express
const cors = require('cors');//Importamos a biblioteca no código
const routes = require('./src/routes/paleta.routes')

const conectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3000;
const app = express(); //A execução do express, que será a nossa aplicação armazenada na variável app;

conectToDatabase();

app.use(cors()); //ativando o cors
app.use(express.json()); //aplicação reconheça o formato JSON nas requisições

app.use('/paletas', routes)

app.listen(port, () => {
  console.log(`Servidor rodando  na porta ${port}`);
}); 
