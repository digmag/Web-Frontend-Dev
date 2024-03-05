import React from "react";
import '../deanery.css'

class DeaneryButton extends React.Component {
    render() {
        return (
            <div className="deaneryButton">
                <button className="dB">Создать деканат</button>
            </div>
        );
    }
}

export default DeaneryButton;