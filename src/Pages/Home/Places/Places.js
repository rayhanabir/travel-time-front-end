import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Places.css';

const Places = () => {
    const [places, setPlaces] = useState([])
    useEffect(()=>{
        fetch('places.json')
        .then(res=>res.json())
        .then(data =>setPlaces(data))
    },[])
    return (
        <>
            <section className='container'>
                <div className="top-place-content text-center">
                    <h1>TOP PLACES OF US</h1>
                    <p>We are offering low cost tour tickets. Because of you enjoy the tour</p>
                </div>
                <div className="card-area my-4">
                    {
                        places.map(place =><Place key={place.id} place ={place}></Place>)
                    }
                </div>
            </section>
        </>
    );
};

export default Places;