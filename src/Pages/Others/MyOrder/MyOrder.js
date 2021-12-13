import axios from 'axios';
import React, {useEffect} from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Order from '../Order/Order';
import './MyOrder.css';



const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const {user} = useAuth();
    // console.log(user.email)
    useEffect(()=>{
        axios.get(`http://localhost:5000/orders?email=${user.email}`)
        .then(res=>setOrders(res.data))
        .catch(err=>{
            console.log(err)
        })
    }, [])
    
    return (
        <>
           <div className="all-order">
           {
                orders.map(order =><Order key={order._id} order={order}></Order>)
            }
           </div>
        </>
    );
};

export default MyOrder;