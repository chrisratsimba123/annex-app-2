import './Navigation.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <Link to="/">Annex</Link>
            <Link to="/create-collection/">Submit a Collection</Link>
            <Link to="/create-user/">Sign Up</Link>
        </nav>
    )
}

export default Navigation