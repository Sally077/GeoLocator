// import React, { useState } from "react";
// import { Marker, Popup, useMapEvents} from "react-leaflet";

// function DraggableMarker() {
//     const [position, setPosition] = useState(null);
  
//     const handleDragEnd = (event) => {
//       setPosition(event.target.getLatLng());
//     };
  
//     const mapEvents = useMapEvents({
//       click(event) {
//         setPosition(event.latlng);
//       },
//     });
  
//     return (
//       <>
//         {position && (
//           <Marker
//             draggable={true}
//             position={position}
//             onDragend={handleDragEnd}
//           >
//             <Popup>Hey, you can drag me! <br />
//                 Latitude: {position.lat.toFixed(6)}, Longitude: {position.lng.toFixed(6)}
//             </Popup>
//           </Marker>
//         )}
//       </>
//     );
//   }

//   export default DraggableMarker;


//   import React from "react";
// import { Marker } from "react-leaflet";

// function DraggableMarker({ position, onDrag }) {
//   return (
//     <Marker
//       draggable={true}
//       ondrag={(event) => onDrag(event.target.getLatLng())}
//       position={position}
//     ></Marker>
//   );
// }

// export default DraggableMarker;


// import React from "react";
// import { Marker } from "react-leaflet";
// import L from "leaflet";
// import markerIcon from "./marker-icon.png";

// function DraggableMarker({ setMarkerPosition }) {
//   const icon = L.icon({
//     iconUrl: markerIcon,
//     iconSize: [20, 20],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//   });

//   const handleMarkerDrag = (e) => {
//     setMarkerPosition(e.target.getLatLng());
//   };

//   return (
//     <Marker
//       draggable={true}
//       position={[0, 0]}
//       icon={icon}
//       eventHandlers={{
//         dragend: handleMarkerDrag,
//       }}
//     />
//   );
// }

// export default DraggableMarker;


// import React from "react";
// import { Marker } from "react-leaflet";

// function DraggableMarker({ position, onDrag }) {
//   const handleDragEnd = (event) => {
//     onDrag(event.target.getLatLng());
//   };

//   return (
//     <Marker draggable={true} position={position} onDragend={handleDragEnd} />
//   );
// }

// export default DraggableMarker;



import React, { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

function DraggableMarker({position, updatePosition}) {
  // const [position, setPosition] = useState({ lat: 0, lng: 0 });


  const onDragEnd = (e) => {
    updatePosition(e.target.getLatLng());
  };

  const mapEvents=useMapEvents({
    click: e => {
      console.log(e.latlng);
      updatePosition(e.latlng);
    },
  });

console.log("position: ", position);

  return position && position.lat && position.lng ? (
    <Marker
      position={position}
      draggable={true}
      onclick={mapEvents}
      onDragend={onDragEnd}
    >
      <Popup>Hey, you can drag me! <br />
        Latitude: {position.lat.toFixed(6)}, Longitude: {position.lng.toFixed(6)}
      </Popup>
    </Marker>
  ) : null;
}

export default DraggableMarker;