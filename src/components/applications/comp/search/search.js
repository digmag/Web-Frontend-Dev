import React from "react";
import '../../applications.css'
import InputBlock from "./inputBlock";
class Search extends React.Component{
    render(){
        return(
            <div className="search">
                <span className="searchText">Поиск по имени или номеру аудитории:</span>
                <InputBlock />
            </div>
        );
    }
}

export default Search;