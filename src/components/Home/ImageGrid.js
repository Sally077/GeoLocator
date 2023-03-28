// import React, { useState } from "react";
// import { Grid, Paper } from "@material-ui/core";
// import { motion } from "framer-motion";
// import { makeStyles } from "@material-ui/core/styles";
// import locations from "../Admin/locations.json";

// const useStyles = makeStyles({
//     container: {
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "center",
//     },
//     paper: {
//       height: 150,
//       width: 150,
//       margin: 10,
//       cursor: "pointer"
//     },
//     halo: {
//       boxShadow: "0 0 0 5px rgba(255, 255, 255, 0.5)",
//       borderRadius: "50%",
//       transform: "scale(1.1)",
//       transition: "all 0.2s ease-in-out"
//     },
//     grayedOut: {
//       filter: "grayscale(1)",
//       opacity: "0.4",
//       pointerEvents: "none"
//     }
//   });
  
//   const ImageGrid = ({ selectedImage, onImageSelect }) => {
//     const [playedImages, setPlayedImages] = useState([]);
  
//     const classes = useStyles();
  
//     const handleImageClick = (id) => {
//       if (!playedImages.includes(id)) {
//         setPlayedImages([...playedImages, id]);
//         onImageSelect(id);
//       }
//     };
  
//     return (
//       <div className={classes.container}>
//         {locations.map((location) => (
//           <Paper
//             key={location.id}
//             className={`${classes.paper} ${
//               playedImages.includes(location.id) ? classes.grayedOut : ""
//             }`}
//             onClick={() => handleImageClick(location.id)}
//           >
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               style={{
//                 backgroundImage: `url(${location.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center"
//               }}
//             >
//               {selectedImage === location.id && (
//                 <motion.div
//                   className={classes.halo}
//                   animate={{ scale: 1.1 }}
//                   transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
//                 />
//               )}
//             </motion.div>
//           </Paper>
//         ))}
//       </div>
//     );
//   };
  

// export default ImageGrid;




import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { Image } from "mui-image";
import locations from '../Admin/locations.json';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  imageContainer: {
    width: '200px',
    height: '200px',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    zIndex: '0'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  paper: {

    height: 150,
    width: 150,
    margin: 10,
    cursor: "pointer",
    zIndex: "0"
  },
  halo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '50%',
    boxShadow: '0 0 10px 3px rgba(255, 255, 255, 0.7)',
    opacity: 0,
    transform: "scale(1.1)",
    transition: "all 0.2s ease-in-out"
  },
  selected: {
    opacity: 1,
  },
  grayedOut: {
    filter: "grayscale(1)",
    opacity: "0.4",
    pointerEvents: "none"
  },
  playButton: {
    width: '100%',
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
}));

const ImageGrid = ({ playedImages, onImageSelect }) => {
  const [hoveredImageId, setHoveredImageId] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const interval = setInterval(() => {
      const unselectedImages = locations.filter(
        (location) => !selectedIds.includes(location.id)
      );
      const randomIndex = Math.floor(Math.random() * unselectedImages.length);
      const selectedImageId = randomIndex;
      onImageSelect(selectedImageId);
      setSelectedIds((prevIds) => [...prevIds, selectedImageId]);
    }, 200);

    return () => clearInterval(interval);
  }, [selectedIds]);

  const handleImageClick = (id) => {
    if (!playedImages.includes(id)) {
      setSelectedIds((prevIds) => [...prevIds, id]);
      onImageSelect(id);
    }
  };

  const handleImageHover = (id) => {
    // Don't simulate hovering if the image has already been played or is currently being hovered
    if (playedImages.includes(id) || id === hoveredImageId) return;

    setHoveredImageId(id);

    // Simulate random hovering
    setTimeout(() => {
      setHoveredImageId(null);
    }, Math.random() * 2000 + 1000);
  };

  const handleImageLeave = () => {
    setHoveredImageId(null);
  };

  // return (
  //   <Grid container spacing={3}>
  //     {locations.map((location) => (
  //       <Grid item key={location.id}>
  //         <motion.div
  //           whileHover={{ scale: 1.1 }}
  //           className={`${classes.paper} ${
  //             playedImages.includes(location.id) ? classes.grayedOut : ""
  //           }`}
  //           onClick={() => handleImageClick(location.id)}
  //           style={{
  //             backgroundImage: `url(${location.image})`,
  //             backgroundSize: "cover",
  //             backgroundPosition: "center"
  //           }}
  //         >
  //           {hoveredImageId === location.id && (
  //             <motion.div
  //               className={classes.halo}
  //               animate={{ scale: 1.1 }}
  //               transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
  //             />
  //           )}
  //         </motion.div>
  //       </Grid>
  //     ))}
  //   </Grid>
  // );


  return (
    <Grid container spacing={2} className={classes.root}>
      {locations.map(({ id, image }) => (
        <Grid item xs={3} key={id}>
                      {/* {console.log(id, image)} */}
          <Paper
            onClick={() => handleImageClick(id)}
            // style={{
            //   position: "relative",
            //   backgroundColor: playedImages.includes(id) ? "grey" : "white"
            // }}
          >
            
            <Image

              src={image}
              alt={`location-${id}`}
              className={classes.imageContainer}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              style={{
                zIndex: "10",
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
            {playedImages.includes(id) && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <span style={{ color: "white" }}>Played</span>
              </div>
            )}
          </Paper>
          <motion.div
            className={`${classes.halo} ${classes.selected}`}
            animate={{ opacity: 1 }}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ImageGrid;