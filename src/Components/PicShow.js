import React from 'react';
import ImgStore from './Firebase/ImgStore';

function PicShow() {

  const { img } =  ImgStore('gl-images');
  console.log(img);

  return (

    <div className='poiDiv'>
        <h1>GeoLocator</h1>
        <h4>Test Your Knowledge</h4>
        <div className='imgDisplay'>

        </div>
    </div>
  );
}

export default PicShow;