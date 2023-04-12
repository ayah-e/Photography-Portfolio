import React, { useEffect, useState, useContext}  from "react";
import PhotoList from "./PhotoList";


// In this component we will FETCH the photos from our database/backend
//fetched in Context.js using DataContext
// Render photos to this page
//Eventually filter by a dropdown for each photo TYPE

function PhotoPage() {

    // const [photos, setPhotos] = useState([]);


    // useEffect(() => {
    //     fetch("http://127.0.0.1:5555/photos")
    //       .then((response) => response.json())
    //       .then((photos) => setPhotos(photos));
    //   }, []);
    // console.log(photos); successfully retrieved array of photos

    return(
        <main>
            <PhotoList />
        </main>
    )
}

export default PhotoPage;