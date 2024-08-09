import React from "react";
import "./Contact.scss";
import Header from "../../Components/common-components/Header";
import Footer from "../../Components/common-components/Footer";

const Contact = () => {
    return(
        <>
            <div className="container">
                <Header />
                <section className="contact">
                    <div className="contact-wrap">
                        <div className="contact-wrap-left">

                        </div>
                        <div className="contact-wrap-right">
                            <div className="contact-text">
                                Customer 
                                <span className="purple-text">
                                    Support
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
};

export default Contact;