import React from "react"
import PropTypes from "prop-types"
import ShowFields from "./ShowFields";
class ShowPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          show: []
      };
  }

  componentDidMount(){
      fetch('/api/v1/shows/' + this.props.show_id + '.json')
          .then((response) => {return response.json()})
          .then((data) => {this.setState({ show: data }) });
  }

  render () {
    return (
      <React.Fragment>
        <h1>Show page:</h1>
        <ShowFields show={this.state.show}/>
      </React.Fragment>
    );
  }
}

export default ShowPage
