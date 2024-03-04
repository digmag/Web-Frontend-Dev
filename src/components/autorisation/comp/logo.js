import React from "react";
import "../autor.css"
import logoTSU from './2024-02-14_14-40-28 2.svg'


class Logo extends React.Component{
    render(){
        return(
            <div className="titleTSU">
                <img src={logoTSU} alt="Logo"/>
                <span>TSU.Keys</span>
            </div>
        );
    }
}

export default Logo;