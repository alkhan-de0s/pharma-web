"use client";

import { GoogleMap, Marker } from "@react-google-maps/api";
import { FC } from "react";
import styles from "./map.module.scss";
interface IMap {
 className?: string
 coordinates? : {lng:number,lat:number}
}

const defaultMapCenter = {
  lat: 40.34425,
  lng: 49.85034,
};
const defaultMapZoom = 15;
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "roadmap",
};

const MapComponent: FC<IMap> = ({className,coordinates}) => {
  return (
    <div className={styles.map}>
      <GoogleMap
        mapContainerClassName={`${styles.mapContainer} ${className}`}
        center={coordinates ?? defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <Marker position={coordinates ??defaultMapCenter}/>

      </GoogleMap>
    </div>
  );
};

export default MapComponent;
