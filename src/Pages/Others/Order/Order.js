import React from 'react';
import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Order = (props) => {
    const {ticketCount, product} = props.order;
    return (
        <div>
            <div className="order-card-container">
                <div className="order-card">
                    <img src={product.image} alt="" />
                    <h4>{product.name}</h4>
                    <h4>Qty: {ticketCount}</h4>
                    <p className='pending'><small>Pending</small></p>
                    <p><FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></p>
                    
                </div>
            </div>
        </div>
    );
};

export default Order;