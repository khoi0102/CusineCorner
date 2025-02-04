import React from 'react';
import './Footer.css';
import { assets } from "../../assets/assets.js";

function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className='footer-logo'>
                        <img src={assets.logo} alt='Cuisine Corner Logo'/>
                    </div>
                    <div className="footer-social-des">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae blanditiis
                            dignissimos, distinctio doloribus eum eveniet in magnam numquam optio qui saepe sequi sint
                            tempora tenetur, veritatis vero vitae voluptate!</p>
                        <div className="footer-social-icons">
                            <img src={assets.facebook_icon} alt="Facebook"/>
                            <img src={assets.twitter_icon} alt="Twitter"/>
                            <img src={assets.linkedin_icon} alt="LinkedIn"/>
                        </div>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-424-233-3423</li>
                        <li>cuisinecorner@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">Copyright 2024 CuisineCorner.com - All Right Reserved.</p>
        </div>
    );
}

function PageContent() {
    return (
        <div className="page-container">
            <div className="content">
                {/* Your main content here */}
            </div>
            <Footer />
        </div>
    );
}

export default PageContent;
