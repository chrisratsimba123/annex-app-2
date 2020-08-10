import './Navigation.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="nav-bar">
            <Link to="/" className="nav-text">Annex</Link>
            <Link to="/create-collection/" className="nav-text">Submit a Collection</Link>
            <Link to="/create-user/" className="nav-text">Sign Up</Link>
            
        </nav>
    )
}

export default Navigation