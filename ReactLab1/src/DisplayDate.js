import React from 'react'
import './App.css';

function DisplayDate(props) {
    return (
        <div className="date">
            <h1>Date:{props.date}</h1>
        </div>
    )
}

export default DisplayDate