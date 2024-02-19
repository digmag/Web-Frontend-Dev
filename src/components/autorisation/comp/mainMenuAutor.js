import React from "react";
import * as RB from "react-bootstrap";
import "../autor.css"
import Logo from "./logo";

class MainMenuAutor extends React.Component{
    render(){
        return(
            <div className="autorMenu">
                <Logo />
            </div>
        );
    }
}

export default MainMenuAutor;