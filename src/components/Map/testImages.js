import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
// import { ImageListItem } from '@material-ui/core';
import locations from '../Admin/locations.json';
import './style.css';

const ImageGrid = ({ onImageSelect, playedImages}) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);


  // const handlePlayClick = (imageId) => {
  //   // Do something when the button is clicked, like start play
  //   console.log("in handlePlayClick");
  //   setPlayedImages([...playedImages, imageId]);
  //   setButtonClicked(true);
  // };


  useEffect(() => {
    const intervalId = setInterval(() => {
      const availableImages = locations.filter((image) => !playedImages.includes(image.id));
      if (availableImages.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableImages.length);
        setHoveredImage(availableImages[randomIndex]);
        onImageSelect(randomIndex);
        setSelectedIds((prevIds) => [...prevIds, randomIndex]);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [playedImages, onImageSelect]);

  const handleImageClick = (id) => {
    if (!playedImages.includes(id)) {
      setSelectedIds((prevIds) => [...prevIds, id]);
      onImageSelect(id);
    }
  };

  // const onReturn = () => {
  //   setHoveredImage(null);
  //   setButtonClicked(false);
  // };

//   return (
//     // <div className="container">
//       <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
//        <ImageListItem   xs={12}>
//           {showPlayButton && (
//             <motion.div
//               className="play-button-container"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               <PlayButton onClick={handlePlayClick} />
//             </motion.div>
//           )}
//       </ImageListItem>

//       {/* {showPlayButton && <PlayButton onClick={handlePlayClick} />} */}
//       {locations.map((image) => (
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               animate={hoveredImage && hoveredImage.id === image.id ? { scale: 1.1 } : {}}
//             >
//               <ImageListItem  key={image.id} xs={12} sm={6} md={4} lg={3}>
//                   <img
//                       src={`${image.image}?w=164&h=164&fit=crop&auto=format`}
//                       srcSet={`${image.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//                       alt={image.name}
//                       loading="lazy"
//                   />
//                   {/* <img className="gridImages" src={image.image} alt="" /> */}
//               </ImageListItem>
//             </motion.div>
//         ))}
// </ImageList>

//     // </div>
//   );


return (
  <>
    <div className='imgDisplay'>
      {/* <ImageListItem xs={12}>
        <motion.div
          className="play-button-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <PlayButton onClick={handlePlayClick} />
        </motion.div>
      </ImageListItem> */}

      {locations.map((image) => (
        <motion.div className='imgGrid' key={image.id}
          whileHover={{ opacity: 1, scale: 1.05,
          boxShadow: "4px 4px 0 rgba(0, 0, 0, 0.5)" }}
          whileTap={{ opacity: 0.2 }}
          animate={hoveredImage && hoveredImage.id === image.id ? { scale: 1.05 } : {}}
          layout 
          
        >
          {/* <ImageListItem> */}
            <img id='imgFile'
              src={`${image.image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={image.name}
              loading="lazy"
              onClick={() => handleImageClick(image.id)}
            />
          {/* </ImageListItem> */}
        </motion.div>
      ))}
    </div>
    {/* {buttonClicked ? console.log("button click: ",buttonClicked,"id: ", hoveredImage.id ) : null}
    {}
    {buttonClicked && (
      <Map
        selectedImageId={hoveredImage ? hoveredImage.id : null}
        onReturn={onReturn}
      />
    )} */}
  </>
);
};

export default ImageGrid;
