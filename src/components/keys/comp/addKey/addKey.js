import React from "react";
import '../../keys.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import logoKey from './keyIcon.svg'

class AddKey extends React.Component {
    render() {
        return (
            <div className="addKeyBlock">
                <img className="imageKey" src={logoKey} alt="" />
                <button className="addButton">Добавить ключ</button>
            </div>
        );
    }
}

export default AddKey;