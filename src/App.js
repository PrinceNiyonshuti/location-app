/** @format */
import axios from "axios";
import React, { useState } from "react";
import Header from "./Layout/Header";
import Loader from "./Layout/Loader";
import Searching from "./Layout/Searching";
import Weather from "./Layout/Weather";

function App() {
	const key = "3aa79aebbfd546bea5bda1f84f02d49f";
	const API_KEY = "7b18cc37163c4edab47d67b012d38f68";
	const [coordinates, setCoordinates] = useState(undefined);
	const [weatherData, setWeatherData] = useState(undefined);
	const [city, setCity] = useState(undefined);
	const [searching, setSearching] = useState(false);

	const onSearchSubmit = async (country) => {
		setWeatherData(undefined);
		setSearching(true);
		axios
			.get(
				`https://api.opencagedata.com/geocode/v1/json?q=${country}&key=${key}`
			)
			.then((response) => {
				if (response.data.results.length === 0) {
					setCoordinates(undefined);
				} else {
					setCoordinates(response.data.results[0].geometry);
					setSearching(false);
				}
			});
	};

	function getWeatherData(coordinates) {
		const { lat, lng } = coordinates;
		fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data.daily);
				setWeatherData(data.daily);
				showWeatherData(data);
				setCoordinates(undefined);
			});
	}

	if (coordinates) {
		getWeatherData(coordinates);
	}

	function showWeatherData(data) {
		setCity(data.timezone);
	}

	return (
		<div>
			<Header city={city} onSearchSubmit={onSearchSubmit} />
			{coordinates ? <Loader /> : " "}
			{searching ? <Searching /> : ""}
			{weatherData ? <Weather weatherData={weatherData} /> : ""}
		</div>
	);
}

export default App;
