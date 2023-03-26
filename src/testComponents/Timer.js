import React from "react";
import { useState, useEffect } from "react";

console.log("Test")

{/*const that returns countDownTimer*/}
const Timer = () => {
    const [minutes, setMinutes]=useState(0);
    const [seconds, setSeconds]=useState(0);
{/*setting a constant for deadline*/}
    const deadline = Date.now;


    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
{/*dividing minutes into seconds*/}
        setMinutes(Math.floor((time /1000 / 60) % 60));
        setSeconds(Math.floor((time /1000) % 60));

    };
{/*useEffect to set the interval time and clear the interval time*/}
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline),1000);
        return () => clearInterval(interval);

    }, []);
    

    return (
        <div className="timer">
            <div className="Container">
            <div className="timer_Container">
                <h1>Timer</h1>

            
            <span>minutes</span>
            <span>seconds</span>
            <button className="start">Start</button>
        </div>
        </div>
        </div>

    );
}

export default Timer;