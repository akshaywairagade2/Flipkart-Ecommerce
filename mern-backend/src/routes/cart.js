const express=require('express');
const { requiresSignIn, userMiddleware } = require('../common-middleware');
const router=express.Router();
const { addItemToCart, getCartItems } = require('../controller/cart');


router.post('/user/cart/addtocart',requiresSignIn,userMiddleware,addItemToCart);
router.post('/user/getCartItems',requiresSignIn,userMiddleware,getCartItems);

module.exports=router;