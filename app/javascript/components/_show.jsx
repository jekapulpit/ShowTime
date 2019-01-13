import React from "react"
import PropTypes from "prop-types"
class _show extends React.Component {
  render () {
    return (
        <div className="show-block">
            <h1>{this.props.title}</h1>
            <p>{this.props.discription}</p>
        </div>
    );
  }
}

export default _show
