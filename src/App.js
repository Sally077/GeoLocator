import React, { useState } from 'react';
import GLGrid from './components/GLGrid';
// import { Button } from "@material-ui/core";
// import Map from './components/Map';
import Home from './components/Home';
import Header from './components/Home/Header';
import StartBtn from './components/utils/StartBtn';
// import TestImages from './components/Map/testImages';
//import Timer from "./testComponents/Timer";


function App() {


  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  return (
    <>
        {/* <CssBaseline /> */}
        {/* where we want to call our components */}
        {/* <Map id={8} /> */}
        {/* <Timer />
        <Button   >Start</Button> */}
        {/* <Header /> */}
        {/* <Home /> */}
        <GLGrid />
        {/* <TestImages /> */}
    </>
  );
}

export default App;