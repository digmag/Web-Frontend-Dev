import React from "react";
import "../style.css"

class RegInputs extends React.Component{
    render(){
        return(
            <div className="regInputs">
                <input type="text" placeholder="ФИО" className="inp"/>
                <input type="text" placeholder="Логин" className="inp"/>
                <input type="text" placeholder="Пароль" className="inp"/>
            </div>
        );
    }
}

export default RegInputs;