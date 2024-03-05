import React from "react";
import HeaderButtons from "./headerButtons";
import LogoTiny from "./logoTiny";
import './header.css'


class MainHeader extends React.Component{
    render() {
        return(
            <header className="mainHeader">
                <LogoTiny />
                <HeaderButtons />
            </header>
        )
    }
}

export default MainHeader;