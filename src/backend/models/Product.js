const { Schema, model } = require('mongoose');

const productSchema = new Schema({

    category: String,
    type: String,
    name: String,
    description: String,
   	price: Schema.Types.Decimal128,
   	image: String,
    stock: Number

},{
    timestamps: true // Fecha de creación y fecha de modificación
});


module.exports = model('Product', productSchema);