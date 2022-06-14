const express=require('express');
const { requiresSignIn, userMiddleware } = require('../common-middleware');
const router=express.Router();
const { addAddress,getAddress }=require('../controller/address');

router.post('/user/address/create',requiresSignIn,userMiddleware,addAddress);
router.post('/user/getaddress',requiresSignIn,userMiddleware,getAddress);

module.exports=router;