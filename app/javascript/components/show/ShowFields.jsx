import React from "react"
import PropTypes from "prop-types"

class ShowFields extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <h1>{this.props.show.title}</h1>
                <p>{this.props.show.description}</p>
            </React.Fragment>
        )
    }
}

export default ShowFields
