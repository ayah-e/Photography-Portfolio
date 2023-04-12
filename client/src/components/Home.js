import React from "react";
import PhotoPage from './PhotoPage';

// instead of fetching all of photos to this page we can use html and css to create a set Home page of specific photos

function Home() {
    return(
        <div>
            <PhotoPage />
        </div>
    )
}

export default Home;