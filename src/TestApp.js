import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// we can drop the next line if we don't need the flags game anymore!!!
import Game from './testComponents/Game';
import Map from './components/Map';

function TestApp() {
  return (
    <>
      <CssBaseline />

      {/* the id prop is what the home page will pass to Map. for now, to test the locations.json, manually plug in the id!!! */}
      <Map id={4} />
      {/* if you want our 'hello world flags thingy', comment the previous line and uncomment the next line!!! */}
      {/* <Game />   */}
      
    </>
  );
}

export default TestApp;