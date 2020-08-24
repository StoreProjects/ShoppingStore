const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true
	},
	email:String, 
	password:String, 
    name:String,
    shoppingCart:{

		name:String,
		price: Number,
		type:String,
		amount: Number

	}
},{
    timestamps: true // Fecha de creación y fecha de modificación
});

userSchema.methods.generateHash = (password) => {//Encriptar una contraseña
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};


module.exports = model('User', userSchema);