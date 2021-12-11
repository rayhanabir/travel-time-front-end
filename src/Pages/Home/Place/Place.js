import React from 'react';
import { Link } from 'react-router-dom';
import './Place.css'

const Place = (props) => {
    const {name, image, description, price, _id} = props.place;
    return (
        <div>
            <div className="card-container">
                <div className="card">
                    <img className="img-fluid" src={image} alt="" />
                    <h2 className='text-center'>{name}</h2>
                    <p className="text-center">{description}</p>
                    <div className='price-book'>
                        <h3>${price}</h3>
                        <Link to={`/book/${_id}`}>
                        <button>Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Place;