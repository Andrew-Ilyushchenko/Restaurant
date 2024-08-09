import React from "react";
import "./GetStarted.scss";
import Food from "./Food.png";
import Star from "./Star.png";
import trustPilot from "./trustpilot-1.png";

const GetStarted = () => {
    return(
        <>
            <section className="get-started">
                <div className="get-text-wrap">
                    <div className="get-preview-text">
                        OVER 1000 USERS
                    </div>
                    <h1 className="main-text">
                        Enjoy Foods All
                        Over The <span className="purple-text">World</span>
                    </h1>
                    <div className="description-text">
                        EatLy help you set saving goals, earn cash back offers, 
                        Go to disclaimer for more details and get paychecks up 
                        to two days early. Get a 
                        <span className="purple-text-white">$20 bonus</span>.
                    </div>
                    <div className="button-wrap">
                        <button className="get-btn">Get Started</button>
                        <button className="get-btn-white">Go Pro</button>
                    </div>
                    <div className="review">
                        <img src={trustPilot} alt="#" className="get-icon"/>
                        <img src={Star} alt="#" className="get-star"/>
                        <div className="review-text">4900+</div>
                    </div>
                </div>
                <div className="get-food-wrap">
                    <div className="get-img-wrap">
                        <img src={Food} alt="#" className="get-img"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GetStarted;