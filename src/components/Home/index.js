import React from 'react';
import '../Home/home.css'
import StartBtn from '../utils/StartBtn';

function Home() {



  return (

    <div className='homeDiv'>
        {/* <h1>Geolocator</h1> */}
        <h4>"Your World, Your Location!"</h4>
        <h5>Test Your Knowledge</h5>
        <p>Welcome to the latest exciting game in town. Let's see how easily you can find the location of the POI selected by the computer on the map before you. Put a marker anywhere on the world map where you think the place is. Your marker needs to be no further than 1km away from the exact location. Take advantage of the google street view to give yourself some clues, but remember you only have 5 seconds after you click the 'Play' button. Press start when you are ready.</p>

        <StartBtn ></StartBtn>

    </div>
    
  );
}


export default Home;