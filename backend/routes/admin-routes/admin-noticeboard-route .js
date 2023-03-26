const express = require('express');
const router = express.Router();

const noticeBoardController = require('../../controllers/admin-noticeboard-controller')

router.get('/',noticeBoardController.getNotice );

router.post('/',noticeBoardController.newNotice );

// router.patch('/notice',noticeBoardController.updateNotice );

module.exports = router;
