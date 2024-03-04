import React from "react";
import "../../autorisation/autor.css"
import Logo from '../../autorisation/comp/logo';
import BackgroundGrey from "../../general/backgroundGrey";
import RegistrMenu from "./registrMenu";

class MainMenuRegistr extends React.Component{
    render(){
        return(
            <div>
                <BackgroundGrey />
                <RegistrMenu />
            </div>
        );
    }
}

export default MainMenuRegistr;