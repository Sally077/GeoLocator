import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// remember to drop the next line and uncomment the previous line when the right code is available!!!
import Timer from './testComponents/Timer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />    The main call to kick things off - remember to uncomment it!!! */}
    {/*  And remember to take drop the next line!!! */}
    <Timer />
  </React.StrictMode>
);