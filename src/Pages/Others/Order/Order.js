import React from 'react';
import './Order.css';

const Order = (props) => {
    const {data, ticketCount, totalPrice} = props.order;
    return (
        <>
            <div className="container">
                <div className="card">
                   <div className="card-content">
                   <h4>{data.name}</h4>
                    <h4>Qty {ticketCount}</h4>
                    <h4>Price: {totalPrice}</h4>
                   </div>
                </div>

            </div>
        </>
    );
};

export default Order;