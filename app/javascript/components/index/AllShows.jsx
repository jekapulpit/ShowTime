import React from "react"
import PropTypes from "prop-types"
import Show from "./Show";

const AllShows = (props) => {
    var shows = props.shows.map((show) => {
        return(
            <div key={show.id}>
                <Show show={show} handleDelete={props.handleDelete}/>
            </div>
        )
    });
    return(
        <div>
            {shows}
        </div>
    )
};

export default AllShows
