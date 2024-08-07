import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; 

        map.current = new mapboxgl.Map({
            container: mapContainer.current, 
            style: "mapbox://styles/mapbox/streets-v11", 
            center: [-1.8522, 53.5850], 
            zoom: 8, 
        });

        const locations = [
            { name: "Manchester", latitude: 53.483959, longitude: -2.244644 },
            { name: "Sheffield", latitude: 53.381129, longitude: -1.470085 },
            { name: "Leeds", latitude: 53.800755, longitude: -1.549077 },
        ];

        locations.forEach((location) => {
            new mapboxgl.Marker()
                .setLngLat([location.longitude, location.latitude])
                .setPopup(new mapboxgl.Popup().setText(location.name))
                .addTo(map.current);
        });
    }, []);

    return (
        <div
            ref={mapContainer}
            style={{ width: "100%", height: "400px", maxWidth: 550 }}
        />
    );
};

export default Map;
