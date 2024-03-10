import React from "react";
import "../styleforlist.css"
import SearchInputs from "./searchInput";
import UserList from "./userList";
import FindButton from "./findButton";
import Sort from "./sort";
import MainHeader from "../../general/header/mainHeader";

class ListMain extends React.Component{
    render(){
        return(
            <div classname="list">
                <MainHeader />
                <SearchInputs />
                <FindButton />
                <UserList />
                <Sort />
            </div>
        );
    }
}

export default ListMain;