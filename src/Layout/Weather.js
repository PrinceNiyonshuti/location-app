/** @format */

import moment from "moment";
import React from "react";
import WeatherItem from "../Components/WeatherItem";
function Weather({ weatherData }) {
	
	return (
		<div className="future-forecast">
			<div className="today" id="current-temp">
				<img
					src={
						"http://openweathermap.org/img/wn/" +
						weatherData[0].weather[0].icon +
						"@2x.png"
					}
					alt="weather icon"
					className="w-icon"
				/>
				<div className="other">
					<div className="day">{moment().format('dddd')}</div>
					<div className="temp">Night  {weatherData[0].temp.max}&#176; C</div>
					<div className="temp">Day  {weatherData[0].temp.min}&#176; C</div>
				</div>
			</div>
			<div className="weather-forecast" id="weather-forecast">
				{weatherData.slice(1).map((forecast) => {
					return (
						<WeatherItem
							key={forecast.dt}
							icon={forecast.weather[0].icon}
							day={forecast.dt}
							tempDay={forecast.temp.max}
							tempNight={forecast.temp.min}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Weather;
