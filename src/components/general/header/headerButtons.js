import React from "react";
import './headercss.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ReactComponent as Envelope } from "./envelope.svg";
import { ReactComponent as Key } from "./key.svg";
import { ReactComponent as Person } from "./person.svg";

class HeaderButtons extends React.Component {
    handleClickEnvelope = () => {
        window.location.pathname = "/applicationMenu";
    };
    handleClickKey = () => {
        window.location.pathname = "/keys";
    };
    handleClickPerson = () => {
        window.location.pathname = "/list";
    };

    render() {
        return (
            <div className="headerButtons">
                <Envelope type="button" className="custom-icon hoverIcon" onClick={this.handleClickEnvelope} />
                <Key className="custom-icon hoverIcon" onClick={this.handleClickKey} />
                <Person className="custom-icon hoverIcon" onClick={this.handleClickPerson} />
            </div>
        )
    }
}

export default HeaderButtons;