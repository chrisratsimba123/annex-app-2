import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
      <h1>Collections</h1>
      {collection && (
        <div>
          <h2>
          <Link to={`${collection.CollectionLink}`}>{collection.fields.CollectionName} ({collection.fields.Username})</Link>
            
          </h2>
          <img src={collection.fields.FeaturedImage} alt="Banner"></img>
          <img src={collection.fields.Artwork1} alt="Collection Pic #1"></img>
          <img src={collection.fields.Artwork2} alt="Collection Pic #2"></img>
          <img src={collection.fields.Artwork3} alt="Collection Pic #3"></img>
          <img src={collection.fields.Artwork4} alt="Collection Pic #4"></img>
          <img src={collection.fields.Artwork5} alt="Collection Pic #5"></img>
          <img src={collection.fields.Artwork6} alt="Collection Pic #6"></img>
                    
        </div>
      )}
    </>
  );
}

export default ShowCollection;
