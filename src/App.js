import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Map from './components/Map';

function App() {
  return (
    <>
        <CssBaseline />
        {/* where we want to call our components */}
        <Map id={8} />
    </>
  );
}

export default App;