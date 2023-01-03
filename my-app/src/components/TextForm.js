import React from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Here</label>
                <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary">Convert To Uppercase</button>
        </>
    )
}

TextForm.propTypes={
    heading:PropTypes.string.isRequired
};

TextForm.defaultProps={
    heading:'Enter Text'
}