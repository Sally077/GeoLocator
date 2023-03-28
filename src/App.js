import React from 'react';
import { CssBaseline, Button } from "@material-ui/core";
import Map from './components/Map';
import Home from './components/Home';
import TestImages from './components/Map/testImages';
//import Timer from "./testComponents/Timer";

function App() {
  return (
    <>
        <CssBaseline />
        {/* where we want to call our components */}
        {/* <Map id={8} /> */}
        {/* <Timer />
        <Button   >Start</Button> */}

        <Home />
        {/* <TestImages /> */}
    </>
  );
}

export default App;