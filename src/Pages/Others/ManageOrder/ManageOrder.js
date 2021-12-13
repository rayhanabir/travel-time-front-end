import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ManageOrder.css';

const ManageOrder = () => {
    const [orderList, setOrderList] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/allorders')
        .then(res => setOrderList(res.data))
        .catch(err =>{
            console.log(err)
        })

    }, [])


    const handleDelete =(id) =>{
        const url = `http://localhost:5000/allorders/${id}`
        fetch(url, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount == 1){
                alert('deleted succefully')
                const remaining = orderList.filter(order =>order._id !== id)
                setOrderList(remaining);
            }
        })
    }

    return (
        <>

        <section className='container'>
            <div className="order_list_heading">
                    <ul>
                        <li>Place Name</li>
                        <li>Email</li>
                        <li>Quantity</li>
                        <li>Action</li>
                    </ul>
            </div>
            <div className="manage-order">

                {
                    orderList.map(order => <section key={order._id}>
                        <div className="order-information">
                            <h5>{order.product.name}</h5>
                            <h5>{order.email}</h5>
                            <h5>{order.ticketCount}</h5>
                            <p className='delete-icon' onClick={()=>handleDelete(order._id)}><FontAwesomeIcon icon={faTrashAlt}/></p>
                        </div>

                    </section>)
                }
            </div>

        </section>
           
        </>
    );
};

export default ManageOrder;