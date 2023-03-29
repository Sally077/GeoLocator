<<<<<<< HEAD
<ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>Home</Button>
  <Button>Game</Button>
  <Button>Score</Button>
</ButtonGroup>
=======
// import React, { useState } from "react";
// import { Grid, Button } from "@material-ui/core";
// import { motion } from "framer-motion";
// import locations from "../Admin/locations.json";
// import ImageGrid from "./ImageGrid";
// import Map from "../Map";

// function App() {
//   const [playedImages, setPlayedImages] = useState([]);

//   const [selectedImageId, setSelectedImageId] = useState(null);

//   const handlePlayButtonClick = () => {
//     // Select a random image that hasn't been played yet
//     const unplayedImages = locations.filter(
//       (location) => !playedImages.includes(location.id)
//     );
//     const randomIndex = Math.floor(Math.random() * unplayedImages.length);
//     const selectedImage = unplayedImages[randomIndex];

//     // Start the timer to simulate hover effect
//     setTimeout(() => {
//       setSelectedImageId(selectedImage.id);
//     }, 200);
//   };

//   const handleMapReturn = (id) => {
//     setPlayedImages([...playedImages, id]);

//     // Start the timer to simulate hover effect
//     setTimeout(() => {
//       setSelectedImageId(null);
//     }, 200);
//   };

//   return (
//     <>
//       {selectedImageId ? (
//         <Map id={selectedImageId} onReturn={handleMapReturn} />
//       ) : (
//         <>
//           <Button variant="contained" color="primary" onClick={handlePlayButtonClick}>
//             Play
//           </Button>
//           <ImageGrid locations={locations} playedImages={playedImages} />
//         </>
//       )}
//     </>
//   );
// }

// export default App;



import React, { useState } from "react";
import { Button } from "@material-ui/core";
// import { motion } from "framer-motion";
import locations from "../Admin/locations.json";
import ImageGrid from "../Map/testImages";
import Map from "../Map";

function App() {
  const [playedImages, setPlayedImages] = useState([]);

  const [selectedImageId, setSelectedImageId] = useState(null);

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
      {selectedImageId ? (
        <Map id={selectedImageId} onReturn={handleMapReturn} />
      ) : (
        <>
          <Button variant="contained" z-index="10" backgroundcolor="white" color="primary" onClick={handlePlayButtonClick}>
            Play
          </Button>
          <ImageGrid onImageSelect={handleMapReturn} playedImages={playedImages} />
        </>
      )}
    </>
  );
}

export default App;
>>>>>>> 7fce7976da5685bcad66c153b64b703515128b33
