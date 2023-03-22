import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button, Grid } from '@material-ui/core';

function Game() {
  const [score, setScore] = useState(0);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    // Fetch the data for a random country
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setCountry(data[randomIndex]);
      });
  }, []);

  function handleAnswer(answer) {
    if (answer === country.capital) {
      setScore(score + 1);
    }
    // Fetch the data for another random country
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setCountry(data[randomIndex]);
      });
  }

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1>Geoguesser Clone</h1>
          <p>Score: {score}</p>
        </motion.div>
      </Grid>
      <Grid item xs={12}>
        <motion.img
          src={country.flag}
          alt={`${country.name} flag`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleAnswer(country.capital)}
          fullWidth
        >
          {country.capital}
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleAnswer('')}
          fullWidth
        >
          Skip
        </Button>
      </Grid>
    </Grid>
  );
}

export default Game;