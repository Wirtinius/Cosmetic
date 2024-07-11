const Router = require('express');
const router = new Router()
const userController = require('../controllers/userController')
const {check} = require('express-validator')
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', [
    check('username', "Username can not be empty").notEmpty(),
    check('password', "Password be higher than 4 and less than 20").isLength({min: 4, max: 20})
], userController.registration);
router.post('/login', userController.login);
router.get('/users', authMiddleware, userController.getAllUsers);


module.exports = router;
