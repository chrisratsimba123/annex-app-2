import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ShowCollection() {
  const [collection, updateCollection] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const collectionApiCall = async () => {
      const res = await axios(
        `https://api.airtable.com/v0/appI7kTD5SxyjumuA/Table%201/${id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
        }
      );
      updateCollection(res.data);
    };
    collectionApiCall();
  }, []);

  return (
    <>
      {collection && (
        <div className="show-collections-div">
          <h1>
            {collection.fields.CollectionName} ({collection.fields.Username})
          </h1>
          <img
            className="show-collection-images"
            src={collection.fields.FeaturedImage}
            alt="Banner"
          ></img>
          <img
            className="show-collection-images"
            src={collection.fields.Artwork1}
            alt="Collection Pic #1"
          ></img>
          <img
            className="show-collection-images"
            src={collection.fields.Artwork2}
            alt="Collection Pic #2"
          ></img>
          <img
            className="show-collection-images"
            src={collection.fields.Artwork3}
            alt="Collection Pic #3"
          ></img>
          <img
            className="show-collection-images"
            src={collection.fields.Artwork4}
            alt="Collection Pic #4"
          ></img>
          <img
            className="show-collection-images"
            src={collection.fields.Artwork5}
            alt="Collection Pic #5"
          ></img>
          <img
            className="show-collection-images"
            src={collection.fields.Artwork6}
            alt="Collection Pic #6"
          ></img>
          {/* <button onClick={`location.href = ${collection.Collection}`}>
            See More
          </button> */}
        </div>
      )}
    </>
  );
}

export default ShowCollection;
