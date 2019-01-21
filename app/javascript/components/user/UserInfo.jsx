import React from "react"
import PropTypes from "prop-types"
class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <React.Fragment>
                <p>{this.props.user.realname}</p>
                <p>{this.props.user.dateofbirth}</p>
                <p>{this.props.user.moreinfo}</p>
            </React.Fragment>
        );
    }
}

export default UserInfo
