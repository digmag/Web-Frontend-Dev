import React from "react";
import MainHeader from "../../general/header/mainHeader";
import ApplicationFilter from "./applicationFilter";
import ApplChain from "./applChain";

class MainApplicationMenu extends React.Component{



    render(){
        return(
            <div>
                <MainHeader />
                <ApplicationFilter />
                <ApplChain />
            </div>
        );
    }
}

export default MainApplicationMenu;