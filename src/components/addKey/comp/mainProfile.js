import React from "react";
import '.././addKey.css'
import MainHeader from "../../general/header/mainHeader";
import BackgroundGrey from "../../general/backgroundGrey";
import Form from 'react-bootstrap/Form';

class AddKey extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();

        const officeName = document.getElementById('inputNameOffice').value;
        const officeNumber = document.getElementById('inputNumberOffice').value;

        const requestBody = {
            "officeName": officeName,
            "officeNumber": officeNumber
        };

        //пока токена нет
        //let token = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2MzM5NWNlOS1kMjhlLTRmNTItYjE0NC1jZmZjMTZmMzQ5NDMiLCJzdWIiOiJrc3U3IiwiaWF0IjoxNzEwMTEzMzg1LCJleHAiOjE3MTAxMTY5ODV9.ah98tEz7mtySItPhIi-IB2NdfKmyaoJ-lfz_LpQV9Fg";
        //localStorage.setItem("token", token);
        //


        try {
            //значение переменной берем из url
            const idd = 'c9a65d55-9728-4b42-9671-f0b3afcc1e8e';
            const response = fetch(`http://158.160.147.51:8181/keys/${idd}/create`, {
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
            <div>
                <MainHeader />
                <div className="greyBack">
                    <Form className="adddddKey" onSubmit={this.handleSubmit}>
                        <span className="addKeyText">Добавить ключ:</span>
                        <div className="addKeyInfo">
                            <div className="info">Название кабинета:</div>
                            <input className="inputNameOfOffice" id="inputNameOffice" placeholder="Введите название кабинета" />
                            <div className="info">Номер кабинета:</div>
                            <input className="inputNameOfOffice" id="inputNumberOffice" placeholder="Введите номер кабинета" />
                        </div>

                        <div className="addddButton">
                            <button className="highRole">Создать ключ</button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default AddKey;