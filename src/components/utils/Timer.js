import React, { useEffect } from "react";
import { Grid, Card } from "@material-ui/core";

export default function Timer({ counter, setCounter }) {
  const btnstyle = { margin: "10px 0", color: "custom color", align: "center" };
  const cardStyle = { padding: 20, height: 100, width: 220, margin: 20 };
  const cardStyle2 = { padding: 20, height: 100, width: 220 };

  const isActive = true; // bring in conditionals if we need to control the timer starting!!!

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
            textAlign: "center",
          }}
        >
          <h2>Score</h2>
          <div className="Score">
            <h2 className="timeScore">{0}</h2>
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
          <h2>Timer</h2>
          <div className="Timer"></div>
          <div>
            <h2 className="timeScore">{counter}</h2>
          </div>
        </Card>
      </Grid>

      {/* Score Card */}
    </Grid>
  );
}
