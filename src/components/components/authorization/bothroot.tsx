import React from "react";
import { useLocation } from "react-router-dom";
import './style.css';
import MainMenuAutor from "./login/mainMenuAuthor";
import MainMenuReg from "./registration/mainMenuReg";
import ListMain from "../users/listMain";

const BothRootComponent = () => {
    const location = useLocation()

    return (
        <div className="root">
            <div>
                {location.pathname === '/login' ? <MainMenuAutor /> : location.pathname === '/registration' 
                ? <MainMenuReg /> : location.pathname === '/list' ? <ListMain /> : null}
            </div>
        </div>
    )
};

export default BothRootComponent;