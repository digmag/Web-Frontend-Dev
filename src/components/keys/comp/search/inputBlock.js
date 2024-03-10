import React from "react";
import '../../keys.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

class InputBlock extends React.Component {
    render() {
        return (
            <div className="inputBlock">
                <input className="searchInput" placeholder="Введите номер кабинета" />
                <button className="searchButton2"><i className="bi bi-search"></i>   Поиск</button>
            </div>
        );
    }
}

export default InputBlock;