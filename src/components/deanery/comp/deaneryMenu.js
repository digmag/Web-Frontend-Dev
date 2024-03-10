import React from "react";
import "../../autorisation/autor.css"
import Logo from '../../autorisation/comp/logo';
import DeaneryText from "./deaneryText";
import InputDeanery from "./inputDeanery";
import DeaneryButton from "./deaneryButton";
import '../deanery.css'


class DeaneryMenu extends React.Component {
    render() {
        return (
            <div className="autorMenu">
                <Logo />
                <DeaneryText />
                <InputDeanery />
                <DeaneryButton />
            </div>
        );
    }
}

export default DeaneryMenu;