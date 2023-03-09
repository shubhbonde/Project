const express = require('express');
const {check} = require('express-validator');
const router = express.Router();

const adminController = require('../../controllers/admin-controller')

router.post('/signup', [
    check('name').not().isEmpty(),
    check('socityname').not().isEmpty(),
    check('phoneno').isNumeric().not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min:6})
], adminController.signup);

router.post('/login', adminController.login);

module.exports = router;
