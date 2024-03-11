import React from "react";
import "../../autorisation/autor.css"
import Logo from '../../autorisation/comp/logo';
import DeaneryText from "./deaneryText";
import InputDeanery from "./inputDeanery";
import DeaneryButton from "./deaneryButton";
import '../deanery.css'
import Form from 'react-bootstrap/Form';


class DeaneryMenu extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();

        const name = document.getElementById('inputDeaa').value;

        const requestBody = {
            "name": name
        };

        //пока токена нет
        //let token = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzYjFkYTk3YS04MTI0LTQyN2YtOGUwZC04MGQxODQyMjk4M2UiLCJzdWIiOiJrc3U0IiwiaWF0IjoxNzEwMDk0MDQ4LCJleHAiOjE3MTAwOTc2NDh9.eeOB92ZUATUPV4iy66M2mGejm7fwdVwFjgDWJF9wnF0";
        //localStorage.setItem("token", token);
        //

        try {
            const response = fetch("http://158.160.147.51:8181/api/office/create", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
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
                console.log(response);
                localStorage.setItem("idd", response.id);
                window.location.pathname = "/applicationMenu";
                return response.data;
            }).catch(error => {
                console.log('Ошибка:', error);
            });

        } catch (error) {
            console.log('Ошибка:', error);
        }
    };

    handleClickCloseDe = () => {
        window.location.pathname = "/applicationMenu";
    };

    render() {
        return (
            <Form className="autorMenu" onSubmit={this.handleSubmit}>
                <button className="closeButt" onClick={this.handleClickCloseDe}>✖</button>
                <Logo />
                <DeaneryText />
                <InputDeanery />
                <div className="deaneryButton">
                    <button className="dB" type="submit">Создать деканат</button>
                </div>
            </Form>
        );
    }
}

export default DeaneryMenu;