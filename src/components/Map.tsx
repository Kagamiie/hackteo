import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapClick({ onSelect }) {
  useMapEvents({
    click: (e) => onSelect(e.latlng),
  });
  return null;
}

export default function Map() {
  const [pos, setPos] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      {pos && (
        <div>
          Lat: {pos.lat.toFixed(4)}, Lng: {pos.lng.toFixed(4)}
        </div>
      )}
      <MapContainer
        center={[48.856, 2.352]}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapClick onSelect={setPos} />
        {pos && <Marker position={pos} />}
      </MapContainer>
    </div>
  );
}
