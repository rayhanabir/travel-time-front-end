import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import usePlaces from '../../hooks/usePlaces';



const Book = () => {
    const {bookId} = useParams();
    const [places] =usePlaces()

    // const country = places.find(place =>place.id === bookId)
    // console.log(country);
    console.log(places);
    
    return (
        <div>
            <p>this is book page:{bookId}</p>
           
        </div>
    );
};

export default Book;