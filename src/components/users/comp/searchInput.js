import React from "react";
import "../styleforlist.css"

class SearchInputs extends React.Component {
    render() {
        return (
            <div className="searchInputs">
                <span className="text">Поиск по имени:</span>
                <input type="text" placeholder="Введите имя пользователя" className="input" />
            </div>
        );
    }
}

export default SearchInputs;