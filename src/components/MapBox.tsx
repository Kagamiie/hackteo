import { useState, forwardRef, useImperativeHandle } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import type { LatLng } from "leaflet";


type propsClick = {
  onSelect: (value:LatLng) => void;
}

function MapClick(props: propsClick) {
  useMapEvents({
    click: (e) => props.onSelect(e.latlng),
  });
  return null;
}

export type MapBoxHandle = {
  handleSubmit: () => void;
};

const MapBox = forwardRef<MapBoxHandle>((props, ref) => {
  const [pos, setPos] = useState({ lat: 48.856, lng: 2.352 });
  const [selectedDate, setSelectedDate] = useState("");

  const handleSubmit = () => {
    if (pos && selectedDate) {
      console.log({
        coordinates: pos,
        date: selectedDate,
      });
      alert("TEST");
      localStorage.setItem("paramsLat", String(pos.lat));
      localStorage.setItem("paramsLong", String(pos.lng));
      localStorage.setItem("paramsDate", selectedDate);
      // Ici tu peux faire ton appel API
    }
  };

  useImperativeHandle(ref, () => ({
    handleSubmit,
  }));

  return (
    <MapContainer
      center={[48.856, 2.352]}
      zoom={10}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapClick onSelect={setPos} />
      {pos && <Marker position={pos} />}
    </MapContainer>
  );
});

export default MapBox;