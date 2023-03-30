import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import locations from "../Admin/locations.json";
import "./style.css";

const ImageGrid = ({ onImageSelect, playedImages }) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const availableImages = locations.filter(
        (image) => !playedImages.includes(image.id)
      );
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

  return (
    <>
      <div className="imgDisplay">
        {locations.map((image) => (
          <motion.div
            className="imgGrid"
            key={image.id}
            whileHover={{
              opacity: 1,
              scale: 1.05,
              boxShadow: "4px 4px 0 rgba(0, 0, 0, 0.5)",
            }}
            whileTap={{ opacity: 0.2 }}
            animate={
              hoveredImage && hoveredImage.id === image.id
                ? { scale: 1.05 }
                : {}
            }
            layout
          >
            {/* <ImageListItem> */}
            <img
              id="imgFile"
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
    </>
  );
};

export default ImageGrid;
