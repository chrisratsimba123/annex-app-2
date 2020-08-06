import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FeatureCollection() {
    const [featureCollection, updateFeatureCollection] = useState([])

    useEffect(() => {
        const featureApiCall = async () => {
            const data = await axios("https://api.airtable.com/v0/appI7kTD5SxyjumuA/Table%201/recZ1K7BKQ418pjrx", {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
                }
            })
            console.log(data.data.fields)
            for (const input in data.data.fields) { // Turn from object into an array
                let featureInfoArray = []
                featureInfoArray.push(`${input}: ${data.data.fields[input]}`)
                updateFeatureCollection(featureInfoArray)
            }
        }
        featureApiCall()
    }, [])

    return (
        // Display feature collection
        // Display 'See More' Button
        // Add onClick event to Feature Collection Show Page
        <>
        <h1>Feature Collection</h1>
            {featureCollection.map(collection => 
                <div>
                    <img src={collection.FeaturedImage}></img>
                </div>)}
        <button>See More</button>
        </>
    )
    
}

export default FeatureCollection