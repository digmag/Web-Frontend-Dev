import React from "react";
import "../autorisation/autor.css"

class BackgroundGrey extends React.Component{
    render(){
        const divStyle = {
            background: '#DBDBDB',
            width: '100vw',
            height: '100vh'
        };
        return(
            <div style={divStyle} />
        );
    }
}

export default BackgroundGrey;