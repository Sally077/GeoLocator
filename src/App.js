import React, { useState } from 'react';
import PicShow from './Components/GameApps/PicShow';
import SetPOI from './Components/Admin/SetPOI';
import PicModal from './Components/GameApps/PicModal';

function App() {

  const [selectImg, setSelectImg] = useState(null);
  
  return (
    <>
        {/* <CssBaseline /> */}
        <SetPOI />
        <PicShow setSelectImg={setSelectImg} />
        <PicModal selectImg={selectImg} />
    </>
  );
}

export default App;