const mongoose = require("mongoose");

const conectToDatabase = () => {
  mongoose
  .connect(process.env.URI_DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => console.log('MONGODB ATLAS CONECTADO!'))
.catch((error) =>
console.log(`Erro ao conectar com o MongoBD, erro: ${error}`)
)
};

module.exports = conectToDatabase;
