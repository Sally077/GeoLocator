import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";

const TimerWidget = ({ duration, onStop, onReset }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      onStop();
    }
  }, [isRunning, timeLeft, onStop]);

  const handleStart = () => {
    setIsRunning(true);
    controls.start();
  };

  const handleStop = () => {
    setIsRunning(false);
    controls.stop();
    onStop();
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(duration);
    controls.stop();
    onReset();
  };

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

//   const circleVariants = {
//     initial: {
//       strokeDashoffset: circumference,
//       transition: { duration: 0 },
//     },
//     running: {
//       strokeDashoffset: 0,
//       transition: { duration: time },
//     },
//     paused: {
//       strokeDashoffset: progress.current,
//       transition: { duration: 0 },
//     },
//   };


  return (
    <div style={{ display: "flex", alignItems: "center" }}>
{console.log(duration)}
      <motion.div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          backgroundColor: "#3f51b5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 16,
        }}
        animate={controls}
        transition={{ duration: duration }}
      >
        <Typography variant="h3" style={{ color: "white" }}>
          {`${minutes}:${seconds}`}
        </Typography>
      </motion.div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={isRunning ? handleStop : handleStart}
          style={{ marginRight: 16 }}
        >
          {isRunning ? "Stop" : "Start"}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default TimerWidget;
