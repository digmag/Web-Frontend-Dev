import React from "react";
import "../autor.css"

class RegButton extends React.Component{
    render(){
        return(
            <div className="regButton">
                <span className="regText">Нет аккаунта?</span>
                <button className="registrButton">Зарегистрироваться</button>
            </div>
        );
    }
}

export default RegButton;