import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import Timer from './testComponents/Timer';
import './index.css';
ReactDOM.render(<Timer />, document.getElementById('root'));









=======
import { CssBaseline } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Timer from "./testComponents/Timer"
import Login from "./Admin/login";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./Admin/playModal";
import { useLocation } from "react-router-dom";

function Admin() {
  const [modalOpen, setModalOpen] = useState (false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const Location = useLocation()

  return (
    <>
    <div>
    <Routes location={location} key={location.Backdrop}>

    </Routes>
      {/* This is the modal button for playModal */}
      <motion.button
      whileHover={{scale: 1.1 }}
      whileTap={{scale: 0.9 }}
      className="save-button"
      onClick={()=> (modalOpen ? close(): open())}>
        Launch Modal
      </motion.button>
      
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
      </AnimatePresence>
    </div>
        <CssBaseline />
        <Timer />
        {/* This Start Button is going to be for the timer */}
        <Button>Start</Button>
        <Login />
        {/* where we want to call our components */}
    </>
  );
}

export default Admin;
>>>>>>> 7fce7976da5685bcad66c153b64b703515128b33
