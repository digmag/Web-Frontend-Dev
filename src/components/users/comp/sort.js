import React from "react";
import "../styleforlist.css"

class Sort extends React.Component {
    render() {
        return (
            <div className="sort">
                <span className="textSort">Сортировка:</span>
                <select className="select">
                    <option value="option1">По имени(А-Я)</option>
                    <option value="option1">По фамилии(А-Я)</option>
                    <option value="option1">По роли</option>
                </select>
            </div>
        );
    }
}

export default Sort;