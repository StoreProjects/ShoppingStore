//Verificar el token para poder saber si el usuario esta logeado o no
const jwt = require("jsonwebtoken");

let verificarToken = (req, res, next) => {
  let token = req.get("Authorization");//headers

  jwt.verify(token, "secret", (err, decoded) => {

    if (err) {
      return res.status(401).json({
        ok: false,
        err,
        message: 'No esta logeado!'
      });
    }

    req.usuariobd = decoded.usuariobd;

    next();
  });

};

module.exports = {
  verificarToken
};