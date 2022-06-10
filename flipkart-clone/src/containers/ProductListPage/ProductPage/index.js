import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { getProductsPage } from '../../../actions';
import getParams from '../../../utils/getParams';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

/**
* @author
* @function ProductPage
**/

export const ProductPage = (props) => {
    console.log("Here");
    const {search}=useLocation();
    const dispatch=useDispatch();
    const product=useSelector(state=>state.product);
    // console.log(JSON.stringify(product)+"product");
    const { page }=product;
    useEffect(()=>{
        const params=getParams(search);
        const payload={
            params
        }
        dispatch(getProductsPage(payload));
    },[]);
    // console.log("page",JSON.stringify(page.title));
  return(
    <>
      <h3>{page.title}</h3>
      <h3>{page.description}</h3>
      {console.log(JSON.stringify(page.banners))}
      {/* {console.log(page.banners[0].img)} */}
      {/* <img src={page!==[] ? page.banners[0].img:null}></img> */}
      {/* <Carousel>
      
      
        {
          page.banners && page.banners.map((banner,index)=>{
            <div key={index}>
              <img src={banner.img} alt=" " />
              <p className='legend'>Legend.1</p>
            </div>
          })
        }
      </Carousel> */}
      {console.log(page)}
    </>
   )

 }