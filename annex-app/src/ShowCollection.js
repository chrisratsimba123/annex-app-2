import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'


function ShowCollection() {
    const [collections, updateCollection] = useState([])

    useEffect(() => {
        const collectionApiCall = async () => {
            const data = await axios("https://api.airtable.com/v0/appI7kTD5SxyjumuA/Table%201/recZ1K7BKQ418pjrx", {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
                }
            })
            console.log(data.data.fields)
            for (const input in data.data.fields) { // Turn from object into an array
                let showCollectionInfoArray = []
                showCollectionInfoArray.push(`${input}: ${data.data.fields[input]}`)
                updateCollection(showCollectionInfoArray)
            }
        }
        collectionApiCall()
    }, [])

    return (
        <>
        <h1>Show Collections</h1>
            {collections.map(collection => 
                <div>
                    <h2>{collection.CollectionName}</h2>
                    <h2>{collection.Username}</h2>
                    <img src={collection.FeaturedImage}></img>
                    <img src={collection.Artwork1}></img>
                    <img src={collection.Artwork2}></img>
                    <img src={collection.Artwork3}></img>
                    <img src={collection.Artwork4}></img>
                    <img src={collection.Artwork5}></img>
                    <img src={collection.Artwork6}></img>
                    <button>See More</button>
                </div>)}
        <button>See More</button>
        </>
        
    )
}

export default ShowCollection