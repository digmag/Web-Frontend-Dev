import React from "react";
import "../styleforlist.css"

class FindButton extends React.Component {
    render() {
        return (
            <div className="findButton">
                <button className="findButtonChild">Поиск</button>
            </div>
        );
    }
}

export default FindButton;