import React from "react";
import '../applications.css'

class StatusFilter extends React.Component{
    render(){
        return(
            <div className="statusFilter">
                <span className="filterText">Фильтрация по статусу:</span>
                <select className="selectFilter">
                    <option value="1">Одобрено</option>
                    <option value="2">В рассмотрении</option>
                    <option value="3">Отклонено</option>
                </select>
            </div>
        );
    }
}

export default StatusFilter;