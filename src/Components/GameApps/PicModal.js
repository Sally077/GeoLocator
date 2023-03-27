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
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ ease: 'easeIn', duration: 1 }}
            >
            <motion.img id='modalImg' src={selectImg} alt='display selection'
             initial={{y: "-100%"}} 
             animate={{y: "0%"}}
             transition={{ ease: 'easeIn', duration: 0.6 }}
            />
            </motion.div>
        </>
    )
}

export default PicModal; 