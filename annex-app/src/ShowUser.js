import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
      <h1>Show Users</h1>
      {user && (
        <div>
          <img src={user.MediumProPic} alt="Medium Sized Profile Pic"></img>
          <h2>{user.Name}</h2>
          <h2>{user.Location}</h2>
          <img src={user.Artwork1} alt="Artwork 1"></img>
          <img src={user.Artwork2} alt="Artwork 2"></img>
          <img src={user.Artwork3} alt="Artwork 3"></img>
          <button onClick={`location.href = ${user.Collection}`}>See More</button>
        </div>
      )}
    </>
  );
}

export default ShowUser;
