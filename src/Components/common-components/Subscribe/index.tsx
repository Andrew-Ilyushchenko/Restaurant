import React, { useState } from "react";
import "./Subscribe.scss";
import Input from "../Input/Input";
import SubImg from "./sub.png";

const Subscribe = () => {

    return(
        <>
            <div className="subscribe">
                    <div className="sub-left">
                        <div className="sub-text">GET 50%</div>
                        <div className="sub-input-wrap">
                            <Input className="sub-input" classNameBtn="sub-btn button"/>
                        </div>
                    </div>
                    <div className="sub-img-wrap">
                        {/* <img src={SubImg} alt="#" className="sub-img"/> */}
                    </div>
            </div>
        </>
    )
}

export default Subscribe;