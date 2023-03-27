import React from 'react';
import ImgStore from '../Firebase/ImgStore';
import { motion } from 'framer-motion';

function PicShow({ setSelectImg }) {

  const { img } =  ImgStore('gl-images');
  console.log(img);

  return (

    <div className='imgDisplay'>
      { img && img.map(img => (
        <motion.div className='imgGrid' key={img.id}
            whileHover={{ opacity: 1, scale: 1.04, boxShadow: "4px 4px 0 rgba(0, 0, 0, 0.5)" }}
            whileTap={{ opacity: 0.2 }}
          onClick={() => setSelectImg(img.url)}>
          <img id='imgFile' src={img.url} alt='uploaded images' />
        </motion.div>
      ))}
    </div>

  );
}

export default PicShow;