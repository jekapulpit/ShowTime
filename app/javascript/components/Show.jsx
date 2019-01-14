import React from "react"
import PropTypes from "prop-types"

class Show extends React.Component {
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.show.title}</h1>
                <p>{this.props.show.description}</p>
                <button onClick={() => this.props.handleDelete(this.props.show.id)}>Delete</button>
            </React.Fragment>
        )
    }
}

export default Show
