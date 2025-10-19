const argv = require("yargs")(process.argv.slice(2))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe:"muestra la tabla en la consola"
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe:"hasta que numero multiplicar"
  })
  .check((argv) => {
    if (isNaN(argv.b)) throw "La base debe ser un número";
    if (isNaN(argv.hasta)) throw "El límite debe ser un número";
    return true;
  }).argv;

module.exports = argv;
