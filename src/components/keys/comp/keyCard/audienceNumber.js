import React from "react";
import '../../keys.css'


class AudienceNumber extends React.Component {
    render() {
        const { officeNumber } = this.props;
        return (
            <div className="audienceNumber">
                №{officeNumber}
            </div>
        );
    }
}

export default AudienceNumber;