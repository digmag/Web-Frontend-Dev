import React, { useState, useEffect } from 'react';
import '../applications.css';
import Container from 'react-bootstrap/Container';

const ApplItem = ({ background, status, keyId, id , requestedDateTime}) => {
    const [auditoryNumber, setAuditoryNumber] = useState('');
    const [userName, setUserName] = useState('');


    useEffect(() => {
        if (keyId) {
            fetchAuditoryNumber();
        }
    }, [keyId]);
    useEffect(() => {
        if (id) {
            fetchUserName();
        }
    }, [id]);

    const fetchAuditoryNumber = async () => {
        try {
            const response = await fetch(`http://158.160.147.51:8181/keys/list`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch auditory number');
            }
            const data = await response.json();
            const key = data.keys.find(item => item.keyId === keyId);
            if (key) {
                setAuditoryNumber(key.officeNumber);
            } else {
                throw new Error('Key not found');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const fetchUserName = async () => {
        try {
            const response = await fetch(`http://158.160.147.51:8181/api/account/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch name');
            }
            const data = await response.json();
            const user = data.users.find(user => user.id === id);
            if (user) {
                setUserName(user.fullName);
            } else {
                throw new Error('User not found');
            }
        } catch (error) {
            console.log(error.message);
        }
    };


    const getStatusText = (status) => {
        switch (status) {
            case 'EXPIRED':
                return 'Отклонено';
            case 'IN_PROCESS':
                return 'В рассмотрении';
            case 'APPROVED':
                return 'Одобрено';
            default:
                return 'Неизвестный статус';
        }
    };


    function formatDateTime(dateTimeString) {
        const date = new Date(dateTimeString);

        const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        const dayOfWeek = daysOfWeek[date.getDay()];

        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        const formattedDateTime = `${dayOfWeek} ${date.getDate()}.${(date.getMonth() + 1)}.${date.getFullYear()}, ${hours}:${minutes}`;

        return formattedDateTime;
    }


    return (
        <div className="applItem" style={{ background: background }}>
            <div className="leftPart">
                <div className="applAudit">
                    <span>Аудитория: {auditoryNumber}</span>
                </div>
                <div className="applUser divAppl">
                    <span>Пользователь: {userName}</span>
                </div>
                <div className="applStatus divAppl">
                    <span>Статус: {getStatusText(status)}</span>
                </div>
            </div>
            <div className="rightPart">
                <span>{formatDateTime(requestedDateTime)}</span>
            </div>
        </div>
    );
};

export default ApplItem;
