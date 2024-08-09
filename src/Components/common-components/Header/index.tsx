import React from "react";
import "./Header.scss";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
            <header className="header">
                <div className="header-wrap-left">
                    <Logo />
                    <div className="header-navigation">
                        <Link to='/Menu'>
                            <div className="header-link">
                                Menu
                            </div>
                        </Link>
                        <Link to='/Blog'>
                            <div className="header-link">
                                Blog
                            </div>
                        </Link>
                        <Link to='/Pricing'>
                            <div className="header-link">
                                Pricing
                            </div>
                        </Link>
                        <Link to='/Contact'>
                            <div className="header-link">
                                Contact
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="header-login-wrap">
                    <Link to='/Contact'>
                        <div className="header-login">
                            Login
                        </div>
                    </Link>
                    <Link to='/Contact'>
                        <div className="header-sign">
                            Sign Up
                        </div>
                    </Link>
                </div>
            </header>
            <div className="main-line"></div>
        </>
    )
}

export default Header;