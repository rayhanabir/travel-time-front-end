import React from 'react';
import './Holiday.css';

const Holiday = () => {
    return (
        <>
          <div className="holiday-banner-area">
            <div className="holiday-banner-content-area">
                <div className="banner-content">
                    <h5>HOLIDAY PACKAGE OFFER</h5>
                    <h2>HOLIDAY SPECIAL 25% OFF !</h2>
                    <p>Sign up now to receive hot special offers and information about the best tour packages, updates and discounts !!</p>
                    <div className="input-area">
                        <input type="text" placeholder="Enter Your Email"/>
                        <button >Sign In Now</button>
                    </div>
                </div>
            </div>

          </div>  
        </>
    );
};

export default Holiday;