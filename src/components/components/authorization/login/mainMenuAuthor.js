import React from "react";
import "../style.css";
import Logo from "./logo";
import ToLoginText from "./toLoginText";
import LoginInputs from "./loginInputs";
import LoginButton from "./loginButton"
import RegButton from "./regButton"

class MainMenuAutor extends React.Component{
    render(){
        return(
            <div className="autorMenu">
                <Logo />
                <ToLoginText />
                <LoginInputs />
                <LoginButton />
                <RegButton />
            </div>
        );
    }
}

export default MainMenuAutor;