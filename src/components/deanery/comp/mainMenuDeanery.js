import React from "react";
import "../../autorisation/autor.css"
import Logo from '../../autorisation/comp/logo';
import BackgroundGrey from "../../general/backgroundGrey";
import DeaneryMenu from "./deaneryMenu";

class MainMenuDeanery extends React.Component {
    render() {
        return (
            <div>
                <BackgroundGrey />
                <DeaneryMenu />
            </div>
        );
    }
}

export default MainMenuDeanery;