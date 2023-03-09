const express = require('express');
const router = express.Router();

const noticeBoardController = require('../../controllers/admin-noticeboard-controller')

router.get('/notice',noticeBoardController.getNotice );


module.exports = router;
