const Router = require('express');
const router = new Router()
const productController = require('../controllers/productController')
const upload = require('../middlewares/uploadMiddleware'); 
const admin = require('../middlewares/adminMiddleware');

router.get('', productController.getProducts);
router.get('/:id', productController.getProduct);
router.put('/:id', admin, productController.updateProduct);
router.post('/create', [upload, admin], (req, res, next) => {
    productController.createProduct(req, res, next);
});
module.exports = router;

