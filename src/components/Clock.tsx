import React, {useEffect, useState} from 'react';

// стрелочные часы
export const Clock = () => {
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
		<div className="clock">
			<div
				className="hourHand"
				style={{
					transform: `translateX(-50%) translateY(-100%) rotate(${(currentTime.hours % 12) * 30 + currentTime.minutes / 2}deg)`,
				}}
			></div>
			<div
				className="minuteHand"
				style={{
					transform: `translateX(-50%) translateY(-100%) rotate(${currentTime.minutes * 6}deg)`,
				}}
			></div>
			<div
				className="secondHand"
				style={{
					transform: `translateX(-50%) translateY(-100%) rotate(${currentTime.seconds * 6}deg)`,
				}}
			></div>
		</div>
	);
};

// description
// Хорошо, давайте разберем код компоненты `Clock` пошагово:
//
// 	1. Мы импортируем необходимые зависимости из библиотеки React:
// 	````jsx
// import React, { useState, useEffect } from 'react';
// ```
//
// 2. Мы объявляем компоненту `Clock` с помощью стрелочной функции:
//    ````jsx
//    export const Clock = () => {
//      // ...
//    };
//    ```
//
// 3. Внутри компоненты `Clock` у нас есть состояние `currentTime`, которое будет содержать текущее время. Мы инициализируем его значением, полученным из функции `getCurrentTime()`:
// ````jsx
// const [currentTime, setCurrentTime] = useState(getCurrentTime());
// ```
//
// 4. Мы используем хук `useEffect` для выполнения эффекта, который будет обновлять значение `currentTime` каждую секунду. Внутри эффекта мы создаем интервал, который вызывает функцию `setCurrentTime(getCurrentTime())` каждую секунду:
//    ````jsx
//    useEffect(() => {
//      const interval = setInterval(() => {
//        setCurrentTime(getCurrentTime());
//      }, 1000);
//
//      return () => {
//        clearInterval(interval);
//      };
//    }, []);
//    ```
//
// 5. Внутри компоненты `Clock` у нас есть функция `getCurrentTime()`, которая возвращает объект с полями `hours`, `minutes` и `seconds`, содержащими текущее значение часов, минут и секунд:
// 	````jsx
// function getCurrentTime() {
// 	const now = new Date();
// 	const hours = now.getHours();
// 	const minutes = now.getMinutes();
// 	const seconds = now.getSeconds();
//
// 	return {
// 		hours: hours,
// 		minutes: minutes,
// 		seconds: seconds,
// 	};
// }
// ```
//
// 6. Возвращаемый JSX содержит отображение часов с использованием трех различных элементов `<div>`, представляющих стрелки часов (часовая, минутная и секундная). Каждая стрелка рассчитывает свой угол поворота на основе текущего времени из состояния `currentTime`:
//    ````jsx
//    return (
//      <div className="clock">
//        <div
//          className="hourHand"
//          style={{
//            transform: `translateX(-50%) translateY(-100%) rotate(${(currentTime.hours % 12) * 30 + currentTime.minutes / 2}deg)`,
//          }}
//        ></div>
//        <div
//          className="minuteHand"
//          style={{
//            transform: `translateX(-50%) translateY(-100%) rotate(${currentTime.minutes * 6}deg)`,
//          }}
//        ></div>
//        <div
//          className="secondHand"
//          style={{
//            transform: `translateX(-50%) translateY(-100%) rotate(${currentTime.seconds * 6}deg)`,
//          }}
//        ></div>
//      </div>
//    );
//    ```
//
// 7. В конце мы экспортируем компоненту `Clock`. Обратите внимание, что мы используем ключевое слово `export` перед объявлением функции `Clock`:
// ````jsx
// export const Clock = () => {
// 	// ...
// };
// ```
//
// Таким образом, компонента `Clock` представляет часы с тремя стрелками (часовой, минутной и секундной), которые обновляются каждую секунду, отображая актуальное время.


