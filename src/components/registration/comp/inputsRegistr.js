import React from "react";
import '../regist.css'

class InputsRegistr extends React.Component{
    render(){
        return(
            <div className="inputsRegistr">
                <input className="inputReg" placeholder="ФИО"/>
                <input className="inputReg" placeholder="Логин"/>
                <input className="inputReg" placeholder="Пароль"/>
            </div>
        );
    }
}

export default InputsRegistr;