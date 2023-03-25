import React, { useState } from "react";
import { Marker, Popup, useMapEvents} from "react-leaflet";

function DraggableMarker() {
    const [position, setPosition] = useState(null);
  
    const handleDragEnd = (event) => {
      setPosition(event.target.getLatLng());
    };
  
    const mapEvents = useMapEvents({
      click(event) {
        setPosition(event.latlng);
      },
    });
  
    return (
      <>
        {position && (
          <Marker
            draggable={true}
            position={position}
            onDragend={handleDragEnd}
          >
            <Popup>Hey, you can drag me! <br />
                Latitude: {position.lat.toFixed(6)}, Longitude: {position.lng.toFixed(6)}
            </Popup>
          </Marker>
        )}
      </>
    );
  }

  export default DraggableMarker;