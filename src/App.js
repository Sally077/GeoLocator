import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import GLGrid from "./components/GLGrid";

import Home from "./components/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gamepage" element={<GLGrid />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
