import React, { useContext } from "react";
import PhotoCard from "./PhotoCard";
import { DataContext } from "./Context";

function PhotoList() {
    const { photos, setPhotos } = useContext(DataContext);

    const handleDelete = (id) => {
        setPhotos(photos.filter(photo => photo.id !== id));
    }

    const photoCards = photos.map(photo => (
        <PhotoCard
            key={photo.id}
            id={photo.id}
            cinebloom_10={photo.cinebloom_10}
            description={photo.description}
            film={photo.film}
            image={photo.image}
            location={photo.location}
            type={photo.type}
            onDelete={handleDelete}
        />
    ))

    return (
        <div className="photo-cards">
            {photoCards}
        </div>
    )
}

export default PhotoList;


