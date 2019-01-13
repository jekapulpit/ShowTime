import React from "react"
import PropTypes from "prop-types"

const AllShows = (props) => {
    var shows = props.shows.map((show) => {
        return(
            <div key={show.id}>
                <h1>{show.title}</h1>
                <p>{show.description}</p>
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
