import React, { useState } from "react";
import axios from "axios";

function CreateCollection() {
  const [username, updateUsername] = useState("");
  const [collectionName, updateCollectionName] = useState("");
  const [caption, updateCaption] = useState("");
  const [firstPic, updateFirstPic] = useState("");
  const [secondPic, updateSecondPic] = useState("");
  const [thirdPic, updateThirdPic] = useState("");
  const [fourthPic, updateFourthPic] = useState("");
  const [fifthPic, updateFifthPic] = useState("");
  const [sixthPic, updateSixthPic] = useState("");

  const createCollection = async () => {
    await axios.post(
      "https://api.airtable.com/v0/appI7kTD5SxyjumuA/Table%201",
      {
        fields: {
          Username: username,
          CollectionName: collectionName,
          Caption: caption,
          Artwork1: firstPic,
          Artwork2: secondPic,
          Artwork3: thirdPic,
          Artwork4: fourthPic,
          Artwork5: fifthPic,
          Artwork6: sixthPic,
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
    <div className="create-collections-div">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        className="collections-username-input"
        placeholder="Choose a unique username"
        onChange={(e) => updateUsername(e.target.value)}
      />
      <label htmlFor="collection-name">Collection Name</label>
      <input
        type="text"
        className="collections-name-input"
        placeholder="Choose a unique name for your collection"
        onChange={(e) => updateCollectionName(e.target.value)}
      />
      <label htmlFor="caption">Caption</label>
      <input
        type="text"
        className="collections-caption-input"
        placeholder="Tell a story"
        onChange={(e) => updateCaption(e.target.value)}
      />
      <label for="url">Collection Image #1</label>
      <input
        type="url"
        name="url"
        className="collections-url-input"
        placeholder="Enter Image URL"
        onChange={(e) => updateFirstPic(e.target.value)}
      />
      <label for="url">Collection Image #2</label>
      <input
        type="url"
        name="url"
        className="collections-url-input"
        placeholder="Enter Image URL"
        onChange={(e) => updateSecondPic(e.target.value)}
      />
      <label for="url">Collection Image #3</label>
      <input
        type="url"
        name="url"
        className="collections-url-input"
        placeholder="Enter Image URL"
        onChange={(e) => updateThirdPic(e.target.value)}
      />
      <label for="url">Collection Image #4</label>
      <input
        type="url"
        name="url"
        className="collections-url-input"
        placeholder="Enter Image URL"
        onChange={(e) => updateFourthPic(e.target.value)}
      />
      <label for="url">Collection Image #5</label>
      <input
        type="url"
        name="url"
        className="collections-url-input"
        placeholder="Enter Image URL"
        onChange={(e) => updateFifthPic(e.target.value)}
      />
      <label for="url">Collection Image #6</label>
      <input
        type="url"
        name="url"
        className="collections-url-input"
        placeholder="Enter Image URL"
        onChange={(e) => updateSixthPic(e.target.value)}
      />
      <button className="collections-button"
        onClick={() =>
          createCollection(
            username,
            collectionName,
            caption,
            firstPic,
            secondPic,
            thirdPic,
            fourthPic,
            fifthPic,
            sixthPic
          )
        }
      >
        New Collection
      </button>
    </div>
  );
}

export default CreateCollection;
