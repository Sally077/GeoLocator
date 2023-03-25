import React, { useState, useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import { Button, ImageList, ImageListItem } from "@material-ui/core";
import locations from  "../Admin/locations.json";
import DraggableMarker from "./DraggableMarker";
import './style.css';

function Map({ id = 1 }) {
  const [location, setLocation] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [distance, setDistance] = useState(null);
  const [position, setPosition] = useState(null);

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

  if (!location) {
    return <div>Loading...</div>;
  }

  const handleExpand = () => {
    setIsExpanded(true);
    if (mapRef.current) {
      mapRef.current.invalidateSize();
    }
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  const handleGuess = () => {
    const { latitude, longitude } = locations.find((loc) => loc.id === 1);
    const distance = L.latLng(latitude, longitude).distanceTo(markerPosition);
    setDistance(distance);
    setPosition(markerPosition);
    alert(distance);
  };

  const { name, latitude, longitude, image, iframe } = location;
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
          <MapContainer
            whenCreated={map => mapRef.current = map}
            key={id}
            center={[0, 0]}
            zoom={1}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />
            <Marker position={[0, 0]}>
              <Popup>Where in the World?</Popup>
            </Marker>
            <DraggableMarker />
          </MapContainer>
          <div style={{ zIndex: 2, textAlign: "center" }}>
              <Button variant="contained" color="primary" onClick={handleGuess}>Guess</Button>
          </div>
        </ImageListItem>
      </ImageList>
    </div>
  );
}

export default Map;