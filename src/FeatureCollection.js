import React, { useState, useEffect } from "react";
import axios from "axios";

function FeatureCollection() {
  const [featureCollection, updateFeatureCollection] = useState([]);
  const [imageIndex, updateImageIndex] = useState(0);

  useEffect(() => {
    const featureApiCall = async () => {
      const res = await axios(
        "https://api.airtable.com/v0/appI7kTD5SxyjumuA/Table%201",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
        }
      );

      updateFeatureCollection(res.data.records);
      setInterval(() => {
        if (imageIndex + 1 === featureCollection.length) {
          updateImageIndex(0);
        } else {
          updateImageIndex(imageIndex + 1);
        }
      }, 1000);
    };
    featureApiCall();
  }, []);

  return (
    <>
      <h1>Feature Collection</h1>
      <div className="feature-collection-div">
        {featureCollection.length > 0 && (
          <img
            className="feature-image"
            src={featureCollection[imageIndex].fields.FeaturedImage}
            alt="Top Collections"
          ></img>
        )}
      </div>
    </>
  );
}

export default FeatureCollection;
