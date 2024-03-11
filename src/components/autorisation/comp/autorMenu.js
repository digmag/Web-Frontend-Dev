import React from "react";
import * as RB from "react-bootstrap";
import "../autor.css"
import Logo from "./logo";
import ToLoginText from "./toLoginText";
import LoginInputs from "./loginInputs";
import LoginButton from "./loginButton"
import RegButton from "./regButton"
import Form from 'react-bootstrap/Form';


class AutorMenu extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();

        const login = document.getElementById('LoginInput').value;
        const password = document.getElementById('PasswordInput').value;

        const requestBody = {
            "login": login,
            "password": password
        };

        try {
            const response = fetch("http://158.160.147.51:8181/api/account/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            }).then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    console.log(response);
                    throw new Error();
                }

            }).then(response => {
                console.log("Токен: " + response.token);
                localStorage.setItem("token", response.token);
                window.location.pathname = "/applicationMenu";
                return response.data;
            }).catch(error => {
                console.log('Ошибка:', error);
            });

        } catch (error) {
            console.log('Ошибка:', error);
        }
    };
    render() {
        return (
            <Form className="autorMenu" onSubmit={this.handleSubmit}>
                <Logo />
                <div className="toLoginText">
                    <span>Войдите в свою учетную запись</span>
                </div>
                <div className="loginInputs">
                    <input type="text" placeholder="Логин" className="inp" id="LoginInput" />
                    <input type="text" placeholder="Пароль" className="inp" id="PasswordInput" />
                </div>
                <div className="loginButton">
                    <button className="buttonMenuAutorize" id="autorButton" type="submit">Вход</button>
                    <span className="forgetPassword">Забыли пароль?</span>
                </div>
                <RegButton />
            </Form>
        );
    }
}

export default AutorMenu;