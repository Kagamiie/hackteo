import { fetchWeatherApi } from 'openmeteo';
try {
	const paramsLat = localStorage.getItem("paramsLat")
	const paramsLong = localStorage.getItem("paramsLong")
	const paramsDate = localStorage.getItem("paramsDate")
} catch (error) {
	console.log(error)
}

const params = {
	"latitude": 52.52, // paramsLat
	"longitude": 13.41, // paramsLong
	"hourly": ["temperature_2m", "relative_humidity_2m", "precipitation", "wind_speed_10m", "surface_pressure"],
	"timezone": "auto",
	"start_date": "2025-10-04", // paramsDate
	"end_date": "2025-10-04", // paramsDate
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

const response = responses[0];

const latitude = response.latitude();
const longitude = response.longitude();
const elevation = response.elevation();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const utcOffsetSeconds = response.utcOffsetSeconds();

console.log(
	`\nCoordinates: ${latitude}°N ${longitude}°E`,
	`\nElevation: ${elevation}m asl`,
	`\nTimezone: ${timezone} ${timezoneAbbreviation}`,
	`\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
);

const hourly = response.hourly()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
	hourly: {
		time: [...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval())].map(
			(_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
		),
		temperature_2m: hourly.variables(0)!.valuesArray(),
		relative_humidity_2m: hourly.variables(1)!.valuesArray(),
		precipitation: hourly.variables(2)!.valuesArray(),
		wind_speed_10m: hourly.variables(3)!.valuesArray(),
		surface_pressure: hourly.variables(4)!.valuesArray(),
	},
};

// 'weatherData' now contains a simple structure with arrays with datetime and weather data
console.log("\nHourly data", weatherData.hourly)
