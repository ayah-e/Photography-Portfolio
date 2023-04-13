import React, { useState, useContext } from "react";
import {Link} from "react-router-dom";
import { DataContext } from "./Context"
import "./Portfolio.css"

function Portfolio() {
// photos are filtered by type in Context.js

    const {
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
    } = useContext(DataContext);

console.log(portraitMain)

    const [currentView, setCurrentView] = useState(photos);
    const [listView, setListView] = useState(false);

    function renderView(e) {
        setListView(!true)
        const filterType = e.target.alt
        const filteredPhotos = photos.filter((photo) => photo.type === filterType)
        filteredPhotos.map((photo) => {
            return (
                <div key={photo.id}>
                    <img src={photo.url} alt={photo.alt} />
                </div>
            )
        })
    }


    

    return(
        listView ?      
        (
            <div>{()=>renderView()}</div> //////////////////////////
        )
        :
                (
                <div className="portfolio-choice-container"> {/* image once clicked will reload page with filtered photos of all portrait type images */}
                        <div>
                            <img src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" className = "portfolio-choice"  alt="Portrait" />
                        </div>
                        <div>
                            <img className = "portfolio-choice" src = "https://i.imgur.com/L2we1qL.jpg" alt = "Euphoric" />
                        </div>
                        <div>
                            <img className = "portfolio-choice" src = "https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" alt = "Duke Farms"/>
                        </div>
                        <div>
                            <img className = "portfolio-choice" src = "https://i.imgur.com/WrSlOSx.jpg" alt = "Egypt" />
                        </div>
                        <div>
                            <img className = "portfolio-choice" src = "https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" alt = "Event" />
                        </div>
                        <div>
                            <img className = "portfolio-choice" src = "https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" alt = "Grad" />
                        </div>
                        <div>
                            <img className = "portfolio-choice" src = "https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" alt = "Everyday" />
                        </div>
                        <div>
                            <img className = "portfolio-choice" src = "https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" alt = "Nature" />
                        </div>

                    </div>
                )

                
////
    )
}

export default Portfolio;