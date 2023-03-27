import React, { useState } from 'react';
import ImgStore from '../Firebase/ImgStore';
import { motion } from 'framer-motion';
import Pagination from '@material-ui/lab/Pagination';
import GLPagination from "../Admin/GLPagination";
import { Box } from '@material-ui/core';

function PicShow({ setSelectImg }) {

  const { img } =  ImgStore('gl-images');
  console.log(img);

  const [page, setPage] = useState(1);
  const PageSize = 15;

  const PageCount = Math.ceil(img.length / PageSize);
  const GLDATA = GLPagination(img, PageSize);

  const handleChange = (e, p) => {
    setPage(p);
    GLDATA.jump(p);
  };

  return (

    <Box p="5">
      <Pagination
      count={PageCount}
      size="medium"
      page={page}
      variant="outlined"
      shape="round"
      onChange={handleChange} />

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

    </Box>

  );
}

export default PicShow;