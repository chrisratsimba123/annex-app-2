import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

function ShowUser() {
    const [users, updateUsers] = useState([])

    useEffect(() => {
        const userApiCall = async () => {
            const data = await axios("https://api.airtable.com/v0/appdkkBZ0LmjsMTXi/Table%201", {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
                }
            })
            // console.log(data.data.records)
            updateUsers(data.data.records)
        }
        userApiCall()
    }, [])

    return (
        <>
        <h1>Show Users</h1>
            {users.map(user => 
                <div>
                    <img src={user.MediumProPic} alt="Medium Sized Profile Pic"></img>
                    <h2>{user.Name}</h2>
                    <h2>{user.Location}</h2>
                    <img src={user.Artwork1} alt="Artwork 1"></img>
                    <img src={user.Artwork2} alt="Artwork 2"></img>
                    <img src={user.Artwork3} alt="Artwork 3"></img>
                    <button>See More</button>
                </div>)}
        <button>See More</button>
        </>
        
    )

}

export default ShowUser