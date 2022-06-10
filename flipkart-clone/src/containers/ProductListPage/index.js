import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import getParams from '../../utils/getParams';
import { ProductPage } from './ProductPage';
import { ProductStore } from './ProductStore';
import './style.css';
/**
* @author
* @function ProductListPage
**/

export const ProductListPage = (props) => {
  const {search}=useLocation();
  console.log(search);
  const renderProduct=()=>{
    const params=getParams(search);
    let content=null;
    switch(params.type){
      case 'store':
        content=<ProductStore {...props}/>
        break;
      case 'page':
        console.log("There");
        content=<ProductPage {...props}/>
        break;
      default:
        content=null;
    }
    return content;
  }

  return (
    <Layout>
      {renderProduct()}
    </Layout>
  )

}
