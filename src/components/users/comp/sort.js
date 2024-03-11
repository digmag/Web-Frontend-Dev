import React from "react";
import "../styleforlist.css"

class Sort extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sortBy: "name"
        };
    }

    handleSortChange = (event) => {
        this.setState({
            sortBy: event.target.value
        });
        this.props.onSortChange(event.target.value)
    }

    render() {
        return (
            <div className="sort">
                <span className="textSort">Сортировка:</span>
                <select className="select"> onChange={this.handleSortChange}
                    <option value="name">По имени(А-Я)</option>
                    <option value="surname">По фамилии(А-Я)</option>
                    <option value="role">По роли</option>
                </select>
            </div>
        );
    }
}

export default Sort;