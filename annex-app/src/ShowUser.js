import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ShowUser() {
  const [user, updateUsers] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const userApiCall = async () => {
      const res = await axios(
        `https://api.airtable.com/v0/appdkkBZ0LmjsMTXi/Table%201/${id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
        }
      );
      updateUsers(res.data);
    };
    userApiCall();
  }, []);

  return (
    <>
      {user && (
        <div className="show-users-div">
          <h1>{user.fields.Name}</h1>
          <img src={user.fields.MediumProPic} alt="Medium Sized Profile Pic"></img>
          <h2>{user.fields.Location}</h2>
          <img className="show-users-images" src={user.fields.Artwork1} alt="Artwork 1"></img>
          <img className="show-users-images" src={user.fields.Artwork2} alt="Artwork 2"></img>
          <img className="show-users-images" src={user.fields.Artwork3} alt="Artwork 3"></img>
        </div>
      )}
    </>
  );
}

export default ShowUser;
