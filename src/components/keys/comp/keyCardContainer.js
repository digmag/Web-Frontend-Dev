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

        //пока токена нет
        let token = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2MzM5NWNlOS1kMjhlLTRmNTItYjE0NC1jZmZjMTZmMzQ5NDMiLCJzdWIiOiJrc3U3IiwiaWF0IjoxNzEwMTEzMzg1LCJleHAiOjE3MTAxMTY5ODV9.ah98tEz7mtySItPhIi-IB2NdfKmyaoJ-lfz_LpQV9Fg";
        localStorage.setItem("token", token);
        //

        try {
            //потом заменить на норм переменную из url
            const idd = 'c9a65d55-9728-4b42-9671-f0b3afcc1e8e';
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

                const officeData = response.officesKeys.map(key => ({
                    officeNumber: key.officeNumber,
                    userViewDTO: key.userViewDTO ? key.userViewDTO.fullname || "в деканате" : "в деканате",
                    keyId: key.keyId
                }));
                console.log("eeeeeeeey", officeData.userViewDTO);

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
                    <KeyCard key={index} officeNumber={data.officeNumber} userViewDTO={data.userViewDTO} keyId={data.keyId} />
                ))}
            </div>
        );
    }
}

export default KeyCardContainer;