const { log } = require("console");
const { crearArchivo } = require("./helpers/multiplicar");
const { options } = require("yargs");
const argv = require ("./config/yargs")
const colors = require('colors');


console.clear();

crearArchivo(argv.b, argv.l, argv.hasta)
  .then((msg) => console.log(msg.rainbow, 'creado'))
  .catch((err) => console.log(err));
