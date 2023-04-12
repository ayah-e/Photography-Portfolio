import React from "react";
// add a handleDelete in this component that can only be seen if I am logged in
// make it a conditional so that if username is (my username) then i can see the delete and post options

function PhotoCard({cinebloom_10, description, film, image, location, type}) {
    return(
        <div>
            <img src = {image} alt = {description}/>
            <p>{description} </p>
        </div>
    )
}

export default PhotoCard;