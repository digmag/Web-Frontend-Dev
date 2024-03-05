import React from "react";
import '../../keys.css'
import InputBlock from "./inputBlock";
class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <span className="searchText">Поиск ключа по номеру:</span>
                <InputBlock />
            </div>
        );
    }
}

export default Search;