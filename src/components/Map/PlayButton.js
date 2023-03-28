import React from 'react';
import { motion } from 'framer-motion';
import { IconButton } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const PlayButton = ({ onClick }) => {
  return (
    <motion.div
      className="play-button"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="play-button-border">
        <IconButton onClick={onClick} className="play-button-icon">
          <PlayCircleOutlineIcon className="play-button-icon-inner" />
        </IconButton>
      </div>
    </motion.div>
  );
};

export default PlayButton;
