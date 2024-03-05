import React from "react";
import './header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {ReactComponent as Envelope} from "./envelope.svg";
import {ReactComponent as Key} from "./key.svg";
import {ReactComponent as Person} from "./person.svg";

class HeaderButtons extends React.Component{
    render() {
        return(
            <div className="headerButtons">
                <Envelope className="custom-icon hoverIcon"/>
                <Key className="custom-icon hoverIcon"/>
                <Person className="custom-icon hoverIcon"/>
            </div>
        )
    }
}

export default HeaderButtons;