import React from "react";
import "../autor.css"

class LoginInputs extends React.Component{
    render(){
        return(
            <div className="loginInputs">
                <input type="text" placeholder="Логин" className="inp" id="loginInput"/>
                <input type="text" placeholder="Пароль" className="inp" id="passwordInput"/>
            </div>
        );
    }
}

export default LoginInputs;