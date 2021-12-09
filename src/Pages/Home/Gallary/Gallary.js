import React, { useEffect, useState } from 'react';
import './Gallary.css';
const Gallary = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(()=>{
        fetch('./gallary.json')
        .then(res => res.json())
        .then(data =>setPhotos(data))
    },[])

    
    return (
        <>
            <section className='container my-5'>
                <div className="galary-content ">
                    <div className="gallary-heading">
                        <h1>Our Gallary</h1>
                        <p>This is our gallary. you can see some amazing photos</p>
                    </div>

                    <div className="gallary-image-container">
                        {
                         photos.map(photo => <div key={photo.id}>
                             <img src={photo.image} alt="" />
                         </div>)   
                        }
                    </div>
                </div>

            </section>
        </>
    );
};

export default Gallary;