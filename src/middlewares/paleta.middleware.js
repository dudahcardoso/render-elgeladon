const mongoose = require("mongoose");

const validId = (req, res, next) => {
    const idParam = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(idParam)){
        return res.status(400).send({message: 'Id inválido'})
      }
      next();

};

const validObjectBody = (req, res, next) => {
    const paleta = req.body;

    if (
        !paleta ||
        !paleta.sabor ||
        !paleta.descricao ||
        !paleta.foto ||
        !paleta.preco
      ) 
        return res.status(400).send(
          'Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio! Preencha todos os campos solicitados',
        );
        next();
};



module.exports = {
    validId,
    validObjectBody
}
