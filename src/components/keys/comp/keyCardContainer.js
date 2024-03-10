import React from "react";
import '../keys.css'
import KeyCard from "./keyCard/keyCard";


class KeyCardContainer extends React.Component {
    render() {
        return (
            <div className="keyCardContainer">
                <KeyCard />
                <KeyCard />
                <KeyCard />
            </div>
        );
    }
}

export default KeyCardContainer;