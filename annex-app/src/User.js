import React, { useState, useEffect } from 'react'
import axios from 'axios'

function User() {
    const [users, updateUsers] = useState([])

useEffect(() => {
    const userApiCall = async () => {
        const data = await axios("https://api.airtable.com/v0/appdkkBZ0LmjsMTXi/Table%201/recS68prppfnGrM5k", {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
            }
        })
            console.log(data.data.fields)
            for (const input in data.data.fields) { // Turn from object into an array
                let userInfoArray = []
                userInfoArray.push(`${input}: ${data.data.fields[input]}`)
                updateUsers(userInfoArray)
            }
    }
    userApiCall()
}, [])

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
                    <img src={user.Artwork1}></img>
                    <h2>{user.Name}</h2>
                    <button>See More</button>
                </div>)}
            <button>See More</button>
        </>
    )
}

export default User