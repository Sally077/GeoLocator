import React, { useState } from 'react';
import ProgressBar from '../Admin/ProgressBar';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


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

  const classes = useStyles();

  return (
    <form className={classes.root}>
        {/* <h1>GeoLocator</h1> */}
        <Fab id='uploadBtn' variant="extended">
        <CloudUploadIcon className={classes.extendedIcon} />
        Upload
        </Fab>
        <input type="file" id='getFile' onChange={ uploadHandler }></input>
        <div className='fileSelect'>
          { error && <div className="fileErr">{ error }</div> }
          { file && <div className="fileOK">{ file.name }</div> }
          { file && <ProgressBar file={ file } setFile={ setFile }/> }
        </div>
    </form>
  );
}

export default SetPOI; 