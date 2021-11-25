const fs = require("fs");
const path = require("path");

module.exports = (req, res, next) => {
    let ruta = path.join(__dirname, '..', 'logs', 'usersLogs');
    let url = req.url;
    let log = `El usuario ingresó a la ruta: ${url}`;

    fs.appendFileSync(ruta, log + "\n", 'utf-8');
    next();
  };
  