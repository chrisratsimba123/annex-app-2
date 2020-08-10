import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

function User() {
    const [users, updateUsers] = useState([])

useEffect(() => {
    const userApiCall = async () => {
        const data = await axios("https://api.airtable.com/v0/appdkkBZ0LmjsMTXi/Table%201", {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
            }
        })
            // console.log(data.data.records)
            // let userInfoArray = []
            // for (const input in data.data.fields) { // Turn from object into an array
            //     userInfoArray.push(`${input}: ${data.data.fields[input]}`)
            // }
            updateUsers(data.data.records)
    }
    userApiCall()
}, [])
//  console.log(users)
    return (
        // Create container with designated height/width
        // Create border
        // Add profile pic thumbnail (Unsplash API)
        // Add thumbnail of artwork (Unsplash API)
        // Add onClick event on 'View Profile ->' button that navigates to user's profile page
        <>
            <h1>Top Users</h1>
            {users.map(user => 
                <div>
                    <img src={user.fields.Artwork1} alt="Profile-Pic"></img>
                    <Link to={`/show-user/${user.id}`}>{user.fields.Name}</Link>
                    
                </div>)}
        </>
    )
}

export default User