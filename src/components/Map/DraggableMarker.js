import { useState, useRef } from "react";
import { Marker, Popup } from "react-leaflet";

function DraggableMarker({ position, onMarkerDragEnd }) {
  const markerRef = useRef(null);
  const popupRef = useRef(null);
  const [markerPosition, setMarkerPosition] = useState(position);

  function handleMarkerDragEnd(event) {
    const newMarkerPosition = event.target.getLatLng();
    // console.log("in Draggable - handleMarkerDragEnd: new pos: ",newMarkerPosition);
    setMarkerPosition(newMarkerPosition);
    onMarkerDragEnd(newMarkerPosition);
  }

  function handleClick(event) { // this functionality doesn't work currently!!!
    const newMarkerPosition = event.target.getLatLng();
    // console.log("in Draggable - handleClick: new pos: ",newMarkerPosition);
    setMarkerPosition(newMarkerPosition);
    markerRef.current?.setLatLng(newMarkerPosition);
    onMarkerDragEnd(newMarkerPosition);
  }

  return (
    <Marker
      position={markerPosition}
      draggable={true}
      ref={markerRef}
      eventHandlers={{
        dragend: handleMarkerDragEnd,
        click: handleClick,
      }}
    >
      <Popup ref={popupRef} closeButton={false} autoClose={false}>
        Latitude: {markerPosition.lat.toFixed(6)}, Longitude:{" "}
        {markerPosition.lng.toFixed(6)}
      </Popup>
    </Marker>
  );
}

export default DraggableMarker;
