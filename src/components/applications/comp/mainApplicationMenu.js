import React from "react";
import MainHeader from "../../general/header/mainHeader";
import ApplicationFilter from "./applicationFilter";

class MainApplicationMenu extends React.Component{
    render(){
        return(
            <div>
                <MainHeader />
                <ApplicationFilter />
            </div>
        );
    }
}

export default MainApplicationMenu;