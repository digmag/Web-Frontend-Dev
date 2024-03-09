import React from "react";
import '../deanery.css'

class InputDeanery extends React.Component {
    render() {
        return (
            <div className="inputDeanery">
                <input className="inputDea" placeholder="Введите название деканата" />
            </div>
        );
    }
}

export default InputDeanery;