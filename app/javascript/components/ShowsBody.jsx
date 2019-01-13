import React from "react"
import PropTypes from "prop-types"
import AllShows from "./AllShows";
class ShowsBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: []
        };
    }

    componentDidMount(){
        fetch('/api/v1/shows.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ shows: data }) });
    }

    render(){
        return(
            <div>
                <AllShows shows={this.state.shows} />
            </div>
        )
    }
}

export default ShowsBody
