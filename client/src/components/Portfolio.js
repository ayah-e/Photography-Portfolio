import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./Context";
import "./Portfolio.css";

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
    setGradMain,
  } = useContext(DataContext);

  console.log(portraitMain);

  // const [currentView, setCurrentView] = useState(photos);
  // const [listView, setListView] = useState(false);

  // // this function should render the photos by type category when one of the 8 images is clicked
  // function filteredView(e) {
  //     setListView(!true)
  //     const filterType = "Portrait"
  //     const filteredPhotos = photos.filter((photo) => photo.type === filterType)
  //     filteredPhotos.map((photo) => {
  //         return (
  //             <div key={photo.id}>
  //                 <img src={photo.url} alt={photo.alt} />
  //             </div>
  //         )
  //     })
  // }

  const [currentView, setCurrentView] = useState(photos);
  const [listView, setListView] = useState(false);

  function filteredView(e) {
    const filterType = e.target.alt;
    const filteredPhotos = photos.filter((photo) => photo.type === filterType);
    console.log(filteredPhotos);
    // this did return an array of photos but its not rendering
    setCurrentView(filteredPhotos);
    setListView(true);
  }

  return listView ? (
    // (
    //     <div>{()=>filteredView()}</div> //////////////////////////
    // )
    <div>
      {currentView.map((photo) => (
        <div key={photo.id} className = "portfolio-choice">
          <img src={photo.image} alt={photo.alt} />
        </div>
      ))}
    </div>
  ) : (
    <div className="portfolio-choice-container">
      {" "}
      {/* image once clicked will reload page with filtered photos of all portrait type images */}
      <div>
        <img
          src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png"
          className="portfolio-choice"
          alt="Portrait"
          onClick={filteredView}
        />
      </div>
      <div>
        <img
          className="portfolio-choice"
          src="https://i.imgur.com/L2we1qL.jpg"
          alt="Euphoric"
          onClick={filteredView}
        />
      </div>
      <div>
        <img
          className="portfolio-choice"
          src="https://i.imgur.com/pR9lfSs.jpeg"
          alt="Duke Farms"
          onClick={filteredView}
        />
      </div>
      <div>
        <img
          className="portfolio-choice"
          src="https://i.imgur.com/WrSlOSx.jpg"
          alt="Egypt"
          onClick={filteredView}
        />
      </div>
      <div>
        <img
          className="portfolio-choice"
          src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png"
          alt="Event"
          onClick={filteredView}
        />
      </div>
      <div>
        <img
          className="portfolio-choice"
          src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png"
          alt="Grad"
          onClick={filteredView}
        />
      </div>
      <div>
        <img
          className="portfolio-choice"
          src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png"
          alt="Everyday"
          onClick={filteredView}
        />
      </div>
      <div>
        <img
          className="portfolio-choice"
          src="https://i.imgur.com/0SeSPpO.jpeg"
          alt="Nature"
          onClick={filteredView}
        />
      </div>
    </div>
  );
}

export default Portfolio;
