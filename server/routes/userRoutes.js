const Router = require('express');
const router = new Router()
const userController = require('../controllers/userController')
const {check} = require('express-validator')

router.post('/register', [
    check('username', "Username can not be empty").notEmpty(),
    check('password', "Password be higher than 4 and less than 20").isLength({min: 4, max: 20})
], userController.registration);
router.post('/login', userController.login);


module.exports = router;
