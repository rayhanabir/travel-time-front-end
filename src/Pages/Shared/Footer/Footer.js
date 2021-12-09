import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
           <section className='footer'>
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="about">
                            <h4>ABOUT</h4>
                            <span>We are Dreamy Travel.We are offering some amazing  offer for you.</span>
                        </div>
                        <div className="support">
                            <h4>SUPPORT</h4>
                            <p>F.A.Q</p>
                            <p>Wishlist</p>
                            <p>Contact Us</p>
                            <p>About Us</p>

                        </div>
                        <div className="pages">
                            <h4>PAGES</h4>
                            <p>404 Pages</p>
                            <p>Password Page</p>
                            <p>Collection Pages</p>
                            <p>Products Page</p>
                        </div>
                        <div className="information">
                            <h4>INFORMATON</h4>
                            <p>Special Products</p>
                            <p>New Products</p>
                            <p>Best Sellers</p>
                            <p>About us</p>
                        </div>
                        <div className="newsteller">
                            <h4>NEWSLETTER</h4>
                            <p>Signup to be the first receive our hottest news and promotion.</p>
                        </div>

                    </div>
                </div>
           </section> 
        </>
    );
};

export default Footer;