import React from "react";
import * as RB from "react-bootstrap";
import "../autor.css"
import Logo from "./logo";
import ToLoginText from "./toLoginText";
import LoginInputs from "./loginInputs";
import LoginButton from "./loginButton"
import RegButton from "./regButton"

class AutorMenu extends React.Component{
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

export default AutorMenu;