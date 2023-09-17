import React, { useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";

const MapComponent = () => {
  useEffect(() => {
    // Set your MapTiler API key
    maptilersdk.config.apiKey = "Q92fLjVYkAgs099ECxNM";

    // Create a new map instance
    const map = new maptilersdk.Map({
      container: "map", // ID of the HTML element where you want to render the map
      style: maptilersdk.MapStyle.STREETS, // Choose a map style
      center: [77.367783, 28.628151], // Starting position [lng, lat]
      zoom: 12, // Initial zoom level
    });

    // Optionally, add additional map configuration and interactions here

    return () => {
      // Clean up any resources when the component unmounts
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default MapComponent;
