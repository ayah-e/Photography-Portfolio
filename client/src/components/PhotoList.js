import React, { useEffect, useState, useContext}  from "react";
import PhotoCard from "./PhotoCard";
import {DataContext} from "./Context";

// In this component we will create our photos object/break it down you feel me
// we want to pass down the photos parts as props to PhotoCard after this


function PhotoList() {
// this const is for the photos array that i fetched from Context.js
    const {photos} = useContext(DataContext);


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

