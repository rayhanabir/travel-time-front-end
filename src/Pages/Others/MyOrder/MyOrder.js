import axios from 'axios';
import React, {useEffect} from 'react';
import { useState } from 'react';



const MyOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/orders')
        .then(res=>console.log(res.data))
        .catch(err=>{
            console.log(err)
        })
    }, [])
    
    return (
        <>
            

        </>
    );
};

export default MyOrder;