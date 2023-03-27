import React from 'react';
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

function LoadButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab variant="extended" 
        // onClick={ setFile }
      > 
        <CloudUploadIcon className={classes.extendedIcon} />
        Upload
      </Fab>
    </div>
  );
}

export default LoadButton; 
