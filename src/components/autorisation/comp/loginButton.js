import React from "react";
import "../autor.css"

class LoginButton extends React.Component{
    render(){
        return(
            <div className="loginButton">
                <button className="buttonMenuAutorize" id="autorButton" type="submit">Вход</button>
                <span className="forgetPassword">Забыли пароль?</span>
            </div>
        );
    }
}

export default LoginButton;