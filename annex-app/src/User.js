import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

function User() {
  const [users, updateUsers] = useState([]);

  useEffect(() => {
    const userApiCall = async () => {
      const data = await axios(
        "https://api.airtable.com/v0/appdkkBZ0LmjsMTXi/Table%201",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
        }
      );

      updateUsers(data.data.records);
    };
    userApiCall();
  }, []);

  return (
    <>
      <h1>Top Users</h1>
      {users.map((user) => (
        <div className="top-users-div">
          <img className="top-users-images-home" src={user.fields.Artwork1} alt="Profile-Pic"></img>
          <Link to={`/show-user/${user.id}`} className="top-users-text-home">{user.fields.Name}</Link>
        </div>
      ))}
    </>
  );
}

export default User;
