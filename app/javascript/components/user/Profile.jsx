import React from "react"
import PropTypes from "prop-types"
class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <React.Fragment>
                <h1>{this.props.user.username}</h1>
                <p>{this.props.user.realname}</p>
                <p>{this.props.user.dateofbirth}</p>
                <p>{this.props.user.moreinfo}</p>
            </React.Fragment>
        );
    }
}

export default Profile
