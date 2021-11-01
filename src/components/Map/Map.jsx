import React, { useRef, useEffect, useState } from "react";
import { TaxiForm } from "../TaxiForm/TaxiForm";
import TaxiOrderMsg from "../TaxiOrderMsg/TaxiOrderMsg";
import mapboxgl from "mapbox-gl";
import styles from "./Map.module.css";
import { connect } from "react-redux";
import { buildRoute } from "../../sagas/routeSaga/actions";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWFzdDExNiIsImEiOiJja3VvcW90c28wa2dhMzJydGN0amV4MGVmIn0.FmdS3YF2BlTPeVOu6GBeOA";

const MapComponent = (props) => {
  const [isOrdered, setIsOrdered] = useState(false);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(30.33);
  const [lat, setLat] = useState(59.94);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
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

  const drawRoute = (map, coordinates) => {
    map.flyTo({
      center: coordinates[0],
      zoom: 15,
    });

    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates,
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#ffc617",
        "line-width": 8,
      },
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const { from, to } = event.target;
    props.buildRoute({ from: from.value, to: to.value });
    setIsOrdered(true);
    drawRoute(map.current, props.coordinates.coordinates);
  };

  const newOrderHandler = () => {
    setIsOrdered(false);
    // map.current.removeLayer("route")
  };

  return (
    <>
      {!isOrdered ? (
        <TaxiForm submitHandler={submitHandler} />
      ) : (
        <TaxiOrderMsg newOrderHandler={newOrderHandler} />
      )}
      <div ref={mapContainer} className={styles.mapContainer} />
    </>
  );
};

export const Map = connect(
  (state) => ({
    coordinates: state.route,
  }),
  { buildRoute }
)(MapComponent);
