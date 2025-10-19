const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false , hasta =10 ) => {
  try {
    let salida = "";

    for (let index = 1; index <= hasta; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
    }
    if (listar) {
      if (listar) {
  console.log("================".green);
  console.log(`   Tabla del ${base}`.blue);
  console.log("================".green);
  console.log(salida.yellow);
}

    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `base-${base}.txt`;
  } catch (err) {
    return err;
  }
};

module.exports = {
  crearArchivo,
};
