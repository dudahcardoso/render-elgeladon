const Paleta = require('../models/Paleta');
const Paletas = require('../models/Paleta');

const findAllPaletasService = async () => {
  const allPaletas = await Paletas.find(); //find metodo nativo do mongoose e faz a busca
  return allPaletas;
};

const findByIdPaletaService = (idParam) => {
  const onePaleta = Paletas.findById(idParam);
  return onePaleta;
};

const createPaletaService = async (newPaleta) => {
  const createdPaleta = await Paleta.create(newPaleta);
  return createdPaleta;
};

const updatePaletaService = async (idParam, editPaleta) => {
  const updatePaleta = await Paletas.findByIdAndUpdate(idParam, editPaleta);
  return updatePaleta;
};

const deletePaletaService = async (idParam) => {
  return await Paletas.findByIdAndDelete(idParam);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
