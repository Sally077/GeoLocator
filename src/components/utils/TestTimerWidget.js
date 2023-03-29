import React from "react";
import TimerWidget from "./TimerWidget";

const TestTimerWidget = () => {
  const handleStop = () => {
    console.log("Timer stopped");
  };

  const handleReset = () => {
    console.log("Timer reset");
  };

  return (
    <div>
      <TimerWidget
        duration={60} // in seconds
        onStop={handleStop}
        onReset={handleReset}
      />
    </div>
  );
};

export default TestTimerWidget;
