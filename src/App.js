import Navbar from "./components/Navbar";
import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Weather from "./components/Weather";

function App() {
	// const navItems = ["Home", "About"];
	const [cityName, setCityName] = useState("");
	const [temp, setTemp] = useState("");
	const [humidity, setHumidity] = useState("");
	const [desc, setDesc] = useState("");
	const [windSpeed, setWindSpeed] = useState("");

	useEffect(() => {
		const getWeatherApi = async () => {
			const response = await fetch(
				"https://api.openweathermap.org/data/2.5/weather?q=" +
					cityName +
					"&units=metric&appid=af7ddd3322a14a1c588d8a42229c806b"
			)
				.then((response) => response.json())
				.then((data) => {
					setTemp(data["main"].temp);
					setHumidity(data["main"].humidity);
					setDesc(data.weather[0].description);
					setWindSpeed(data["wind"].speed);
					console.log(temp, humidity, desc, windSpeed);
				});
		};
		getWeatherApi();
	}, [cityName]);
	const onChange = (e) => {
		setCityName(e.target.value);
	};
	// const onClick = () => {};

	return (
		<>
			{/* <Navbar siteName={"Weather"} /> */}
			<div className="container">
				<Card
					onChange={onChange}
					temp={temp}
					windSpeed={windSpeed}
					humidity={humidity}
					desc={desc}
				/>
			</div>
		</>
	);
}

export default App;
