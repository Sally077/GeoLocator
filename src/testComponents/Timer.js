
import { useState, useEffect } from "react";
import { Grid, Paper,  Button } from "@mui/material";
import { render } from "react-dom";

console.log("Test")


{/*const that returns countDownTimer*/}
function Timer()  {
    const btnstyle = {margin: "8px 0", color: "custom color"}
    const  paperStyle = {padding : 20, height : '20vh', width: 120, margin: "left"}
    const [counter, setCounter] = useState(120);
    const [isActive, setIsActive] =  useState(false)
   

    
    const startTimer = ()=>{
        setIsActive(true)
    }
    useEffect(() => {
        
        if(counter > 0 && isActive){
         setTimeout(() => setCounter(counter - 1),1000);  
        }
    });

    return (
        <>
        
            <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="left">
                <h1>Timer</h1>
                <div className="Timer"></div>
        <div>Countdown: {counter}</div>
            <Button type="Start"  style={btnstyle} onClick={()=> setIsActive(true)}>Start</Button>
            </Grid>
            </Paper>
            </Grid>

            </>

            
    );
}


const rootElement = document.getElementById("root");
render(<Timer />, rootElement);

export default Timer;