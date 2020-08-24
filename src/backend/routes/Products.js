const { Router } = require('express');
const router = Router();

const { 
    getProduct, 
    getProducts, 
    createProduct, 
    updateProduct, 
    deleteProduct 
    } = require('../controllers/product-controller');
const { update } = require('../models/User');

router.route('/')
    .get(getProducts)
    .post(createProduct);

    //http://localhost:4000/api/users/1
router.route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct);

module.exports = router;