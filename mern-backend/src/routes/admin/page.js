const express = require('express');
const { upload, requiresSignIn, adminMiddleware } = require('../../common-middleware');
const { createPage, getPage } = require('../../controller/admin/page');
const router = express.Router();;

router.post('/page/create',requiresSignIn,adminMiddleware,upload.fields([
    {name:'banners'},
    {name:'products'}
]),createPage);

router.get('/page/:category/:type',getPage);

module.exports = router;