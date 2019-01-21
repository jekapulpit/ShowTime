import React from "react"
import PropTypes from "prop-types"
import UserInfo from "./UserInfo";
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.updateUser = this.updateUser.bind(this)
    }

    handleUpdate(user){
        fetch(`http://localhost:3000/users/${user.id}`,
            {
                method: 'PUT',
                body: JSON.stringify({user: user}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
            this.updateUser(user)
        })
    }

    updateUser(user){
        this.setState({
            user: user
        })
    }

    render () {
        return (
            <React.Fragment>
                <h1>{this.props.user.username}</h1>
                <UserInfo user={this.state.user} handleUpdate={this.handleUpdate} editable={false} />
            </React.Fragment>
        );
    }
}

export default Profile
