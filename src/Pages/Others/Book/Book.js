import { useState } from 'react';
import { useEffect } from 'react';
import './Book.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";

import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Book = () => {
    const [singlePlace, setSinglePlace] = useState({})
    const [ticketCount, setTicketCount] = useState(1)
    const {name, image, price, description, _id} = singlePlace;
    const {user} = useAuth()
    const {bookId} = useParams();

  
    useEffect(()=>{
        fetch(`http://localhost:5000/places/${bookId}`)
        .then(res =>res.json())
        .then(data =>setSinglePlace(data))
    },[])

    const handleIncrease = () => setTicketCount(ticketCount + 1);
    const handleDecrease = () => ticketCount > 1 ? setTicketCount(ticketCount - 1) : ticketCount;

    const totalPrice = ticketCount * price;


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        let order = {}
        order.data = data;
        order.ticketCount = ticketCount
        order.totalPrice = totalPrice;
        console.log(order)
    };

  


    
    return (
        <>
           
            <div className="container ">
                <div className="place-container">
                    <div className="place-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="place-book-section">
                        <h3>{name}</h3>
                        <h5>{description}</h5>
                        <h4>${totalPrice}</h4>
                        <div className="ticket-info">
                            <span>Ticket:</span>
                            <span className='plus-button' onClick={handleIncrease}><FontAwesomeIcon icon={faPlus} /></span>
                            <span className='total-ticket'>{ticketCount}</span>
                            <span className='minus-button'onClick={handleDecrease} ><FontAwesomeIcon icon={faMinus}/></span>
                            
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true,})} value={user.displayName} />
                            <input {...register("email")} value={user.email} />
                            <input  {...register("age",)} placeholder="address"/>
                            <input type="submit" />
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Book;