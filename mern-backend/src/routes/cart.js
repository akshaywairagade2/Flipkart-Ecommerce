const express=require('express');
const { requiresSignIn, userMiddleware } = require('../common-middleware');
const router=express.Router();
const { addItemToCart } = require('../controller/cart');


router.post('/user/cart/addtocart',requiresSignIn,userMiddleware,addItemToCart);


module.exports=router;