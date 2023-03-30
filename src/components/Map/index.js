import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
  Tooltip,
} from "react-leaflet";
import L from "leaflet";
import { ImageList, ImageListItem } from "@material-ui/core";
import locations from "../Admin/locations.json";
import DraggableMarker from "./DraggableMarker";
import "./style.css";
import HomeBtn from "../utils/HomeBtn";
import GuessBtn from "../utils/GuessBtn";
import RestartBtn from "../utils/RestartBtn";
import { Link } from "react-router-dom";

function Map({ id = 1, onReturn }) {
  const [location, setLocation] = useState(null);
  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [distance, setDistance] = useState(null);
  const [polyline, setPolyline] = useState(null);
  const [tooltipContent, setTooltipContent] = useState(null);
  const [enableGuess, setEnableGuess] = useState(true);
  const [timerId, setTimerId] = useState(null);

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
    clearTimeout(timerId);
    if (mapRef.current) {
      mapRef.current.invalidateSize();
    }
  };

  const handleCollapse = () => {
    const id = setTimeout(() => {
      setIsExpanded(false);
    }, 2000);
    setIsHovered(false);
    setTimerId(id);
  };

  const { latitude, longitude, iframe } = location;

  const handleGuess = () => {
    if (!markerPosition) {
      return;
    }
    const guessLatLng = L.latLng(markerPosition);
    const actualLatLng = L.latLng(latitude, longitude);
    const polylinePoints = [actualLatLng, guessLatLng];

    let distance = guessLatLng.distanceTo(actualLatLng);
    distance = distance / 1000;
    //console.log(distance.toFixed(2).toString()+" km", guessLatLng, actualLatLng);
    setTooltipContent(distance.toFixed(2).toString() + " km");
    //console.log("tool tip content: ",tooltipContent);
    setDistance(distance);

    setPolyline(
      <Polyline positions={polylinePoints}>
        <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
          {tooltipContent || distance.toFixed(2).toString() + " km"}
        </Tooltip>
      </Polyline>
    );
    setEnableGuess(false);
  };

  const handleMarkerDragEnd = (newPosition) => {
    // console.log("in Map - handleMarkerDrag: new pos: ",newPosition);
    setMarkerPosition(newPosition);
  };

  const handleReturn = () => {
    onReturn();
  };

  return (
    <div>
      <ImageList cols={1}>
        <span id="hideTxt">
          <h3> &#160; Look around to find some clues...</h3>
        </span>
        <span id="hideBox"></span>
        <ImageListItem style={{ width: "100%", height: "100vh" }}>
          <div dangerouslySetInnerHTML={{ __html: iframe }} />
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
            height: isExpanded ? "370px" : "150px",
            width: isExpanded ? "570px" : "300px",
          }}
          onMouseEnter={handleExpand}
          onMouseLeave={handleCollapse}
        >
          <div style={{ position: "absolute", height: "100%", width: "100%" }}>
            <MapContainer
              whenCreated={(map) => (mapRef.current = map)} // the older version of leaflet requires this!!!
              // ref={mapRef} // the newer version of leaflet requires this!!!
              key={id}
              center={[0, 0]}
              zoom={1}
              style={{ height: "100%", width: "100%", zIndex: 0 }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" //the original map
                attribution="© OpenStreetMap contributors"
                // url='https://osmap.{s}.tile.mapcdn.net/en/map/v1/{z}/{x}/{y}.png'
                // url='https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=0c1f0a61d42d46788d42a16b9c742b37'
                // attribution="© OpenStreetMap contributors"

                //   url='https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=d6635ac111msh992f1915364a87ep116fffjsne5b314922727'
                //   attribution='Tiles &copy: <a href="https://www.maptilesapi.com/">MapTiles API</a>, Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              <DraggableMarker
                position={markerPosition}
                onMarkerDragEnd={handleMarkerDragEnd}
              />
              {distance && <Marker position={L.latLng(latitude, longitude)} />}
              {/* {markerPosition && 
              <Marker position={markerPosition}           
                       draggable={true}
                       onDragend={handleGuess} 
              />} */}
              {polyline}
              {/* {console.log("L.midpoint: ",L.latLng(midPoint))} */}
              <Tooltip
                direction="bottom"
                offset={[0, 20]}
                opacity={1}
                permanent
              >
                {tooltipContent}
              </Tooltip>
            </MapContainer>
            {markerPosition && (
              <div
                style={{
                  position: "absolute",
                  zIndex: 2,
                  bottom: 10,
                  left: 10,
                }}
              >
                <GuessBtn
                  variant="contained"
                  disabled={!enableGuess}
                  color="primary"
                  onClick={handleGuess}
                >
                  Guess
                </GuessBtn>
              </div>
            )}
          </div>
        </ImageListItem>
      </ImageList>
      <ImageList colls="1">
        <div id="mapButtons">
          <Link to="/">
            <HomeBtn></HomeBtn>
          </Link>
          <RestartBtn onClick={handleReturn}></RestartBtn>
        </div>
      </ImageList>
    </div>
  );
}

export default Map;
