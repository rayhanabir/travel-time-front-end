import React from 'react';
import { useParams } from 'react-router';

const Book = () => {
    const {bookId} = useParams();
    
    return (
        <div>
            <p>this is book page:{bookId}</p>
        </div>
    );
};

export default Book;