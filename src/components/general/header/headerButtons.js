import React from "react";
import './headercss.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class HeaderButtons extends React.Component{
    render() {
        return(
            <div className="headerButtons">
                <i className="bi bi-arrow-down-square custom-icon"></i>
                <i className="bi bi-key custom-icon"></i>
                <i className="bi bi-person-square custom-icon"></i>
            </div>
        )
    }
}

export default HeaderButtons;