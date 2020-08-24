const productCtrl = {};

const Product = require('../models/Product');

const { verificarToken } = require("../middlewares/autenticacion");

productCtrl.getProducts = verificarToken, async (req, res) =>{

    const products = await Product.find();

    res.json(products);

}

productCtrl.createProduct = async (req, res) => {

    const { category, type, name, description, price, image, stock } = req.body;

    const newProduct = new Product();

    newProduct.category = category,
    newProduct.type = type,
    newProduct.name = name,
    newProduct.description = description,
    newProduct.price = price,
    newProduct.image = image,
    newProduct.stock = stock

    await newProduct.save();

    res.json({Message: 'Product has been create'})

}

productCtrl.getProduct = async (req, res) => {

    const product = await Product.findById(req.params.id);

    res.json(product);

}

productCtrl.updateProduct = async (req, res) => {

    const { category, type, name, description, price, image, stock } = req.body;

    await Product.findOneAndUpdate({_id:req.params.id}, {

        category,
        type,
        name,
        description,
        price,
        image,
        stock

    })
    res.json({message: 'Product Updated'})

}

productCtrl.deleteProduct = async (req, res) =>{

    await Product.findByIdAndDelete(req.params.id);

    res.json({message: 'Product Deleted'})

}

module.exports = productCtrl;