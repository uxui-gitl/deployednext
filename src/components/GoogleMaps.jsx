// components/GoogleMap.js
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapComponent = () => {
  // Define the style for the map container
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  // Set the default center location (San Francisco, CA in this case)
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDG18Tve3ll06G12C9fUK6l_0-Mg0NsF8Y" // Replace with your API key
      id="google-map-script" // Add id property to fix the style error
    >
      {/* Initialize the GoogleMap component with specified properties */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13} // Adjust the zoom level as needed
      >
        {/* Add a Marker at the center location */}
        <Marker position={center} />

        {/* You can add more markers or other map components here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
