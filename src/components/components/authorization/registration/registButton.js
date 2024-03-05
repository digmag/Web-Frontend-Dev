import React from "react";
import "../style.css"

class RegistButton extends React.Component{
    render(){
        return(
            <div className="registButton">
                <button className="buttonMenuAutorize">Зарегистрироваться</button>
            </div>
        );
    }
}

export default RegistButton;