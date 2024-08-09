import React from "react";
import "./Blog.scss";
import Header from "../../Components/common-components/Header";
import Footer from "../../Components/common-components/Footer";
import Subscribe from "../../Components/common-components/Subscribe";
import CardImgFirst from "./img/card-img.png";
import CardPhoto from "./img/person-img.png";

const Blog = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Subscribe />
                <div className="blog-text">
                    Latest 
                    <span className="purple-text">Articles</span> 
                </div>
                <div className="blog-cards-wrap">
                    <div className="blog-card-wrap">
                        <div className="blog-img">
                            <img src={CardImgFirst} alt="#" />
                        </div>
                        <div className="blog-card-text">
                            How To Order Food ?
                        </div>
                        <div className="blog-card-writer-wrap">
                            <div className="blog-card-writer">
                                <div className="writer-img">
                                    <img src={CardPhoto} alt="#" />
                                </div>
                                <div className="written-by">
                                    Written By
                                </div>
                                <div className="writer-name">
                                    Perperzon
                                </div>
                            </div>
                            <div className="blog-card-date">
                                15 DEC, 2022
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Blog;