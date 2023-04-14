import React from "react";
import "./PhotoPage.css"

function PhotoCard({id, cinebloom_10, description, film, image, location, type, onDelete}) {
    
    const handleDelete = () => {
        fetch(`http://localhost:5555/photos/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete photo');
            }
            onDelete(id);
        })
        .catch(error => console.log(error));
    }

    return(
        <div className="photo">
            <img src={image} alt={description} />
            <p>{description}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default PhotoCard;
