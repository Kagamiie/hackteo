import '../index.css'
import '../styles/weather.css'
import StatParameter from "../components/StatParameter";
import StatChart from '../components/StatChart';
import MapBox from '../components/MapBox';
import type { MapBoxHandle } from '../components/MapBox';
import Parameters from '../components/Parameters';


import { useRef } from "react";

function Weather() {
    const mapBoxRef = useRef<MapBoxHandle>(null);

    const handleUpdate = () => {
        if (mapBoxRef.current) {
            mapBoxRef.current.handleSubmit();
        }
    };

    return (
        <div className="main">
            <div className="left">
                <Parameters clickUpdate={handleUpdate}></Parameters>
                <div className="map">
                    <MapBox ref={mapBoxRef}></MapBox>
                </div>
            </div>
            <div className="right">
                <div className="chart">
                    <StatChart datas={[
                        {name: "Monday", pv: 20},
                        {name: "Tuesday", pv: 100},
                        {name: "Wednesday", pv: 125},
                        {name: "Thursday", pv: 300},
                        {name: "Friday", pv: 50},
                        {name: "Saturday", pv: 300},
                        {name: "Sunday", pv: 400},
                    ]}/>
                </div>
                <div className="parameters">
                    <StatParameter
                    icon="temperature" value="10°" name="Temperature"/>
                    <StatParameter
                    icon="wind" value="10km/h" name="Wind speed"/>
                    <StatParameter
                    icon="rain" value="10%" name="Rain chance"/>
                    <StatParameter
                    icon="humidity" value="19%" name="Humidity"/>
                </div>
            </div>
        </div>
    );
}

export default Weather;