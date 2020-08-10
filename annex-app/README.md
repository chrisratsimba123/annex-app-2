# Project Overview

## Annex

## Project Description

Inspired by Instagram and the websites Grailed and Mudisch, I would like to create an online marketplace for art, fashion and photography where users can not only create profiles to post their own content but also to share and market their portfolios. 

## API and Data Sample

I will be fetching various photographs, artworks and fashion pieces from the Unsplash website. Once done, I will hard-code the image-related data from Unsplash into my two Airtables - one form will allow a user to create a profile on Annex while the other allows them to submit their portfolio as a post. 

```json
[
  {
    "id": "LBI7cgq3pbM",
    "created_at": "2016-05-03T11:00:28-04:00",
    "updated_at": "2016-07-10T11:00:01-05:00",
    "width": 5245,
    "height": 3497,
    "color": "#60544D",
    "likes": 12,
    "liked_by_user": false,
    "description": "A man drinking a coffee.",
    "user": {
      "id": "pXhwzz1JtQU",
      "username": "poorkane",
      "name": "Gilbert Kane",
      "portfolio_url": "https://theylooklikeeggsorsomething.com/",
      "bio": "XO",
      "location": "Way out there",
      "total_likes": 5,
      "total_photos": 74,
      "total_collections": 52,
      "instagram_username": "instantgrammer",
      "twitter_username": "crew",
      "profile_image": {
        "small": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=128&w=128"
      },
      "links": {
        "self": "https://api.unsplash.com/users/poorkane",
        "html": "https://unsplash.com/poorkane",
        "photos": "https://api.unsplash.com/users/poorkane/photos",
        "likes": "https://api.unsplash.com/users/poorkane/likes",
        "portfolio": "https://api.unsplash.com/users/poorkane/portfolio"
      }
    },
    "current_user_collections": [ // The *current user's* collections that this photo belongs to.
      {
        "id": 206,
        "title": "Makers: Cat and Ben",
        "published_at": "2016-01-12T18:16:09-05:00",
        "last_collected_at": "2016-06-02T13:10:03-04:00",
        "updated_at": "2016-07-10T11:00:01-05:00",
        "cover_photo": null,
        "user": null
      },
      // ... more collections
    ],
    "urls": {
      "raw": "https://images.unsplash.com/face-springmorning.jpg",
      "full": "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg",
      "regular": "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=1080&fit=max",
      "small": "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=400&fit=max",
      "thumb": "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=200&fit=max"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/LBI7cgq3pbM",
      "html": "https://unsplash.com/photos/LBI7cgq3pbM",
      "download": "https://unsplash.com/photos/LBI7cgq3pbM/download",
      "download_location": "https://api.unsplash.com/photos/LBI7cgq3pbM/download"
    }
  },
  // ... more photos
]
```

## Wireframes

[Wireframe](https://wireframe.cc/eaRIrW)

### MVP/PostMVP

#### MVP 

- Leverage Unsplash API to draw images of art, fashion and photography and render them to the page. 
- Leverage Airtable API to allow users to both create their own profiles and post their own content.
- Be able to toggle through different art collections.
- Similarly, be able to toggle through different user profiles.
- Link each displayed result to its own show page.
- Implement responsive design to make app layout amenable to different devices.

#### PostMVP  

- Implement saving of different users & collections through local storage.
- Implement a recommender system which allows users to click to similar profiles/collections using TensorFlow.js.
- Create a checkout system for user purchases.
- Train model to recommend items that are similar to those in user's cart.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 1-3| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|August 4| Project Approval | Incomplete
|August 4| Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 4| Pseudocode / Actual Code | Incomplete
|August 4| Initial Clickable Model  | Incomplete
|August 5| Responsive Design & Styled Components | Incomplete
|August 5| MVP | Incomplete
|August 6| User Recommendation System & Machine Learning | Incomplete
|August 7| Presentations | Incomplete

## Priority Matrix

[Priority Matrix](https://res.cloudinary.com/dneu3tom4/image/upload/v1596549061/Screen_Shot_2020-08-04_at_9.45.26_AM_j9dsbf.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Building Up HTML | L/M | 4hrs| TBD | TBD |
| Building Up CSS | L/M | 4hrs| TBD | TBD |
| Generating User Profiles & User Portfolios Info with Unsplash API | M/H | 4hrs| TBD | TBD |
| Updating/Creating User Profiles & User Portfolios Info with Airsplash API | H | 4hrs| TBD | TBD |
| Build Search, Filter, Display Capabilities | L | 5hrs | TBD | TBD |
| Creating Individual Show Pages | H | 5hrs| TBD | TBD |
| Implement Local Storage for Favorite Users/Collections | L | 3hrs| TBD | TBD |
| Use TensorFlow.js to Create User Recommendations | L/M | 8hrs| TBD | TBD |
| Total | H | 35hrs| TBD | TBD |

## Code Snippet

```
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
      setInterval(() => { // With Soleil's help, I was able to create a gallery effect where my banner image switches to the following after a certain amount of time.
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
```

## Change Log

I opted to not include a search bar for this iteration of the project, as the demo version of the Unsplash API only allowed me a certain amount of requests per hour. As such, I hard-coded 6 sample profiles and collections and added forms so that a user could create their own.