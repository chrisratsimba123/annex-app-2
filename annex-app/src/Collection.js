import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Collection() {
  const [collections, updateCollection] = useState([]);

  useEffect(() => {
    const collectionApiCall = async () => {
      const data = await axios(
        "https://api.airtable.com/v0/appI7kTD5SxyjumuA/Table%201/",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
        }
      );

      updateCollection(data.data.records);
    };
    collectionApiCall();
  }, []);

  return (
    <>
      <h1>Top Collections</h1>
      {collections.map((collection) => (
        <div className="top-collections-div">
          <img
            className="top-collections-images-home"
            src={collection.fields.FeaturedImage}
            alt="Banner"
          ></img>
          <Link
            to={`/show-collection/${collection.id}`}
            className="collections-text"
          >
            {collection.fields.CollectionName} ({collection.fields.Username})
          </Link>
        </div>
      ))}
    </>
  );
}

export default Collection;
