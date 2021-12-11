import React from 'react';
import { useParams } from 'react-router-dom';

const MyOrder = () => {
    const {bookId} = useParams()
    return (
        <div>
            <h4>this is my order page : {bookId}</h4>
        </div>
    );
};

export default MyOrder;