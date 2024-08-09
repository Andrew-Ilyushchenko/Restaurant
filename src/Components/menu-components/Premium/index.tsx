import React from "react";
import "./Premium.scss";
import mobileScreen from "./MobileScreen.png";

const Premium = () => {
    return (
        <>
            <section className="premium">
                <div className="premium-wrap">
                    <div className="premium-left">
                        <img src={mobileScreen} alt="#" className="premium-img"/>
                    </div>

                    <div className="premium-right">
                        <h2 className="premium-text">
                        Premium <span className="purple-text">Quality</span><br></br> For Your Health
                        </h2>
                        <ol className="premium-list" type="A">
                            <li className="premium-list-item">
                                <span className="point-center">·  </span>
                                Premium quality food is made with ingredients that
                                are packed with essential vitamins, minerals.
                            </li>
                            <li className="premium-list-item">
                                <span className="point-center">·  </span>
                                These foods promote overall wellness by 
                                support healthy digestion and boosting immunity
                            </li>
                        </ol>
                        <button className="premium-btn btn">
                            <a href="https://play.google.com/store/apps?hl=ru">
                                Download
                            </a>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Premium;