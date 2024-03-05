import React from "react";
import "../autor.css"

class LoginButton extends React.Component{
    render(){
        return(
            <div className="loginButton">
                <button type="submit" className="buttonMenuAutorize" id="autorButton">Вход</button>
                <span className="forgetPassword">Забыли пароль?</span>
            </div>
        );
    }
}

export default LoginButton;