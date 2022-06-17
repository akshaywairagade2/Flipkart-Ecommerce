const express=require("express");
const router=express.Router();
const { requiresSignIn, adminMiddleware } = require('../../common-middleware');
const { updateOrder } = require("../../controller/admin/order.admin");

router.post('/order/update',requiresSignIn,adminMiddleware,updateOrder)

module.exports=router;