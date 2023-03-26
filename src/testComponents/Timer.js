import React from "react";
import { useState, useEffect } from "react";
import { Grid, Paper,  Button } from "@material-ui/core";
import { render } from "react-dom";

console.log("Test")


{/*const that returns countDownTimer*/}
function Timer()  {
    const btnstyle = {margin: "8px 0", color: "custom color"}
    const  paperStyle = {padding : 20, height : '20vh', width: 120, margin: "left"}
    const [counter, setCounter] = React.useState(120);
   

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1),1000);
    },[counter]);

    

    return (
        <>
        
            <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="left">
                <h1>Timer</h1>
                <div className="Timer"></div>
        <div>Countdown: {counter}</div>
            <Button type="Start" color="custom color" variant="contained" style={btnstyle}>Start</Button>
            </Grid>
            </Paper>
            </Grid>

            </>

            
    );
}


const rootElement = document.getElementById("root");
render(<Timer />, rootElement);

export default Timer;