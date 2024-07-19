import React from "react";
import "./MenuPage.scss"
import Footer from "../../Components/common-components/Footer";
import Subscribe from "../../Components/common-components/Subscribe";

const MenuPage = () => {
    return(
        <>
            <div className="container">
                <Subscribe />    
            </div>
            

            <Footer />
        </>
    )

}

export default MenuPage;