import React from 'react';
// import ImgStore from '../Firebase/ImgStore';

function PicModal({ selectImg }) {
    return (
        <>
            <div className='modalFrame'>
            <img id='modalImg' src={selectImg} alt='image display' />
            </div>
        </>
    )
}

export default PicModal; 