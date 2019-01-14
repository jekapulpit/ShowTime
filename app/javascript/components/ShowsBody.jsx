import React from "react"
import PropTypes from "prop-types"
import AllShows from "./AllShows";
import NewShow from "./NewShow";
class ShowsBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.addNewShow = this.addNewShow.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id){
        fetch(`http://localhost:3000/api/v1/shows/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
            this.deleteShow(id);
        });
    }

    deleteShow(id){
        var newShows = this.state.shows.filter((show) => show.id !== id);
        this.setState({
            shows: newShows
        });
    }

    handleFormSubmit(title, description){
        let body = JSON.stringify({show: { title: title, description: description } });
        fetch('http://localhost:3000/api/v1/shows', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        }).then((response) => {return response.json()})
            .then((show)=>{
                this.addNewShow(show)
            });
    }

    addNewShow(show){
        this.setState({
            shows: this.state.shows.concat(show)
        });
    }

    componentDidMount(){
        fetch('/api/v1/shows.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ shows: data }) });
    }

    render(){
        return(
            <div>
                <NewShow handleFormSubmit={this.handleFormSubmit} />
                <AllShows shows={this.state.shows} handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

export default ShowsBody
