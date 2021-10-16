import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import styles from "./Map.module.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWFzdDExNiIsImEiOiJja3VvcW90c28wa2dhMzJydGN0amV4MGVmIn0.FmdS3YF2BlTPeVOu6GBeOA";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-79.38);
  const [lat, setLat] = useState(43.69);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <>
      <div
        ref={mapContainer}
        className={styles.mapContainer}
      />
    </>
  );
};

export default Map;
