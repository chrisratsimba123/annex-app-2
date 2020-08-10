import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [profilePic, updateProfilePic] = useState("");
  const [name, updateName] = useState("");
  const [location, updateLocation] = useState("");
  const [bio, updateBio] = useState("");
  const [firstPic, updateFirstPic] = useState("");
  const [secondPic, updateSecondPic] = useState("");
  const [thirdPic, updateThirdPic] = useState("");

  const createUser = async () => {
    await axios.post(
      "https://api.airtable.com/v0/appdkkBZ0LmjsMTXi/Table%201",
      {
        fields: {
          MediumProPic: profilePic,
          Name: name,
          Location: location,
          Bio: bio,
          Artwork1: firstPic,
          Artwork2: secondPic,
          Artwork3: thirdPic,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className="create-users-div">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        className="users-username-input"
        placeholder="Name"
        onChange={(e) => updateName(e.target.value)}
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        className="users-location-input"
        placeholder="Location"
        onChange={(e) => updateLocation(e.target.value)}
      />
      <label htmlFor="bio">Bio</label>
      <input
        type="text"
        className="users-bio-input"
        placeholder="Bio"
        onChange={(e) => updateBio(e.target.value)}
      />
      <label for="url">Profile Photo</label>
      <input
        type="url"
        name="url"
        className="users-profile-input"
        placeholder="Enter Image URL"
        onChange={(e) => updateProfilePic(e.target.value)}
      />
      <label for="url">Collection Image #1</label>
      <input
        type="url"
        name="url"
        className="users-url-input"
        placeholder="Enter Image URL"
        onChange={(e) => updateFirstPic(e.target.value)}
      />
      <label for="url">Collection Image #2</label>
      <input
        type="url"
        name="url"
        className="users-url-input"
        placeholder="Enter Image URL"
        onChange={(e) => updateSecondPic(e.target.value)}
      />
      <label for="url">Collection Image #3</label>
      <input
        type="url"
        name="url"
        className="users-url-input"
        placeholder="Enter Image URL"
        onChange={(e) => updateThirdPic(e.target.value)}
      />
      <button
        className="users-button"
        onClick={() =>
          createUser(
            profilePic,
            name,
            location,
            bio,
            firstPic,
            secondPic,
            thirdPic
          )
        }
      >
        Create New Profile
      </button>
    </div>
  );
}

export default CreateUser;
