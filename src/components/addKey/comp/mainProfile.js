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
        let token = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmNDUyNDFkOC1kNDZmLTRjMmMtYjU4MC02M2FjOWRmNTIyMzEiLCJzdWIiOiJrc3U2IiwiaWF0IjoxNzEwMTExMTkzLCJleHAiOjE3MTAxMTQ3OTN9.gpwzw8VjkgOSCR2JZt6n3jgkNOtDlUNZazHUd7OKZak";
        localStorage.setItem("token", token);
        //


        try {
            //значение переменной берем из url
            const idd = 'dc2521d6-210a-4ba6-9b6a-08aef7709665';
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