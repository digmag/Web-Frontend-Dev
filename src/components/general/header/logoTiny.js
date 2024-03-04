import React from "react";
import './headercss.css'
import logoTSUTiny from './Group 39.svg'

class LogoTiny extends React.Component{
    render() {
        return(
            <div className="logoTiny">
                <img className="imageTSU" src={logoTSUTiny} alt="LogoTiny"/>
                <span>TSU.Keys</span>
            </div>
        )
    }
}

export default LogoTiny;