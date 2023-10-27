import React, {FC} from 'react';
import {ClockControlType} from "../App";




export const ClockControl: FC <ClockControlType> = ({currentTime}) => {
// style
	const hourStyle = {
		transform: `translateX(-50%) translateY(-100%) rotate(${
			(+currentTime.hours % 12) * 30 + +currentTime.minutes / 2
		}deg)`,
	};

	const minuteStyle = {
		transform: `translateX(-50%) translateY(-100%) rotate(${+currentTime.minutes * 6}deg)`,
	};

	const secondStyle = {
		transform: `translateX(-50%) translateY(-100%) rotate(${+currentTime.seconds * 6}deg)`,
	};

	return (
		<div className="clock">
			<div
				className="hourHand"
				style={hourStyle}
				// style={{
				// 	transform: `translateX(-50%) translateY(-100%) rotate(${(currentTime.hours % 12) * 30 + currentTime.minutes / 2}deg)`,
				// }}
			></div>
			<div
				className="minuteHand"
				style={minuteStyle}
				// style={{
				// 	transform: `translateX(-50%) translateY(-100%) rotate(${currentTime.minutes * 6}deg)`,
				// }}
			></div>
			<div
				className="secondHand"
				style={secondStyle}
				// style={{
				// 	transform: `translateX(-50%) translateY(-100%) rotate(${currentTime.seconds * 6}deg)`,
				// }}
			></div>
		</div>
	);
};


