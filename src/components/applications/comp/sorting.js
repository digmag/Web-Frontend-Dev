import React from "react";
import '../applications.css'
class Sorting extends React.Component{
    render(){
        return(
            <div className="sorting">
                <span className="sortingText">Сортировка:</span>
                <select className="selectSort">
                    <option value="0">По имени(А-Я)</option>
                    <option value="1">По имени(Я-А)</option>
                    <option value="2">По номеру аудиториии(возрастающе)</option>
                    <option value="3">По номеру аудиториии(убывающе)</option>
                </select>
            </div>
        );
    }
}

export default Sorting;