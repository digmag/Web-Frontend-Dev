import React from "react";
import "../styleforlist.css"

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersData: [],
        };
    }

    componentDidMount() {
        this.handleSubmit();
    }

    handleSubmit = () => {

        //пока токена нет
        //let token = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2MzM5NWNlOS1kMjhlLTRmNTItYjE0NC1jZmZjMTZmMzQ5NDMiLCJzdWIiOiJrc3U3IiwiaWF0IjoxNzEwMTEzMzg1LCJleHAiOjE3MTAxMTY5ODV9.ah98tEz7mtySItPhIi-IB2NdfKmyaoJ-lfz_LpQV9Fg";
        //localStorage.setItem("token", token);
        //

        try {
            //потом заменить на норм переменную из url
            //const idd = 'c9a65d55-9728-4b42-9671-f0b3afcc1e8e';
            const response = fetch(`http://158.160.147.51:8181/api/account/users`, {
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

                const usersData = response.users.map(key => ({
                    id: key.id,
                    fullName: key.fullName
                }));
                console.log("eeeeeeeey", usersData);


                this.setState({ usersData });
                return response.data;
            }).catch(error => {
                console.log('Ошибка:', error);
            });

        } catch (error) {
            console.log('Ошибка:', error);
        }
    };

    render() {
        const { usersData } = this.state;
        return (
            <div className="userList">
                {usersData.map((user, index) => (
                    <div key={index}>{user.fullName}</div>
                ))}
            </div>
        );
    }
}

export default UserList;