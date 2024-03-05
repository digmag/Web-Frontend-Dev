import React from "react";
import "../style.css"

class LoginInputs extends React.Component{
    render(){
        return(
            <div className="loginInputs">
                <input type="text" placeholder="Логин" className="inp"/>
                <input type="text" placeholder="Пароль" className="inp"/>
            </div>
        );
    }
}

export default LoginInputs;