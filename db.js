const Comites = require("./data/Comites");
const DatosInternos = require("./data/DatosInternos");
const Directorio = require("./data/Directorio");
const Estados = require("./data/Estados");
const Usuarios = require("./data/usuarios");

module.exports = {
  Comites,
  DatosInternos,
  Directorio,
  Estados,
  Usuarios
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
