import React from "react";
import keyLogo from './key2.svg'
import deleteLogo from './delete.svg'
import '../../keys.css'
import AudienceNumber from "./audienceNumber";
import KeyStatus from "./status";


class KeyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    }

    render() {
        return (
            <div className="keyCard" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <img className="keyImage" src={keyLogo} alt="" />
                <span className="keyCard2">
                    <AudienceNumber />
                    <KeyStatus />
                </span>
                {this.state.isHovered && <img className="deleteImage" src={deleteLogo} alt="" />}
            </div>
        );
    }
}

export default KeyCard;