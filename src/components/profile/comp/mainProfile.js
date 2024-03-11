import React, { useState, useEffect } from 'react';
import MainHeader from "../../general/header/mainHeader";
import '../profile.css';

const MainProfile = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const response = await fetch('{{url}}/api/account/profile/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch user profile');
            }
            const userData = await response.json();
            setUserInfo(userData);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <MainHeader />
            <div className="greyBack">
                <div className="profWin">
                    <span className="profileText">Профиль пользователя:</span>
                    <div className="profileInfo">
                        <div className="info">ФИО: {userInfo && userInfo.fullname}</div>
                        <div className="info">Логин: {userInfo && userInfo.login}</div>
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
};

export default MainProfile;
