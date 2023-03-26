const express = require('express');
const {check} = require('express-validator');

const guardController = require('../../controllers/admin-guard-controller');

const router = express.Router();


router.get('/:guardid', guardController.getGuardById)

router.post('/', guardController.createGuard)

router.patch('/:guardid', [
    check('name').isLength(
        {min: 5, max: 64}
    ),
    check('dutytime').not().isEmpty(),
], guardController.updateGuard)

router.delete('/:guardid', guardController.deleteGuard)

module.exports = router;
