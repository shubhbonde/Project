const express = require('express');
const {check} = require('express-validator')
const residentcontrollers = require('../../controllers/admin-resident-controller');

const router = express.Router();


router.get('/:flatno', residentcontrollers.getResidentByFlatNo)

router.post('/', residentcontrollers.createResident)

router.patch('/:flatno', [
    check('name').isLength(
        {min: 5, max: 64}
    ),
    check('fammembers').isNumeric().not().isEmpty(),
    check('phone').isNumeric().not().isEmpty()
], residentcontrollers.updateResident)

router.delete('/:flatno', residentcontrollers.deleteResident)

module.exports = router;
