import React from "react";
import * as RB from "react-bootstrap";
import "../autor.css"
import Logo from "./logo";
import ToLoginText from "./toLoginText";
import LoginInputs from "./loginInputs";
import LoginButton from "./loginButton"
import RegButton from "./regButton"

class AutorMenu extends React.Component{

    handleSubmit = async (event) => {
        event.preventDefault();

        const login = document.getElementById("loginInput").value;
        const password = document.getElementById("passwordInput").value;

        const requestBody = {
            login: login,
            password: password
        };

        try {
            const response = await fetch('http://localhost:8080/api/account/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (response.status === 200) {
                console.log('Успешный вход!');
            } else {
                throw new Error('Ошибка ' + response.status);
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    render(){
        return(
            <div className="autorMenu">
                <Logo />
                <ToLoginText />
                <form onSubmit={this.handleSubmit}>
                    <LoginInputs />
                    <LoginButton />
                </form>
                <RegButton />
            </div>
        );
    }
}

export default AutorMenu;