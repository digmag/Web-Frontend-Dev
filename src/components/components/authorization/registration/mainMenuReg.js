import React from "react";
import "../../authorization/style.css"
import Logo from "../login/logo";
import RegInputs from "./registrationInputs";
import RegistButton from "./registButton";
import ToRegText from "./toRegText";

class MainMenuReg extends React.Component{
    render(){
        return(
            <div className="registMenu">
                <Logo />
                <ToRegText />
                <RegInputs />
                <RegistButton />
            </div>
        );
    }
}

export default MainMenuReg;