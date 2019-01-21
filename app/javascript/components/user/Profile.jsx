import React from "react"
import PropTypes from "prop-types"
import UserInfo from "./UserInfo";
class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <React.Fragment>
                <h1>{this.props.user.username}</h1>
                <UserInfo user={this.props.user} />
            </React.Fragment>
        );
    }
}

export default Profile
