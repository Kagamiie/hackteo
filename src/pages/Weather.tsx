import '../index.css'
import '../styles/weather.css'
import StatParameter from "../components/StatParameter";
import StatChart from '../components/StatChart';
import MapBox from '../components/MapBox';
import Parameters from '../components/Parameters';


function Weather() {




    return (
        <div className="main">
            <div className="left">
                <Parameters></Parameters>
                <div className="map">
                    <MapBox></MapBox>
                </div>
            </div>
            <div className="right">
                <div className="chart">
                    <StatChart datas={[
                        {name: "Monday", pv: 500},
                        {name: "Tuesday", pv: 100},
                        {name: "Wednesday", pv: 125},
                        {name: "Thursday", pv: 400},
                        {name: "Friday", pv: 500},
                        {name: "Saturday", pv: 450},
                        {name: "Sunday", pv: 500},
                    ]}/>
                </div>
                <div className="parameters">
                    <StatParameter icon="temperature" value="10°" name="Temperature"></StatParameter>
                    <StatParameter icon="wind" value="10km/h" name="Wind speed"></StatParameter>
                    <StatParameter icon="rain" value="10%" name="Rain chance"></StatParameter>
                    <StatParameter icon="humidity" value="19%" name="Humidity"></StatParameter>
                </div>
            </div>
        </div>
        
    )
}

export default Weather;