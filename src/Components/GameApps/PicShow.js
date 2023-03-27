import React from 'react';
import ImgStore from '../Firebase/ImgStore';

function PicShow({ setSelectImg }) {

  const { img } =  ImgStore('gl-images');
  console.log(img);

  return (

    <div className='poiDiv'>
        <h1>GeoLocator</h1>
        <h4>Test Your Knowledge</h4>
        <div className='imgDisplay'>
          { img && img.map(img => (
            <div className='imgGrid' key={img.id}
              onClick={() => setSelectImg(img.url)}>
              <img id='imgFile' src={img.url} alt='uploaded images' />
            </div>
          ))}
        </div>
    </div>
  );
}

export default PicShow;