import React from "react"
import PropTypes from "prop-types"
import ShowFields from "./ShowFields";
class ShowPage extends React.Component {
  constructor(props) {
      super(props);
  }

  render () {
    return (
      <React.Fragment>
        <h1>Show page:</h1>
        <ShowFields show={this.props.show}/>
      </React.Fragment>
    );
  }
}

export default ShowPage
