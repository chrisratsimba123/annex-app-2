import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Collection() {
    const [collections, updateCollection] = useState([])

    useEffect(() => {
        const collectionApiCall = async () => {
            const data = await axios("https://api.airtable.com/v0/appI7kTD5SxyjumuA/Table%201/", {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
                }
            })
            // console.log(data.data.records)
            // let collectionInfoArray = []
            // for (const input in data.data.fields) { // Turn from object into an array
            //     collectionInfoArray.push(`${input}: ${data.data.fields[input]}`)
            // }
            updateCollection(data.data.records)
        }
        collectionApiCall()
    }, [])
    // console.log(collections)
    return (
        // Create container with designated height/width
        // Create border
        // Add thumbnail of artwork (Unsplash API)
        // Add title of collection (Unsplash Hard-Code)
        // Add author title underneath (Unsplash Hard-Code)
        // Add randomized number of likes/views 
        // Add onClick event that when collection is clicked navigates to collection show page
        <>
        <h1>Top Collections</h1>
            {collections.map(collection => 
                <div>
                    <img src={collection.fields.FeaturedImage} alt="Banner"></img>
                    <h2>{collection.fields.CollectionName} ({collection.fields.Username})</h2>
                </div>)}
        </>
    )
}

export default Collection