/** @format */

import React from "react";

const WeatherItem = ({ day, tempDay, tempNight, icon }) => {
	var dayName = new Date(day * 1000);
	return (
		<div className="weather-forecast-item">
			<div className="day">
				{dayName.toLocaleString("en-us", { weekday: "long" })}
			</div>
			<img
				src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"}
				alt="weather icon"
				className="w-icon"
			/>
			<div className="temp">Night {tempDay} &#176; C</div>
			<div className="temp">Day {tempNight} &#176; C</div>
		</div>
	);
};

export default WeatherItem;
