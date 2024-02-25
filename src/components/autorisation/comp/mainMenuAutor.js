import React from "react";
import * as RB from "react-bootstrap";
import "../autor.css"
import AutorMenu from "./autorMenu";
import BackgroundGrey from "../../general/backgroundGrey";


class MainMenuAutor extends React.Component{
    render(){
        return(
            <div>
                <BackgroundGrey />
                <AutorMenu />
            </div>
        );
    }
}

export default MainMenuAutor;