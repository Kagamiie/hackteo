import '../index.css'
import '../styles/weather.css'
import StatParameter from "../components/StatParameter";
import StatChart from '../components/StatChart';


function Weather() {




    return (
        <div>
            <div className="parameters">
                <StatParameter icon="temperature" value="10°" name="Temperature"></StatParameter>
                <StatParameter icon="wind" value="10km/h" name="Wind speed"></StatParameter>
                <StatParameter icon="rain" value="10%" name="Rain chance"></StatParameter>
                <StatParameter icon="humidity" value="19%" name="Humidity"></StatParameter>
            </div>
            <div style={{width:'50%'}}>
                <StatChart datas={[
                    {name: "Page A", pv: 500, amt:500},
                    {name: "Page B", pv: 100, amt:70}
                ]}/>
            </div>
        </div>
        
    )
}

export default Weather;