import React from "react";
import '.././details.css'
import MainHeader from "../../general/header/mainHeader";
import BackgroundGrey from "../../general/backgroundGrey";

class MainDetails extends React.Component {
    render() {
        return (
            <div>
                <MainHeader />
                <div className="greyBack">
                    <div className="detailsWin">
                        <span className="detailsText">Детали заявки:</span>
                        <div className="detailsInfo">
                            <div className="info">Бронь на имя:</div>
                            <div className="info">Дата:</div>
                            <div className="info">Номер пары:</div>
                            <div className="info">Номер кабинета:</div>
                        </div>
                        <div className="dobleButton">
                            <button className="decline">Отклонить заявку</button>
                            <button className="accept">Принять заявку</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainDetails;