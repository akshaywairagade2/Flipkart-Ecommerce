const express = require('express');
const { requiresSignIn, adminMiddleware } = require('../../common-middleware');
const { initialData } = require('../../controller/admin/initialData');
const router = express.Router();

router.post('/initialData',requiresSignIn,adminMiddleware,initialData);

module.exports = router;