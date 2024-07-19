import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {

    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-wrap">
                        <div className="upper-wrap">
                            <Logo />
                            <nav className="footer-nav navigate">
                                <Link to='/Blog'>
                                    <div className="footer-link">
                                        Blog
                                    </div>
                                </Link>
                                <Link to='/Pricing'>
                                    <div className="footer-link">
                                        Pricing
                                    </div>
                                </Link>
                                <Link to='/AboutUs'>
                                    <div className="footer-link">
                                        About Us
                                    </div>
                                </Link>
                                <Link to='/Contact'>
                                    <div className="footer-link">
                                        Contact
                                    </div>
                                </Link>
                            </nav>
                        </div>
                        
                        <div className="footer-line"></div>

                        <div className="footer-contact-wrap">
                            <div className="footer-text">© 2023 EATLY All Rights Reserved.</div>
                            <div className="footer-contact">
                                <a href="https://www.instagram.com/" className="contact-footer">
                                    <div className="footer-inst"></div>
                                </a>
                                <a href="https://www.linkedin.com/feed/" className="contact-footer">
                                    <div className="footer-linkedin"></div>
                                </a>
                                <a href="https://www.facebook.com/" className="contact-footer">
                                    <div className="footer-facebook"></div>
                                </a>
                                <a href="https://x.com/" className="contact-footer">
                                    <div className="footer-twitter"></div>
                                </a>    
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;