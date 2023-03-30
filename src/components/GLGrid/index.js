import React, { useState } from "react";
import locations from "../Admin/locations.json";
import ImageGrid from "../Map/GLImages";
import Map from "../Map";
import PlayBtn from "../utils/PlayBtn";
import Header from "../Home/Header";
import Timer from "../utils/Timer";
import { Link } from "react-router-dom";
import HomeBtn from "../utils/HomeBtn";

function GLGrid() {
  const [playedImages, setPlayedImages] = useState([]);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [counter, setCounter] = useState(100);

  const handlePlayButtonClick = () => {
    // Select a random image that hasn't been played yet
    const unplayedImages = locations.filter(
      (location) => !playedImages.includes(location.id)
    );
    const randomIndex = Math.floor(Math.random() * unplayedImages.length);
    const selectedImage = unplayedImages[randomIndex];

    // Start the timer to simulate hover effect
    // setTimeout(() => {
    setSelectedImageId(selectedImage.id);
    // }, 200);
  };

  const handleMapReturn = (id) => {
    setPlayedImages([...playedImages, id]);

    // Start the timer to simulate hover effect
    // setTimeout(() => {
    setSelectedImageId(null);
    // }, 200);
  };

  return (
    <>
      <Header />
      {selectedImageId ? (
        <>
          <Timer counter={counter} setCounter={setCounter} />
          <Map id={selectedImageId} onReturn={handleMapReturn} />
        </>
      ) : (
        <>
          <div id="gridBtns">
            <PlayBtn onClick={handlePlayButtonClick}></PlayBtn>
            <Link to="/">
              <HomeBtn></HomeBtn>
            </Link>
          </div>

          <ImageGrid
            onImageSelect={handleMapReturn}
            playedImages={playedImages}
          />
        </>
      )}
    </>
  );
}

export default GLGrid;
