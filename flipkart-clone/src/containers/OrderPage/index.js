import React, { useEffect } from 'react'
import { Layout } from '../../components/Layout'
import { Card } from '../../components/UI/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../actions';
import { generatePictureurl } from '../../urlConfig';
import "./style.css";
import { Breed } from '../../components/MaterialUI';
import { IoIosArrowForward } from 'react-icons/io';
/**
* @author
* @function OrderPage
**/

export const OrderPage = (props) => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrders());
    }, [])

    return (
        <Layout>
            <div style={{ maxWidth: "1160px", margin: "5px auto" }}>
                <Breed
                    breed={[
                        { name: "Home", href: "/" },
                        { name: "My Account", href: "/account" },
                        { name: "My Orders", href: "/account/orders" },
                    ]}
                    breedIcon={<IoIosArrowForward />}
                />
                {
                    user.orders.map((order) => {
                        return order.items.map(item =>
                            <Card style={{ maxWidth: "1200px", margin: "5px auto" }}>
                                <div className='orderItemContainer'>
                                    <div style={{
                                        width: 80,
                                        height: 80,
                                        overflow: 'hidden',
                                        textAlign: 'center'
                                    }}>
                                        <img style={{
                                            maxWidth: 80,
                                            maxHeight: 80
                                        }} src={generatePictureurl(item.productId.productPictures[0].img)} /></div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flex: 1,
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 300,
                                            }}>{item.productId.name}</div>
                                        <div>{item.payablePrice}</div>
                                        <div>{order.paymentStatus}</div>
                                    </div>

                                </div>
                            </Card>
                        )
                    })
                }
            </div>
        </Layout>
    )

}