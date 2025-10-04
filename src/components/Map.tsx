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

async function fetchGeocoding(value:string) { // NetworkError à débugger.
  const variable = value.toString()
  const geocode = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${variable}&count=1&language=en&format=json`, {mode: 'cors', headers: {'Access-Control-Allow-Origin':'*'}})
  console.log(geocode)
  const geoname = geocode.results.name
  return geoname
}


export default function Map() {
  const [pos, setPos] = useState({ lat: 48.856, lng: 2.352 });
  const [selectedDate, setSelectedDate] = useState("");

  const handleSubmit = () => {
    if (pos && selectedDate) {
      console.log({
        coordinates: pos,
        date: selectedDate,
      });
      alert("TEST");
      localStorage.setItem("paramsLat", pos[0])
      localStorage.setItem("paramsLong", pos[1])
      localStorage.setItem("paramsDate", selectedDate)


      // Ici tu peux faire ton appel API
    }
  };

  return (
    <div className="map-container">
      {pos && (
        <div className="coordinates-display">
          📍 Lat: {pos.lat.toFixed(3)} • Lng: {pos.lng.toFixed(3)}
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
            value={pos} // https://developers.google.com/maps/documentation/geocoding/?csw=1#ReverseGeocoding
            placeholder="lat: 48.856, lng: 2.352"
            className="input-map"
          />
        </div>

        <div className="geocoding-card">
          <label>Geocoding</label>
          <input
            type="text"
            value={"d"}
            onChange={e => fetchGeocoding(e)}
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
        disabled={!pos || !selectedDate}
      >
        🚀 Get Weather Forecast
      </button>
    </div>
  );
}
