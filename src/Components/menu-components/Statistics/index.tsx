import React from "react";
import "./Statistics.scss";

const Statistics = () => {
    return(
        <>
            <section className="statistics">
                <div className="statistics-wrap">
                    <div className="statistics-text-wrap">
                        <div className="statistics-main-text">
                            10K+
                        </div>
                        <div className="statistics-text">
                            Satisfied Costumers <br></br>
                            All Great Over The World 
                        </div>
                    </div>
                    <div className="statistics-line"></div>

                    <div className="statistics-text-wrap">
                        <div className="statistics-main-text">
                            4M
                        </div>
                        <div className="statistics-text">
                            Healthy Dishes Sold
                            <br></br>Including Milk Shakes Smooth
                        </div>
                    </div>
                    <div className="statistics-line"></div>

                    <div className="statistics-text-wrap">
                        <div className="statistics-main-text">
                            99.99%
                        </div>
                        <div className="statistics-text">
                            Reliable Customer Support <br></br>
                            We Provide Great Experiences
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Statistics;