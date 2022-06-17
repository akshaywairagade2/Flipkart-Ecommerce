import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateOrder } from '../../actions';
import Layout from '../../components/Layout'
import {Card} from "../../components/UI/Card";

import './style.css';
/**
* @author
* @function Orders
**/

export const Orders = (props) => {
  const order=useSelector(state=>state.order);
  const [type,setType]=useState('');
  const dispatch=useDispatch();

  const onOrderUpdate =(orderId)=>{
    const payload={
      orderId,
      type,
    };
    dispatch(updateOrder(payload));
  }
  return(
    <Layout sidebar>
        {
          order.orders.map((orderItem,index)=>
            <Card key={index} headerLeft={orderItem._id}>
          <div 
          style={{
            boxSizing:"border-box",
            padding:"100px",
            display:'flex',
            alignItems:'center',
          }}
          >
            <div className='orderTrack'>
              <div className='orderStatus'>
                <div className='point'></div>
                <div className='orderInfo'>
                  <div className='status'>Ordered</div>
                  <div className='date'>14 Aug 2022</div>
                </div>
              </div>
              <div className='orderStatus'>
                <div className='point'></div>
                <div className='orderInfo'>
                  <div className='status'>Ordered</div>
                  <div className='date'>14 Aug 2022</div>
                </div>
              </div>
              <div className='orderStatus'>
                <div className='point'></div>
                <div className='orderInfo'>
                  <div className='status'>Ordered</div>
                  <div className='date'>14 Aug 2022</div>
                </div>
              </div>
              <div className='orderStatus'>
                <div className='point'></div>
                <div className='orderInfo'>
                  <div className='status'>Ordered</div>
                  <div className='date'>14 Aug 2022</div>
                </div>
              </div>
            </div>
            {/* Select input for different status */}
            <div style={{
              padding:"0 50px",
              boxSizing:"border-box"
            }}>
              <select onChange={(e)=>setType(e.target.value)}>
              <option value={""}>select status</option>
                {orderItem.orderStatus.map((status)=>{
                  return(
                    <>
                    {
                      !status.isCompleted ? 
                       <option 
                       key={status.type} 
                       value={status.type}>{status.type}
                       </option> 
                       : null
                    }
                     
                    </>
                  )
                })}
              </select>
            </div>
            {/* Button */}
            <div style={{
              padding:"0 50px",
              boxSizing:"border-box"
            }}>
              <button onClick={()=>onOrderUpdate(orderItem._id)}>Confirm</button>
            </div>
          </div>
        </Card>)
        }
        
    </Layout>
   )

 }