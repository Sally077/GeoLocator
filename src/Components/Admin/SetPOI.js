import React, { useState } from 'react';
import ProgressBar from '../Admin/ProgressBar';

function SetPOI() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
  
  const fileType = ['image/svg', 'image/png', 'image/jpeg'];
  const uploadHandler = (event) => {
    let upload = event.target.files[0];
    console.log("Upload");

    if (upload && fileType.includes(upload.type)) { 
      setFile(upload);
      setError('');
    } else {
      setFile(null);
      setError('Image type not valid, please use - svg, png, or jpeg');
    }
  }

  return (
    <form className='poiDiv'>
        {/* <h1>GeoLocator</h1> */}
        <input type="file" onChange={ uploadHandler }></input>
        <div className='fileSelect'>
          { error && <div className="fileErr">{ error }</div> }
          { file && <div className="fileOK">{ file.name }</div> }
          { file && <ProgressBar file={ file } setFile={ setFile }/> }
        </div>
    </form>
  );
}

export default SetPOI; 