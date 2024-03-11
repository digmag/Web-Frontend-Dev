import React from "react";
import "../../autorisation/autor.css"
import Logo from '../../autorisation/comp/logo';
import RegistrText from "./registrText";
import InputsRegistr from "./inputsRegistr";
import RegistButton from "./registButton";
import '../regist.css'
import Form from 'react-bootstrap/Form';


class registMenu extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();

        const name = document.getElementById('fullName').value;
        const login = document.getElementById('regLogin').value;
        const password = document.getElementById('regPassword').value;

        const requestBody = {
            "fullname": name,
            "login": login,
            "password": password
        };

        try {
            const response = fetch("http://158.160.147.51:8181/api/account/registration", {
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
                window.location.pathname = "/deanery";
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
                <div className="registrText">
                    <span>Зарегистрируйтесь, чтобы продолжить</span>
                </div>
                <div className="inputsRegistr">
                    <input className="inputReg" placeholder="ФИО" id="fullName" />
                    <input className="inputReg" placeholder="Логин" id="regLogin" />
                    <input className="inputReg" placeholder="Пароль" id="regPassword" />
                </div>
                <div className="registButton">
                    <button className="rB" type="submit">Регистрация</button>
                </div>
            </Form>
        );
    }
}

export default registMenu;