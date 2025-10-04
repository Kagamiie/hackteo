import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/map.css";

function MapClick({ onSelect }) {
  useMapEvents({
    click: (e) => onSelect(e.latlng),
  });
  return null;
}

export default function Map() {
  const [pos, setPos] = useState(null);
  const [location, setLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSubmit = () => {
    if (pos && location && selectedDate) {
      console.log({
        coordinates: pos,
        location,
        date: selectedDate,
      });
      // Ici tu peux faire ton appel API
    }
  };

  return (
    <div className="map-container">
      {pos && (
        <div className="coordinates-display">
          📍 Lat: {pos.lat.toFixed(6)} • Lng: {pos.lng.toFixed(6)}
        </div>
      )}

      <div className="map-wrapper">
        <MapContainer
          center={[48.856, 2.352]}
          zoom={13}
          style={{ height: "600px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapClick onSelect={setPos} />
          {pos && <Marker position={pos} />}
        </MapContainer>
      </div>

      <div className="card">
        <div className="location-card">
          <label>📌 Location Name</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Yosemite National Park"
            className="input-map"
          />
        </div>

        <div className="date-card">
          <label>📅 Target Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="input-map"
          />
        </div>
      </div>

      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={!pos || !location || !selectedDate}
      >
        🚀 Get Weather Forecast
      </button>
    </div>
  );
}
