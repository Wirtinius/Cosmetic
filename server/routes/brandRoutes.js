const Router = require('express');
const router = new Router()
const brandController = require('../controllers/brandController')
const upload = require('../middlewares/uploadMiddleware'); 
const admin = require('../middlewares/adminMiddleware');

router.get('', brandController.getBrands);
router.get('/:id', brandController.getBrand);
router.post('/create', [upload, admin], (req, res, next) => {
    brandController.createBrand(req, res, next);
});
module.exports = router;

