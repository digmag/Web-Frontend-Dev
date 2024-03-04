import React from "react";
import Search from "./search/search";
import Sorting from "./sorting";
import StatusFilter from "./statusFilter";
import '../applications.css'
class ApplicationFilter extends React.Component{
    render(){
        return(
            <div className="applicationFilter">
                <Search />
                <Sorting />
                <StatusFilter />
            </div>
        );
    }
}

export default ApplicationFilter;