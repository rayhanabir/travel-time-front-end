import React from 'react';
import './OrderList.css';


const OrderList = (props) => {
   const {email, product, ticketCount, _id} = props.order;
  
    return (
        <div className='container'>
            <div className="list-container">
                
            </div>
            
        </div>
    );
};

export default OrderList;