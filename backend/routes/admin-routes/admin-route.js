const express = require('express');
const {check} = require('express-validator');
const router = express.Router();

const adminController = require('../../controllers/admin-controller')
const guard_signup_login_controller = require('../../controllers/guard-signup-login-controller')
const resident_signup_login_controller = require('../../controllers/resident-signup-login-controller')


router.post('/adsignup', adminController.signup);

router.post('/adsignin', adminController.login);

// guard signup
router.post('/secsignup', guard_signup_login_controller.signup);

// guard login 
router.post('/secsignin', guard_signup_login_controller.login);



// resident signup
router.post('/signup', resident_signup_login_controller.signup);

// resident login 
router.post('/resisignin', resident_signup_login_controller.login);


module.exports = router;
