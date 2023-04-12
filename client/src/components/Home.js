import React from "react";
import PhotoPage from './PhotoPage';
import FilmSimsPage from './FilmSimsPage';
import Nav from './Nav';
import ContactPage from './ContactPage';
import AboutMe from './AboutMe';

// instead of fetching all of photos to this page we can use html and css to create a set Home page of specific photos

function Home() {
    return(
        <div>
            <PhotoPage />
            <FilmSimsPage />
            <Nav />
            <AboutMe />
            <ContactPage />

        </div>
    )
}

export default Home;