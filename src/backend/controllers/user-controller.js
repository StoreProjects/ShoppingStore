const userCtrl = {};

const User = require('../models/User');

const { verificarToken } = require("../middlewares/autenticacion");

userCtrl.getUsers = verificarToken, async (req, res) =>{

    const users = await User.find();

    res.json(users);

}

userCtrl.getUser = async (req, res) => {

    const user = await User.findById(req.param.id);

    res.json(user);

}

userCtrl.updateUser = async (req, res) => {

    const { username, email, password, name } = req.body;

    await User.findOneAndUpdate({_id:req.params.id},{

        username,
        email, 
        password, 
        name

    });
    res.json({message: 'User Updated'})

}

userCtrl.deleteUser = async (req, res) =>{

    await User.findByIdAndDelete(req.params.id);

    res.json({message: 'User Deleted'})

}

module.exports = userCtrl;