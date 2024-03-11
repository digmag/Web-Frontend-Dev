import React from "react";
import '../applications.css'
import Container from 'react-bootstrap/Container';
import status from "../../keys/comp/keyCard/status";

class ApplItem extends React.Component {
    render() {
        const { background } = this.props; // Получаем значение background из свойств
        const { status, keyId, id } = this.props;

        return (
            <div className="applItem" style={{ background: background }}>
                <div className="leftPart">
                    <div className="applAudit">
                        <span>Аудитория: {keyId}</span>
                    </div>
                    <div className="applTeacher divAppl">
                        <span>{id}</span>
                    </div>
                    <div className="applStatus divAppl">
                        <span>Статус: {status}</span>
                    </div>
                </div>
                <div className="rightPart">
                    <span>СРРСРССРР</span>
                </div>
            </div>
        );
    }
}

export default ApplItem;
