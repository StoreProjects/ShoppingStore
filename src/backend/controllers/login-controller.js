const loginCtrl = {};

const User = require('../models/User');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const { verificarToken } = require("../middlewares/autenticacion");


loginCtrl.getUsers = verificarToken, async (req, res) => {
    
    const users = await User.find();

    res.json(users);
}

loginCtrl.logUser = async (req, res, done) => {

    const { email, password } = req.body;

    User.findOne({'email': email}, function(err, user){

        if(!user){
            return res.status(400).send({
                ok:false,
                err:{
                    message:'Usuario no válido'
                }
            })
        }

        if(!bcrypt.compareSync(password,user.password)){
            return res.status(400).send({
                ok:false,
                err:{
                    message:'Clave no válida'
                }
            })
        }

        let token = jwt.sign({
            usuariobd: user
        },'secret',{expiresIn:'24h'})

        res.json({
            ok:true,
            usuariobd: user,
            token
        })
       
    })

}

module.exports = loginCtrl;