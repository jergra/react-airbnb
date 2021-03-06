import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useEffect } from "react";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((result) => {
    return {
      longitude: result.long,
      latitude: result.lat,
    };
  });
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });
  useEffect(() => {
    console.clear();
    console.log(center);
  }, [center]);
  return (
    <ReactMapGL
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/jergra43/ckvbiuzcgcjnx14o3dwn1ewk7"
      mapboxApiAccessToken={process.env.mapbox_key}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      {...viewport}
    >
      {searchResults.map((result, index) => {
        return (
          <div key={`marker-${index}`}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                role="img"
                onClick={() => setSelectedLocation(result)}
                className="text-2xl cursor-pointer animate-bounce"
                aria-label="push-pin"
              >
                📌
              </p>
            </Marker>
            {/* popup show when click */}
            {selectedLocation.long === result.long ? (
              <Popup
                closeOnClick={true}
                onClose={() => setSelectedLocation({})}
                latitude={result.lat}
                longitude={result.long}
                className="z-50"
              >
                {result.title}
              </Popup>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </ReactMapGL>
  );
}

export default Map;