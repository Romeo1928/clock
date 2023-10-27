import React, {FC} from 'react';
import {ClockControlType} from "../App";

export const TimeControl: FC <ClockControlType> = ({currentTime})  => {

	const displayTime  = `${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}`;
	return (
		<div className="App">
			<div>
				<h1>{displayTime}</h1>
			</div>
		</div>
	);
};

