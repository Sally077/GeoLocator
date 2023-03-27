import React from 'react';
import ImgStore from '../Firebase/ImgStore';

function PicShow() {

  const { img } =  ImgStore('gl-images');
  console.log(img);

  return (

    <div className='poiDiv'>
        <h1>GeoLocator</h1>
        <h4>Test Your Knowledge</h4>
        <div className='imgDisplay'>
          { img && img.map(img => (
            <div className='imgGrid' key={img.id}>
              <img id='imgFile' src={img.url} alt='uploaded images' />
            </div>
          ))}
        </div>
    </div>
  );
}

export default PicShow;