import React from "react";
import '.././profile.css'
import MainHeader from "../../general/header/mainHeader";
import BackgroundGrey from "../../general/backgroundGrey";

class MainProfile extends React.Component{
    render(){
        return(
            <div>
                <MainHeader />
                <div className="greyBack">
                    <div className="profWin">
                        <span className="profileText">Профиль пользователя:</span>
                        <div className="profileInfo">
                            <div className="info">ФИО:</div>
                            <div className="info">Логин:</div>
                        </div>
                        <div className="dobleButton">
                            <button className="studentRole">Выдать роль студента</button>
                            <button className="teacherRole">Выдать роль преподавателя</button>
                        </div>
                        <div className="singleButton">
                            <button className="highRole">Выдать роль сотрудника деканата</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainProfile;