import React from "react";
import '../keys.css'
import KeyCard from "./keyCard/keyCard";
import Form from 'react-bootstrap/Form';


class KeyCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            officeData: [],
        };
    }

    componentDidMount() {
        this.handleSubmit();
    }

    handleSubmit = () => {
        //event.preventDefault();

        // const officeName = document.getElementById('inputNameOffice').value;
        // const officeNumber = document.getElementById('inputNumberOffice').value;

        // const requestBody = {
        //     "officeName": officeName,
        //     "officeNumber": officeNumber
        // };

        //пока токена нет
        let token = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmNDUyNDFkOC1kNDZmLTRjMmMtYjU4MC02M2FjOWRmNTIyMzEiLCJzdWIiOiJrc3U2IiwiaWF0IjoxNzEwMTExMTkzLCJleHAiOjE3MTAxMTQ3OTN9.gpwzw8VjkgOSCR2JZt6n3jgkNOtDlUNZazHUd7OKZak";
        localStorage.setItem("token", token);
        //


        try {
            //потом заменить на норм переменную из url
            const idd = 'dc2521d6-210a-4ba6-9b6a-08aef7709665';
            const response = fetch(`http://158.160.147.51:8181/api/office/${idd}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                // body: JSON.stringify(requestBody)
            }).then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    console.log(response);
                    throw new Error();
                }

            }).then(response => {
                console.log("rrr", response);
                console.log("!!!!!!!!!!!!", response.officesKeys[0].officeNumber);
                console.log("!!!!!!!!!!!!", response.officesKeys[0].userViewDTO);
                const officeData = response.officesKeys.map(key => ({
                    officeNumber: key.officeNumber,
                    userViewDTO: key.userViewDTO
                }));

                this.setState({ officeData });
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
            <div className="keyCardContainer">
                {this.state.officeData.map((data, index) => (
                    <KeyCard key={index} officeNumber={data.officeNumber} userViewDTO={data.userViewDTO} />
                ))}
            </div>
        );
    }
}

export default KeyCardContainer;