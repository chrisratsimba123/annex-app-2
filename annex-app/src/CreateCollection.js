import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CreateCollection() {
    const [username, updateUsername] = useState("")
    const [collectionName, updateCollectionName] = useState("")
    const [caption, updateCaption] = useState("")
    const [firstPic, updateFirstPic] = useState("")
    const [secondPic, updateSecondPic] = useState("")
    const [thirdPic, updateThirdPic] = useState("")
    const [fourthPic, updateFourthPic] = useState("")
    const [fifthPic, updateFifthPic] = useState("")
    const [sixthPic, updateSixthPic] = useState("")

    const createCollection = async (username, collectionName, caption, firstPic, secondPic, thirdPic, fourthPic, fifthPic, sixthPic) => {
        await axios.post("https://api.airtable.com/v0/appI7kTD5SxyjumuA/Table%201", {
            fields: {
                username, collectionName, caption, firstPic, secondPic, thirdPic, fourthPic, fifthPic, sixthPic
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
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={e => updateUsername(e.target.value)} />
            <label htmlFor="collection-name">Collection Name</label>
            <input type="text" id="collection-name" onChange={e => updateCollectionName(e.target.value)} />
            <label htmlFor="caption">Caption</label>
            <input type="text" id="caption" onChange={e => updateCaption(e.target.value)} />
            <label for="url">Enter Image URL</label>
            <input type="url" name="url" id="first-url" onChange={e => updateFirstPic(e.target.value)} />
            <label for="url">Enter Image URL</label>
            <input type="url" name="url" id="first-url" onChange={e => updateSecondPic(e.target.value)} />
            <label for="url">Enter Image URL</label>
            <input type="url" name="url" id="first-url" onChange={e => updateThirdPic(e.target.value)} />
            <label for="url">Enter Image URL</label>
            <input type="url" name="url" id="first-url" onChange={e => updateFourthPic(e.target.value)} />
            <label for="url">Enter Image URL</label>
            <input type="url" name="url" id="first-url" onChange={e => updateFifthPic(e.target.value)} />
            <label for="url">Enter Image URL</label>
            <input type="url" name="url" id="first-url" onChange={e => updateSixthPic(e.target.value)} />
            <button onClick={() => createCollection(username, collectionName, caption, firstPic, secondPic, thirdPic, fourthPic, fifthPic, sixthPic)}>New Collection</button>
        </div>
    )
}

export default CreateCollection