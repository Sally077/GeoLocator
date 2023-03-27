import React from 'react';
import { motion } from 'framer-motion';
// import ImgStore from '../Firebase/ImgStore';

function PicModal({ selectImg, setSelectImg }) {

    const response = (e) => {
        if (e.target.classList.contains('modalFrame')) {
            setSelectImg(null)
        }
    }

    return (
        <>
            <motion.div className='modalFrame' onClick={response}
            initial={{opacity: 0, background: "rgba(0, 0, 0, 0.5)", y: "-100%"}}
            animate={{opacity: 1, y: "0%"}}
            transition={{ ease: 'easeIn', duration: 1 }}
            >
            <img id='modalImg' src={selectImg} alt='display selection' />
            </motion.div>
        </>
    )
}

export default PicModal; 