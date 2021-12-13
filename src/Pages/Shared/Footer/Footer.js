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
                                <ul>
                                    <li>F.A.Q</li>
                                    <li>WishList</li>
                                    <li>Contact Us</li>   
                                    <li>About Us</li>

                                </ul>                          

                        </div>
                        <div className="pages">
                            <h4>PAGES</h4>
                                <ul>
                                    <li>404 Pages</li>
                                    <li>Password Page</li>
                                    <li>Collection Pages</li>   
                                    <li>Products Page</li>
                                </ul>  
                        </div>
                        <div className="information">
                            <h4>INFORMATON</h4>
                                <ul>
                                    <li>Special Products</li>
                                    <li>New Products</li>
                                    <li>Best Sellers</li>   
                                    <li>About us</li>
                                </ul>  
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