const Router = require('express');
const router = new Router()
const categoryController = require('../controllers/categoryController')
const upload = require('../middlewares/uploadMiddleware'); 
const admin = require('../middlewares/adminMiddleware');

router.get('', categoryController.getCategories);
router.get('/:id', categoryController.getCategory);
router.post('/create', [upload, admin], (req, res, next) => {
    categoryController.createCategory(req, res, next);
});
module.exports = router;

