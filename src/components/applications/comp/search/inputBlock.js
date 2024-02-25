import React from "react";
import '../../applications.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

class InputBlock extends React.Component{
    render(){
        return(
            <div className="inputBlock">
                <input className="searchInput" placeholder="Введите имя или номер аудитории"/>
                <button className="searchButton"><i className="bi bi-search"></i>   Поиск</button>
            </div>
        );
    }
}

export default InputBlock;