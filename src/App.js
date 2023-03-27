import React, { useState } from 'react';
import PicShow from './Components/GameApps/PicShow';
import SetPOI from './Components/Admin/SetPOI';
import PicModal from './Components/GameApps/PicModal';
import Header from './Components/GameApps/Header';
// import LoadButtons from './Components/Admin/LoadButton';

function App() {

  const [selectImg, setSelectImg] = useState(null);
  
  return (
    <>
        {/* <CssBaseline /> */}
        <Header />
        <SetPOI />
        {/* <LoadButtons /> */}
        <PicShow setSelectImg={setSelectImg} />
        <PicModal selectImg={selectImg} />
    </>
  );
}

export default App;