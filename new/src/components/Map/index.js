import React, { useState, useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, Polyline, Tooltip } from "react-leaflet";
import L from 'leaflet';
import { Button, ImageList, ImageListItem } from "@mui/material";
import locations from  "../Admin/locations.json";
import DraggableMarker from "./DraggableMarker";
import './style.css';

function Map({ id = 1 }) {
  const [location, setLocation] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [distance, setDistance] = useState(null);
  // const [position, setPosition] = useState({ lat: 0, lng: 0 }); // not using position currently!!!
  const [polyline, setPolyline] = useState(null);
  const [tooltipContent, setTooltipContent] = useState(null);
  const [enableGuess, setEnableGuess] = useState(true);
  // const [markerNumber, setMarkerNumber] = useState(0); // not using markerNumber currently!!!
  //const [midPoint, setMidPoint] = useState({ lat: 0, lng: 0 });// not using markerNumber currently!!!

  const mapRef = useRef(null);

  useEffect(() => {
    const location = locations.find((loc) => loc.id === id);
    setLocation(location);
  }, [id]); 

  useEffect(() => {
    if (isExpanded && mapRef.current) {
       mapRef.current.invalidateSize();
     }
   }, [isExpanded]);

  useEffect(() => {
    if (tooltipContent && mapRef.current) {
      setTooltipContent(tooltipContent);
    }

  }, [tooltipContent, enableGuess]);

  if (!location) {
    return <div>Loading...</div>;
  }

  const handleExpand = () => {
    setIsExpanded(true);
    if (mapRef.current) {
      mapRef.current.invalidateSize();
    }
  };

  // const { name, latitude, longitude, image, iframe } = location;  // not using name and image currently!!!
  const { latitude, longitude, iframe } = location;

  const handleGuess = () => {
    if (!markerPosition) {
      return;
    }
    const guessLatLng = L.latLng(markerPosition);
    const actualLatLng = L.latLng(latitude, longitude);
    const polylinePoints = [actualLatLng, guessLatLng];

    // testing only!!!
    //const {lat, lng} = markerPosition;
    //console.log("markerPosition: ",lat, lng);

    let distance = guessLatLng.distanceTo(actualLatLng);
    distance = distance/1000;
    //console.log(distance.toFixed(2).toString()+" km", guessLatLng, actualLatLng);
    setTooltipContent(distance.toFixed(2).toString()+" km");
    //console.log("tool tip content: ",tooltipContent);
    setDistance(distance);
    // don't need midPoint anymore i think!!!
    //setPosition(markerPosition);
    //setMidPoint(L.latLng(((lat*1) + (latitude*1)) / 2, ((lng*1) + (longitude*1)) / 2));
    //console.log("mid point: ",midPoint);
    //alert(`Your guess was ${distance.toFixed(2)} km away from the actual location.`);
    // Set the tooltip content

    setPolyline(
      <Polyline positions={polylinePoints}>
        <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>{tooltipContent || distance.toFixed(2).toString()+" km"}</Tooltip>
      </Polyline>);
    setEnableGuess(false);
  };

  const handleMarkerDrag = (newPosition) => {
    // setMarkerPosition(e.target.getLatLng());
      setMarkerPosition(newPosition);
      setEnableGuess(false);
  };

  return (
    <div>
      <ImageList cols={1}>
        <ImageListItem style={{ width: "100%", height: "100vh" }}>
          <div dangerouslySetInnerHTML={{ __html: iframe }} />
        </ImageListItem>
      </ImageList>
      <ImageList cols={1}>
        <ImageListItem
          className="scores"
          style={{
            position: "absolute",
            top: 10,
            left: 0,
            zIndex: 1, 
            height: "70px", 
            width: "160px", 
            backgroundColor: "grey"
            
          }}
          >
          <div>
            Scores
          </div>
        </ImageListItem>
      </ImageList>
      <ImageList cols={1}>
        <ImageListItem
          className="timeLeft"
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1, 
            height: "40px", 
            width: "70px", 
            backgroundColor: "grey"
            
          }}
          >
          <div>
            Time left:
          </div>
        </ImageListItem>
      </ImageList>
      <ImageList cols={1}>
        <ImageListItem
          className="map"
          style={{
            position: "absolute",
            opacity: isHovered || isExpanded ? 1 : 0.7,
            bottom: 10,
            right: 10,
            zIndex: 1,
            height: isExpanded ? "300px" : "150px",
            width: isExpanded ? "500px" : "300px",
          }}
          onMouseEnter={handleExpand}
          onMouseLeave={() => {
            setTimeout(() => setIsExpanded(false), 2000);
            setIsHovered(false);
          }}
        >
              <div style={{ position: "relative", height: "100%", width: "100%"}}>
          <MapContainer
            whenCreated={map => mapRef.current = map}
            key={id}
            center={[0, 0]}
            zoom={1}
            style={{ height: "100%", width: "100%", zIndex: 0}}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />

            {markerPosition && (
              <Marker
                draggable={true}
                position={markerPosition}
                eventHandlers={{
                  dragend: handleMarkerDrag
                }}
              >
                <Popup>Where in the World?</Popup>
              </Marker>
            )}
            {enableGuess && <DraggableMarker position={markerPosition} updatePosition={handleMarkerDrag} />}
            {distance && <Marker position={L.latLng(latitude, longitude)} />}
            {markerPosition && <Marker position={L.latLng(markerPosition)} />}
            {polyline}
            {/* {console.log("L.midpoint: ",L.latLng(midPoint))} */}
            <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
                {tooltipContent}
            </Tooltip>
          </MapContainer>
          {markerPosition && (
            <div style={{ position: "absolute", zIndex: 2, bottom: 10, left: 10}}>
                <Button  disabled={enableGuess} color="primary" onClick={handleGuess}>Guess</Button>
            </div>
          )}
        </div>
        </ImageListItem>
      </ImageList>
    </div>
  );
}

export default Map;