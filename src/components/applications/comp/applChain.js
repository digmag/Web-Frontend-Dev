import React, { useState, useEffect } from "react";
import '../applications.css'
import Container from 'react-bootstrap/Container';
import ApplItem from "./applItem";

const ApplChain = () => {
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        handleSubmit();
    }, []);

    const fetchOfficeData = async () => {
        localStorage.setItem("idd", "fbe6df69-326c-4a61-a00f-80c29a9a731f")


        try {
            const idd = localStorage.getItem('idd');
            const response = await fetch(`http://158.160.147.51:8181/api/office/${idd}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch office data');
            }
            return await response.json();
        } catch (error) {
            console.log(error.message);
            return null;
        }
    };

    const fetchRequestData = async () => {
        try {
            const idd = localStorage.getItem('idd');
            const response = await fetch(`http://158.160.147.51:8181/api/office/${idd}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch request data');
            }
            return await response.json();
        } catch (error) {
            console.log(error.message);
            return null;
        }
    };

    const handleSubmit = async () => {
        try {
            const officeData = await fetchOfficeData();
            const requestData = await fetchRequestData();

            if (!officeData || !requestData) {
                throw new Error('Failed to fetch required data');
            }

            const newData = requestData.requests.map(item => ({
                status: item.status,
                keyId: item.keyId,
                requestedDateTime: item.requestedDateTime,
                id: item.id,
                backgroundColor: getStatusBackgroundColor(item.status)
            }));

            console.log('New data:', newData);
            setNewData(newData);
        } catch (error) {
            console.log('Ошибка:', error);
        }
    };

    const getStatusBackgroundColor = (status) => {
        switch (status) {
            case 'отклонено':
                return '#DC5858';
            case 'IN_PROCESS':
                return '#EECF2A';
            case 'одобрено':
                return '#1EC360';
            default:
                return '#ffffff';
        }
    }

    return (
        <Container className="applChain">
            {newData.map((data, index) => (
                <ApplItem key={index} background={data.backgroundColor} status={data.status} keyId={data.keyId} id={data.id} requestedDateTime={data.requestedDateTime} />
            ))}
        </Container>
    );
};

export default ApplChain;
