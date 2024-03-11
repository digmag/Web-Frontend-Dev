import React from "react";
import "../autor.css"
import { Link, Route } from "react-router-dom";

class RegButton extends React.Component {
    render() {
        return (
            <div className="regButton">
                <span className="regText">Нет аккаунта?</span>

                <Link className="registrButton" to="/registration">Зарегистрироваться</Link>
            </div >
        );
    }
}

export default RegButton;