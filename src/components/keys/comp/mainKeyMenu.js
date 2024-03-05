import React from "react";
import MainHeader from "../../general/header/mainHeader";
import KeyFilter from "./keyFilter";
import KeyCard from "./keyCard/keyCard";
import KeyCardContainer from "./keyCardContainer";

class MainKeyMenu extends React.Component {
    render() {
        return (
            <div>
                <MainHeader />
                <KeyFilter />
                <KeyCardContainer />
            </div>
        );
    }
}

export default MainKeyMenu;