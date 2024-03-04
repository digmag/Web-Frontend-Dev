import React from "react";
import './headercss.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import envelope from './envelope.svg'
import key from './key.svg'
import person from './person.svg'
import { Svg } from "./svg.tsx";

class HeaderButtons extends React.Component{
    render() {
        return(
            <div className="headerButtons">
                <Svg id="envelope" className="svg"/>
                <img className="custom-icon" src={envelope} alt="envelope"/>
                <img className="custom-icon" src={key} alt="key"/>
                <img className="custom-icon" src={person} alt="person"/>
            </div>
        )
    }
}

export default HeaderButtons;