import React from "react";
import "../style.css"

class LoginButton extends React.Component{
    render(){
        return(
            <div className="loginButton">
                <button className="buttonMenuAutorize">Вход</button>
                <span className="forgetPassword">Забыли пароль?</span>
            </div>
        );
    }
}

export default LoginButton;
