import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FeatureCollection() {
    const [featureCollection, updateFeatureCollection] = useState([])
    const [imageIndex, updateImageIndex] = useState(0)

    useEffect(() => {
        const featureApiCall = async () => {
            const data = await axios("https://api.airtable.com/v0/appI7kTD5SxyjumuA/Table%201", {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
                }
            })
            // console.log(data.data.records)
            // for (const input in data.data.fields) { // Turn from object into an array
            //     let featureInfoArray = []
            //     featureInfoArray.push(`${input}: ${data.data.fields[input]}`)
                
            // }
            updateFeatureCollection(data.data.records)
            setInterval(() => {
                if(imageIndex + 1 === featureCollection.length) {
                    updateImageIndex(0)
                } else {
                    updateImageIndex(imageIndex + 1)
                }
            }, 3000)
        }
        featureApiCall()
    }, [])
// console.log(featureCollection)
    return (
        // Display feature collection
        // Display 'See More' Button
        // Add onClick event to Feature Collection Show Page
        <>
        <h1>Feature Collection</h1>
                <div>
                    {featureCollection.length > 0 && <img src={featureCollection[imageIndex].fields.FeaturedImage} alt="Top Collections"></img>}
                </div>
        <button>See More</button>
        </>
    )
    
}

export default FeatureCollection