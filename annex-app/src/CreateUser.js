import React, { useState } from 'react'
import axios from 'axios'

function CreateUser() {
    const [profilePic, updateProfilePic] = useState("")
    const [name, updateName] = useState("")
    const [location, updateLocation] = useState("")
    const [bio, updateBio] = useState("")
    const [firstPic, updateFirstPic] = useState("")
    const [secondPic, updateSecondPic] = useState("")
    const [thirdPic, updateThirdPic] = useState("")

    const createUser = async () => {
        await axios.post("https://api.airtable.com/v0/appdkkBZ0LmjsMTXi/Table%201", {
            fields: {
                MediumProPic: profilePic, Name: name, Location: location, Bio: bio, Artwork1: firstPic, Artwork2: secondPic, Artwork3: thirdPic
            }
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                'Content-Type': "application/json"
            }
        })
    }

    return (
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" onChange={e => updateName(e.target.value)} />
            <label htmlFor="location">Location</label>
            <input type="text" id="location" placeholder="Location" onChange={e => updateLocation(e.target.value)} />
            <label htmlFor="bio">Bio</label>
            <input type="text" id="name" placeholder="Bio" onChange={e => updateBio(e.target.value)} />
            <label for="url">Enter Image URL</label>
            <input type="url" name="url" id="profile-pic" placeholder="Profile Pic" onChange={e => updateProfilePic(e.target.value)} />
            <label for="url">Enter Image URL</label>
            <input type="url" name="url" id="first-url" placeholder="Collection Image #1" onChange={e => updateFirstPic(e.target.value)} />
            <label for="url">Enter Image URL</label>
            <input type="url" name="url" id="first-url" placeholder="Collection Image #2" onChange={e => updateSecondPic(e.target.value)} />
            <label for="url">Enter Image URL</label>
            <input type="url" name="url" id="first-url" placeholder="Collection Image #3" onChange={e => updateThirdPic(e.target.value)} />
            <label for="url">Enter Image URL</label>
            <button onClick={() => createUser(profilePic, name, location, bio, firstPic, secondPic, thirdPic)}>Create New Profile</button>
        </div>
    )
}

export default CreateUser
