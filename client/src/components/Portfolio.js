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

  } = useContext(DataContext);

  console.log(portraitMain);


  const [currentView, setCurrentView] = useState(photos);
  const [listView, setListView] = useState(false);
  const [filterType, setFilterType] = useState(null);
  

  function filteredView(e) {
    const filterType = e.target.alt;
    const filteredPhotos = photos.filter((photo) => photo.type === filterType);
    console.log(filteredPhotos);
    // this did return an array of photos but its not rendering
    setFilterType(filterType);
    setCurrentView(filteredPhotos);
    setListView(true);
  }


  return listView ? (

    // <div class="bg-fixed ..." style={{backgroundImage: `url("https://i.imgur.com/pR9lfSs.jpeg")`}}>
    <div
    className="bg-fixed ..."
    style={{
      backgroundImage: (() => {
        switch (filterType) {
          case "Portrait":
            return `url("https://image-url-for-filter1.jpg")`;
          case "Euphoric":
            return `url("https://i.imgur.com/xhqdDvH.jpg")`;
          case "Egypt":
            return `url("https://image-url-for-filter3.jpg")`;
          case "Duke Farms":
            return `url("https://i.imgur.com/pR9lfSs.jpeg")`;
          case "Nature":
            return `url("https://i.imgur.com/kK2Ki8x.jpeg")`;
          case "Everyday":
            return `url("https://image-url-for-filter3.jpg")`;
          case "Event":
            return `url("https://image-url-for-filter3.jpg")`;
          case "Grad":
            return `url("https://image-url-for-filter3.jpg")`;
        }
      })(),
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "calc(100vh - 80px)", // adjust the height as needed
    }}
  >
    <div className = "filtered-pics-container">
      {currentView.map((photo) => (
        <div key={photo.id}>
          <img src={photo.image} alt={photo.alt} className= "filtered-pics" />
        </div>
      ))}
    </div>
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
