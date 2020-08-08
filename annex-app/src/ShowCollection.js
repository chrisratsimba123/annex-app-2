import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'


function ShowCollection() {
    const [collections, updateCollection] = useState([])

    useEffect(() => {
        const collectionApiCall = async () => {
            const data = await axios("https://api.airtable.com/v0/appI7kTD5SxyjumuA/Table%201", {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
                }
            })
            console.log(data.data.records)
            // let showCollectionInfoArray = []
            // for (const input in data.data.fields) { // Turn from object into an array
            //     showCollectionInfoArray.push(`${input}: ${data.data.fields[input]}`)
            // }
            updateCollection(data.data.records)
        }
        collectionApiCall()
    }, [])
// console.log(collections)
    return (
        <>
        <h1>Show Collections</h1>
            {collections.map(collection => 
                <div>
                    <h2>{collection.fields.CollectionName}</h2>
                    <h2>{collection.fields.Username}</h2>
                    <img src={collection.fields.FeaturedImage} alt="Banner"></img>
                    <img src={collection.fields.Artwork1} alt="Collection Pic #1"></img>
                    <img src={collection.fields.Artwork2} alt="Collection Pic #2"></img>
                    <img src={collection.fields.Artwork3} alt="Collection Pic #3"></img>
                    <img src={collection.fields.Artwork4} alt="Collection Pic #4"></img>
                    <img src={collection.fields.Artwork5} alt="Collection Pic #5"></img>
                    <img src={collection.fields.Artwork6} alt="Collection Pic #6"></img>
                    <button>See More</button>
                </div>)}
        
        </>
        
    )
}

export default ShowCollection