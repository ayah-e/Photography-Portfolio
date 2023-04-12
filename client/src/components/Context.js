import React, { useEffect, useState, createContext } from "react";

// making my context in this separate component
//Context is useful for passing props globally

const DataContext = createContext();

const DataProvider = ({ children }) => {
    // setting state for photos
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:5555/photos")
          .then((response) => response.json())
          .then((photos) => setPhotos(photos));
      }, []);

    return (
        <DataContext.Provider
            value={{
                photos
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };