import React, { useEffect, useState, createContext } from "react";

// making my context in this separate component
//Context is useful for passing props globally




//// All Photos Fetch
const DataContext = createContext();
/////////////////////////////////////////


const DataProvider = ({ children }) => {
    // setting state for photos
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:5555/photos")
        .then((response) => response.json())
        .then((photos) => setPhotos(photos));
    }, []);
    
    const [portraitMain, setPortraitMain] = useState("");
    const [euphoricMain, setEuphoricMain] = useState("");
    const [dukeFarmsMain, setDukeFarmsMain] =useState("");
    const [egyptMain, setEgyptMain] = useState("");
    const [everydayMain, setEverydayMain] = useState("");
    const [natureMain, setNatureMain] = useState("");
    const [eventMain, setEventMain] = useState("");
    const [gradMain, setGradMain] = useState("");

////// Photo type filter

    useEffect(() => {
        const portraitFiltered = photos.filter((photo) => photo.type ==="Portrait");
        setPortraitMain(portraitFiltered);
        const euphoricFiltered = photos.filter((photo) => photo.type === "Euphoric");
        setEuphoricMain(euphoricFiltered);
        const dukeFarmsFiltered = photos.filter((photo) => photo.type === "Duke Farms");
        setDukeFarmsMain(dukeFarmsFiltered);
        const egyptFiltered = photos.filter((photo) => photo.type === "Egypt");
        setEgyptMain(egyptFiltered);
        const everydayFiltered = photos.filter((photo) => photo.type === "Everyday");
        setEverydayMain(everydayFiltered);
        const natureFiltered = photos.filter((photo) => photo.type === "Nature");
        setNatureMain(natureFiltered);
        const eventFiltered = photos.filter((photo) => photo.type === "Event");
        setEventMain(eventFiltered);
        const gradFiltered = photos.filter((photo) => photo.type === "Graduation");
        setGradMain(gradFiltered);
        
    }, [photos]);



    return (
        <DataContext.Provider
            value={{
                photos,
                setPhotos,
                portraitMain,
                setPortraitMain,
                euphoricMain,
                setEuphoricMain,
                dukeFarmsMain,
                setDukeFarmsMain,
                egyptMain,
                setEgyptMain,
                everydayMain,
                setEverydayMain,
                natureMain,
                setNatureMain,
                eventMain,
                setEventMain,
                gradMain,
                setGradMain
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };