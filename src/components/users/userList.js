import React from "react";
import "./styleforlist.css"

class UserList extends React.Component{
    render(){
        return(
            <div className="userList">
                <span className="text1">Список пользователей:</span>
                <ul className="li">
                    <li className="li1"> 
                        <span className="text2">ФИО:</span>
                        <span className="text2">Роль:</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UserList;