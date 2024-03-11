import React from "react";
import keyLogo from './key2.svg'
import deleteLogo from './delete.svg'
import '../../keys.css'
import AudienceNumber from "./audienceNumber";
import KeyStatus from "./status";


class KeyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    }

    handleDelete = (event) => {
        event.preventDefault();

        //пока токена нет
        //let token = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2MzM5NWNlOS1kMjhlLTRmNTItYjE0NC1jZmZjMTZmMzQ5NDMiLCJzdWIiOiJrc3U3IiwiaWF0IjoxNzEwMTEzMzg1LCJleHAiOjE3MTAxMTY5ODV9.ah98tEz7mtySItPhIi-IB2NdfKmyaoJ-lfz_LpQV9Fg";
        //localStorage.setItem("token", token);
        //

        try {
            const idd = 'c9a65d55-9728-4b42-9671-f0b3afcc1e8e';
            //const iddKey = 'd48c1766-12df-4c1c-a0a7-3e8cde202c9a';
            const { officeNumber, userViewDTO, keyId } = this.props;
            console.log('wwwwwwwwqq   ', this.props);

            const response = fetch(`http://158.160.147.51:8181/keys/${idd}/delete/${keyId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },

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
        const { officeNumber, userViewDTO, keyId } = this.props;
        return (
            <div className="keyCard" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <img className="keyImage" src={keyLogo} alt="" />
                <span className="keyCard2">
                    <AudienceNumber officeNumber={officeNumber} />
                    <KeyStatus userViewDTO={userViewDTO} />
                </span>
                {this.state.isHovered && <img className="deleteImage" src={deleteLogo} alt="" onClick={this.handleDelete} />}
            </div>
        );
    }
}

export default KeyCard;