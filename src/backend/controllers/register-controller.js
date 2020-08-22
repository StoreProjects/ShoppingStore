const registerCtrl = {};

const User = require('../models/User');

registerCtrl.getUsers = async (req, res) => {
    
    const users = await User.find();

    res.json(users);
}

registerCtrl.createUser = async (req, res) => {

    const { username, email, password, name } = req.body;

    /*const newUser = new User({
        username,
        email,
        User.generateHash(password),
        name
    });*/

    const newUser = new User();

    newUser.username = username;
    newUser.email = email;
    newUser.password = newUser.generateHash(password);
    newUser.name = name;

    await newUser.save();

    res.json({message: 'User Saved'})

}

module.exports = registerCtrl;