import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySlug } from '../../../actions';
import { useParams } from 'react-router-dom';
import { generatePictureurl } from '../../../urlConfig';

/**
* @author
* @function ProductStore
**/

export const ProductStore = (props) => {

    const { slug } = useParams();
    const product = useSelector(state => state.product);
    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 10000,
        under15k: 15000,
        under20k: 20000,
        under30k: 30000,
        above30k: ">30000"
    })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsBySlug(slug));
    }, []);


    return (
        <>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <div className='card'>
                            <div className='cardHeader'>
                                <div> {slug} Mobile {priceRange[key]}</div>
                                <button>View</button>
                            </div>
                            <div style={{ display: 'flex' }}>
                                {
                                    product.productsByPrice[key].map(product =>
                                        <div className='productContainerDirection'>
                                            <div className='productContainer' >
                                                <div className='productImgContainer'>
                                                    <img src={generatePictureurl(product.productPictures[0].img)} alt="" />
                                                </div>
                                            </div>
                                            <div className='productInfo'>
                                                <div style={{ margin: '5px 0' }}>{product.name}</div>
                                                <div>
                                                    <span>4.3</span>&nbsp;
                                                    <span>4345</span>
                                                </div>

                                                <div className='productPrice'>{product.price}</div>
                                            </div>
                                        </div>)
                                }

                            </div>
                        </div>
                    );
                })
            }

        </>
    )

}