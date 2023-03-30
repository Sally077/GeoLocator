import React, { useState, useEffect } from "react";
import { Button, Grid, Card } from "@material-ui/core";

export default function Timer({ position, counter, setCounter }) {
  const btnstyle = { margin: "10px 0", color: "custom color", align: "center" };
  const cardStyle = { padding: 20, height: 100, width: 220, margin: 20 };
  const cardStyle2 = { padding: 20, height: 100, width: 220 };

  const [isActive, setIsActive] = useState(false);

//   console.log(position);
  useEffect(() => {
    if (counter > 0 && isActive) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  });

  return (
    <Grid container spacing={2}>
      {/* Timer Card */}
      <Grid item xs={6}>
        <Card
          style={{
            position: "absolute",
            top: 10,
            left: 0,
            zIndex: 1,
            height: "160px",
            width: "170px",
            backgroundColor: "grey",
            fontWeight: "800",
            textAlign: "center"
          }}
        >
          <h1>Score</h1>
          <div className="Score">
            <p>{}</p>
          </div>
          {/* <div>Score: {counter}</div> */}
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card
          elevation={10}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1,
            height: "160px",
            width: "170px",
            backgroundColor: "grey",
            fontWeight: "800",
            textAlign: "center",
          }}
        >
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
        </Card>
      </Grid>

      {/* Score Card */}
    </Grid>
  );
}