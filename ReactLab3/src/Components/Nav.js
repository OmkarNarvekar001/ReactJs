import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './nav.css';

function Nav() {
    return (
        <div className="navbar">
            <nav>
            <Link to="/">Home</Link>
            <Link to="/route1">Images</Link>
            <Link to="/route2">Information</Link>
            <Link to="/route3">Contact Us</Link>
            </nav>
        </div>
    )
}

export default Nav
