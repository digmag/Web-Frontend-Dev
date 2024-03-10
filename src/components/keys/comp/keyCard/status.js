import React from "react";
import '../../keys.css'


class KeyStatus extends React.Component {
    render() {
        const { userViewDTO } = this.props;
        return (
            <div className="keyStatus">
                <span className="statusWorld">
                    Статус:
                </span>
                <span className="currentStatus">
                    {userViewDTO}
                </span>
            </div>
        );
    }
}

export default KeyStatus;