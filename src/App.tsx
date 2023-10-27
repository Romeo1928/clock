import React, {useEffect, useState} from 'react';
import './App.css';
import {TimeUncontrol} from "./components/TimeUncontrol";
import {ClockUncontrol} from "./components/ClockUncontrol";
import {TimeControl} from "./components/TimeControl";
import {ClockControl} from "./components/ClockControl";

export type ClockControlType = {
	currentTime: {
		hours: number;
		minutes: number;
		seconds: number;
	};
}

function App() {

	const [currentTime, setCurrentTime] = useState(getCurrentTime());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(getCurrentTime());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	function getCurrentTime() {
		const now = new Date();
		const hours = now.getHours();
		const minutes = now.getMinutes();
		const seconds = now.getSeconds();

		return {
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}

	return (
		<div className="App">
			<TimeUncontrol/>
			<ClockUncontrol/>
			<TimeControl currentTime={currentTime} />
			<ClockControl currentTime={currentTime} />
		</div>
	);
}

export default App;

