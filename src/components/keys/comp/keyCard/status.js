import React from "react";
import '../../keys.css'


class KeyStatus extends React.Component {
    render() {
        return (
            <div className="keyStatus">
                <span className="statusWorld">
                    Статус:
                </span>
                <span className="currentStatus">
                    Гальперина Екатерина Ассимовна
                </span>
            </div>
        );
    }
}

export default KeyStatus;