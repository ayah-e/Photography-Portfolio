import React from "react";
import PhotoCard from "./PhotoCard";

// In this component we will create our photos object/break it down you feel me
// we want to pass down the photos parts as props to PhotoCard after this


function PhotoList({photos}) {
    const photoCards = photos.map((photo)=>{
        return (
            <PhotoCard 
            key = {photo.id}
            cinebloom_10 = {photo.cinebloom_10}
            description = {photo.description}
            film = {photo.film}
            image = {photo.image}
            location = {photo.location}
            type = {photo.type}
            />
        )
    })
    return(
        <div className = "photo-cards">{photoCards}</div>
    )

}

export default PhotoList;