const Router = require('express');
const router = new Router()
const cartController = require('../controllers/cartController')
const authMiddleware = require('../middlewares/authMiddleware')

router.get('', authMiddleware, cartController.getCart);
router.post('/create', authMiddleware, cartController.addToCart);
router.delete('', authMiddleware, cartController.removeFromCart);

module.exports = router;

