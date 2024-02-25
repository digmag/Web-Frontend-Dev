import React from "react";
import "../../autorisation/autor.css"
import Logo from '../../autorisation/comp/logo';
import RegistrText from "./registrText";
import InputsRegistr from "./inputsRegistr";
import RegistButton from "./registButton";
import '../regist.css'

class registMenu extends React.Component{
    render(){
        return(
            <div className="autorMenu">
                <Logo />
                <RegistrText />
                <InputsRegistr />
                <RegistButton />
            </div>
        );
    }
}

export default registMenu;