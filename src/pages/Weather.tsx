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
                <div className="map">
                    <MapBox></MapBox>
                </div>
                <div className="parameters">
                    <StatParameter icon="temperature" value="10°" name="Temperature"></StatParameter>
                    <StatParameter icon="wind" value="10km/h" name="Wind speed"></StatParameter>
                    <StatParameter icon="rain" value="10%" name="Rain chance"></StatParameter>
                    <StatParameter icon="humidity" value="19%" name="Humidity"></StatParameter>
                </div>
            </div>
            <div className="right">
                <Parameters></Parameters>
                <div className="chart">
                    <StatChart datas={[
                        {name: "Page A", pv: 500, amt:500},
                        {name: "Page B", pv: 100, amt:70}
                    ]}/>
                </div>
            </div>
        </div>
        
    )
}

export default Weather;