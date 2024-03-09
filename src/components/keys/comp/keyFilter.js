import React from "react";
import Search from "./search/search";
import '../keys.css'
import AddKey from "./addKey/addKey";

class KeyFilter extends React.Component {
    render() {
        return (
            <div className="keyFilter">
                <Search />
                <AddKey />
                {/* <Sorting />
                <StatusFilter /> */}
            </div>
        );
    }
}

export default KeyFilter;