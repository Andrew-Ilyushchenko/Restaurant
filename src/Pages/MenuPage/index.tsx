import React from "react";
import "./MenuPage.scss"
import Footer from "../../Components/common-components/Footer";
import Subscribe from "../../Components/common-components/Subscribe";
import Statistics from "../../Components/menu-components/Statistics";
import Premium from "../../Components/menu-components/Premium";

const MenuPage = () => {
    return(
        <>  
            <div className="container">
                
            </div>
            <Statistics />
            <div className="container">
                <Premium />
                <Subscribe />    
            </div>
            

            <Footer />
        </>
    )

}

export default MenuPage;