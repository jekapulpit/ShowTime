import React from "react"
import PropTypes from "prop-types"
class _all_shows extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shows: []
        };
    }

    componentDidMount(){
        fetch('/api/v1/fruits.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ fruits: data }) });
    }

    render () {
        return (
            <div>
               <h1>todo: list</h1>
            </div>
        );
    }
}

export default _all_shows
