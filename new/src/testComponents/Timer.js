import { useState, useEffect } from "react";
import { Grid, Card, Button } from "@mui/material";
import { render } from "react-dom";

{
  /*const that returns countDownTimer*/
}
function Timer() {
  const btnstyle = { margin: "10px 0", color: "custom color", align: "center" };
  const cardStyle = { padding: 20, height: 250, width: 220,  };
  const cardStyle2 = { padding: 20, height: 250, width: 220,  };
  const [counter, setCounter] = useState(120);
  const [isActive, setIsActive] = useState(false);
  // const [score, setScore] = useState(0)

  const startTimer = () => {
    setIsActive(true);
  };
  useEffect(() => {
    if (counter > 0 && isActive) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  });

  return (
    <>
      {/* Timer Card */}
      <Grid>
        <Card elevation={10} style={cardStyle}>
          <Grid align="right">
            <h1>Timer</h1>
            <div className="Timer"></div>
            <div>Countdown: {counter}</div>
            <Button
              type="Start"
              style={btnstyle}
              variant="contained"
              color="success"
              onClick={() => setIsActive(true)}
            >
              Start
            </Button>
          </Grid>
        </Card>
      </Grid>

      {/* Score Card */}
      <Grid>
        <Card elevation={10} style={cardStyle2}>
          <Grid align="left">
            <h1>Score</h1>
            <div className="Score"></div>
            {/* <div>Score: {counter}</div> */}
          </Grid>
        </Card>
      </Grid>
    </>
  );
}

export default Timer;
