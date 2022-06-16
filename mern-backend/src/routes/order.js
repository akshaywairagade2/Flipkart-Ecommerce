const express=require('express');
const { requiresSignIn, userMiddleware } = require('../common-middleware');
const router=express.Router();
const { addOrder, getOrders } = require('../controller/order');

router.post('/addOrder', requiresSignIn, userMiddleware, addOrder);
router.get('/getOrders', requiresSignIn, userMiddleware, getOrders);

module.exports = router;