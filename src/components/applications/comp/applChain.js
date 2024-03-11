import React, { useState, useEffect } from "react";
import '../applications.css'
import Container from 'react-bootstrap/Container';
import ApplItem from "./applItem";
import status from "../../keys/comp/keyCard/status";
import KeyCard from "../../keys/comp/keyCard/keyCard";

const ApplChain = () => {
    const [newData, setItemData] = useState([]);

    useEffect(() => {
        handleSubmit();
    }, []);

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

    const handleSubmit = () => {
        try {
            // Потом заменить на норм переменную из URL
            const idd = 'f490bdff-fee6-4fa0-b4e8-6345d5840e88';
            fetch(`http://158.160.147.51:8181/api/office/${idd}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            })
                .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        console.log(response);
                        throw new Error();
                    }
                })
                .then(response => {
                    console.log("rrr", response);

                    const newData = response.requests.map(item => ({
                        status: item.status,
                        keyId: item.keyId,
                        backgroundColor: getStatusBackgroundColor(item.status)
                    }));
                    console.log("eeeeeeeey", newData);

                    setItemData(newData);
                })
                .catch(error => {
                    console.log('Ошибка:', error);
                });

        } catch (error) {
            console.log('Ошибка:', error);
        }
    };


    return (
        <Container className="applChain">
            {newData.map((data, index) => (
                <ApplItem key={index} background={data.backgroundColor} status={data.status} keyId={data.keyId} />
            ))}
        </Container>
    );
};

export default ApplChain;
