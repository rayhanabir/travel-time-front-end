import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const Book = () => {
    const [singlePlace, setSinglePlace] = useState({})
    
    const {bookId} = useParams();
    const history = useHistory()
  
    useEffect(()=>{
        fetch(`http://localhost:5000/places/${bookId}`)
        .then(res =>res.json())
        .then(data =>setSinglePlace(data))
    },[])

    const url = '/order'

    const handleOrder = () =>{
        history.push(url)
    }

  


    const {name, image, price, description, _id} = singlePlace;
    return (
        <>
            <p>this is book page:{bookId}</p>
            <div className="container">
                <div className="place-container">
                    <div className="place-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="place-book-section">
                        <h3>{name}</h3>
                        <h5>{description}</h5>
                        <h4>${price}</h4>
                        <div className="ticket-info">
                            <span>Ticket:</span>
                            <span className='plus-button' ><FontAwesomeIcon icon={faPlus} /></span>
                            <span className='total-ticket'>{}</span>
                            <span className='minus-button'><FontAwesomeIcon icon={faMinus}/></span>
                            <input className='form-control' type="text" />
                            <input className='form-control' type="email" />
                            <input className='form-control' type="text"  placeholder='Address'/>    

                            <input onClick={handleOrder} type="submit" value="Place Order" />

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Book;