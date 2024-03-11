import React from "react";
import "../styleforlist.css"

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        console.log("neeeet")
        this.handleSubmit();
    }

    handleSubmit = () => {

        //пока токена нет 
        //let token = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwM2ViNmNmYi0wYWY4LTQwODgtODcwNi0zNTc4YTc2MDZlZTIiLCJzdWIiOiIxMjM0NSIsImlhdCI6MTcxMDEzOTUxNywiZXhwIjoxNzEwMTQzMTE3fQ.2ScUv_bL9uTrZTR3XAuAcm4Q7jr_s6xjRnU8wV2OlIc";
        //localStorage.setItem("token", token);


        try {
            //потом заменить на норм переменную из url 
            //const idd = 'c9a65d55-9728-4b42-9671-f0b3afcc1e8e';
            const response = fetch("http://158.160.147.51:8181/api/account/users", {
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

                return response.data
            }).catch(error => {
                console.log('Ошибка:', error);
            });

        } catch (error) {
            console.log('Ошибка:', error);
        }
    };

    render() {
        const { usersData } = this.state
        return (
            <div className="userList">
                <span className="text1">Список пользователей:</span>
                {usersData && usersData.map((user, index) => (
                    <div className="userContainer" key={index}> ФИО: {user.fullName}</div>
                ))}
            </div>
        );
    }
}

export default UserList;