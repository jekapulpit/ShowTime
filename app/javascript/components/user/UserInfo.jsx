import React from "react"
import PropTypes from "prop-types"
class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: props.editable
        };
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleEdit(){
        if(this.state.editable){
            let realname = this.realname.value;
            let dateofbirth = this.dateofbirth.value;
            let moreinfo = this.moreinfo.value;
            let id = this.props.user.id;
            let user = {id: id, realname: realname, dateofbirth: dateofbirth, moreinfo: moreinfo};
            this.props.handleUpdate(user)
        }
        this.setState({
            editable: !this.state.editable
        })
    }

    render () {
        let realname = this.state.editable ? <input type='text' ref={input => this.realname = input} defaultValue={this.props.user.realname}/>:<h3>{this.props.user.realname}</h3>
        let dateofbirth = this.state.editable ? <input type='date' ref={input => this.dateofbirth = input} defaultValue={this.props.user.dateofbirth}/>:<p>{this.props.user.dateofbirth}</p>
        let moreinfo = this.state.editable ? <textarea ref={input => this.moreinfo = input}>{this.props.user.moreinfo}</textarea>:<p>{this.props.user.moreinfo}</p>
        return (
            <React.Fragment>
                {realname}
                {dateofbirth}
                {moreinfo}
                <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
            </React.Fragment>
        );
    }
}

export default UserInfo
