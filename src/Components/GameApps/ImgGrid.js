import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImgStore from '../Firebase/ImgStore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
}));

export default function ImgGrid({ setSelectImg }) {
  const classes = useStyles();

  const { img } =  ImgStore('gl-images');
  console.log(img);

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} rowWidth={200} className={classes.imageList} cols={5}>
      { img && img.map(img => (
          <ImageListItem className='imgGrid' key={img.id} cols={img.cols || 1}
          onClick={() => setSelectImg(img.url)}>
            <img id='imgFile' src={img.url} alt='uploaded images' />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
