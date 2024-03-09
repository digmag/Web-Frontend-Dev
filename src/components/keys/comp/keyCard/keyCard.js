import React from "react";
import keyLogo from './key2.svg'
import deleteLogo from './delete.svg'
import '../../keys.css'
import AudienceNumber from "./audienceNumber";
import KeyStatus from "./status";


class KeyCard extends React.Component {
    render() {
        return (
            <div className="keyCard">
                <img className="keyImage" src={keyLogo} alt="" />
                <span className="keyCard2">
                    <AudienceNumber />
                    <KeyStatus />
                </span>
                <img className="deleteImage" src={deleteLogo} alt="" />

            </div>
        );
    }
}

export default KeyCard;