import React from "react"
import PropTypes from "prop-types"
const NewShow = (props) => {
    let formFields = {};

    return(
        <form data-remote="true" onSubmit={ (e) => { props.handleFormSubmit(formFields.title.value, formFields.description.value);
        e.target.reset();} }>
            <input ref={input => formFields.title = input} placeholder='Enter the name of the show'/>
            <input ref={input => formFields.description = input} placeholder='Enter a description' />
            <button>Submit</button>
        </form>
    )
};

export default NewShow
