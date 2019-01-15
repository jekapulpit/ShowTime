import React from "react"
import PropTypes from "prop-types"
import ShowsBody from "./ShowsBody";
class Main extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>All Shows:</h1>
        <ShowsBody/>
      </React.Fragment>
    );
  }
}

export default Main
